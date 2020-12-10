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
    "url": "webpack-runtime-89f28832ac6fda11d2a9.js"
  },
  {
    "url": "styles.178fd91dab2e3c0891df.css"
  },
  {
    "url": "styles-f2c1808a00cfb3adf39e.js"
  },
  {
    "url": "framework-55f7b2ba736e89fdc740.js"
  },
  {
    "url": "app-c5cb28951e0c0ed3fb6a.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "32dfc2620ec1ebb2ae2bed0369722971"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-a95b272f8c25b9a8a758.js"
  },
  {
    "url": "polyfill-8c9cdc0d74d5e14f599b.js"
  },
  {
    "url": "cb1608f2-5dddeba2950a716ec7b8.js"
  },
  {
    "url": "a9a7754c-082be2602a417998a132.js"
  },
  {
    "url": "b0d73d0bfa1e29aba93caf471b38f73cc4be4739-2c2307a5adf9ed71fbaf.js"
  },
  {
    "url": "41da4e8d84deca061cb33e079e2580f6b256fd4f-b37768a9e2e10ef25d44.js"
  },
  {
    "url": "652232b3a713ea4e5511641430f7acfcd0c87aba-fc2b7d0f76894a1d7eac.js"
  },
  {
    "url": "73b546df8c86257b7ff4e175cb58ce8570f7e9bd-9b6aa9403fa93e1f3b90.js"
  },
  {
    "url": "component---src-pages-about-tsx-41961666d73db8b2a3e8.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "a1a3f294c63a52e2fc0396841f4df68f"
  },
  {
    "url": "page-data/sq/d/1597851504.json",
    "revision": "77850ba5e0d07e87ac2e21d28f77757d"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "150a1785fa823cc99399bcac55e25ae3"
  },
  {
    "url": "component---src-pages-portfolio-tsx-179e5ce228f6413ae291.js"
  },
  {
    "url": "page-data/portfolio/page-data.json",
    "revision": "76f4180b4aa5eb011dfc65afed6d4599"
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
  if (!resources || !(await caches.match(`/app-c5cb28951e0c0ed3fb6a.js`))) {
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
