/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-947e19d7c0c1bb5d25a6.js"
  },
  {
    "url": "styles.178fd91dab2e3c0891df.css"
  },
  {
    "url": "styles-84a9bc99193fe5828ffe.js"
  },
  {
    "url": "framework-fc1db31f678bd7aa66d8.js"
  },
  {
    "url": "app-87801eadd462123325e4.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "d678237470c1656817fcb9edc9bebbbf"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-fd4fb51a6fac1c18bdde.js"
  },
  {
    "url": "polyfill-6b26ee8f1088ab7e6b17.js"
  },
  {
    "url": "cb1608f2-5dddeba2950a716ec7b8.js"
  },
  {
    "url": "a9a7754c-082be2602a417998a132.js"
  },
  {
    "url": "b0d73d0bfa1e29aba93caf471b38f73cc4be4739-f899fe019948def2e535.js"
  },
  {
    "url": "41da4e8d84deca061cb33e079e2580f6b256fd4f-73a3a5bf451f4ea61bb9.js"
  },
  {
    "url": "652232b3a713ea4e5511641430f7acfcd0c87aba-32b264bb7c96c7374628.js"
  },
  {
    "url": "component---src-pages-about-tsx-cd53e169c99bfede7fd1.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "a1a3f294c63a52e2fc0396841f4df68f"
  },
  {
    "url": "page-data/sq/d/1597851504.json",
    "revision": "70f3f5c54fc15beed1357aae5d4657f1"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "3aabc9109f61f4512f4d1ec8485e18cf"
  },
  {
    "url": "component---src-pages-portfolio-tsx-c391bb4db2a3870303f4.js"
  },
  {
    "url": "page-data/portfolio/page-data.json",
    "revision": "19c6a97377529c18112317e2595b95e4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-87801eadd462123325e4.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
