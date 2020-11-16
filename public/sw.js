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

importScripts('workbox-v4.3.1/workbox-sw.js');
workbox.setConfig({ modulePathPrefix: 'workbox-v4.3.1' });

workbox.core.setCacheNameDetails({ prefix: 'gatsby-plugin-offline' });

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    url: 'webpack-runtime-e7a14728d920de34e5bc.js',
  },
  {
    url: 'styles.01877a06b072953c14c7.css',
  },
  {
    url: 'styles-1043fb1b9b9e69356781.js',
  },
  {
    url: 'framework-acd7498685eeb36e39da.js',
  },
  {
    url: 'app-103a034f0799e1448098.js',
  },
  {
    url: 'offline-plugin-app-shell-fallback/index.html',
    revision: 'bb280a20b1018ac1dd98439c7a85c794',
  },
  {
    url: 'component---cache-caches-gatsby-plugin-offline-app-shell-js-d3ee03be2ef85643f368.js',
  },
  {
    url: 'polyfill-4dc72534576fb0eb62b5.js',
  },
  {
    url: 'cb1608f2-19b5df309484518b94fe.js',
  },
  {
    url: 'a9a7754c-6e5e57374e6ba6227a53.js',
  },
  {
    url: '41da4e8d84deca061cb33e079e2580f6b256fd4f-1a311d67c03d0750a20f.js',
  },
  {
    url: '652232b3a713ea4e5511641430f7acfcd0c87aba-a2c956581d93206d611e.js',
  },
  {
    url: 'component---src-pages-about-tsx-deffa8181d0df05ae477.js',
  },
  {
    url: 'page-data/about/page-data.json',
    revision: 'bcea690ce3f71d390a08ba9805c167bb',
  },
  {
    url: 'page-data/app-data.json',
    revision: '97a4adad37498f803164275994a476d6',
  },
  {
    url: 'component---src-pages-portfolio-tsx-35c1575b54becce74a39.js',
  },
  {
    url: 'page-data/portfolio/page-data.json',
    revision: '76f4180b4aa5eb011dfc65afed6d4599',
  },
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(
  /(\.js$|\.css$|static\/)/,
  new workbox.strategies.CacheFirst(),
  'GET',
);
workbox.routing.registerRoute(
  /^https?:.*\/page-data\/.*\.json/,
  new workbox.strategies.StaleWhileRevalidate(),
  'GET',
);
workbox.routing.registerRoute(
  /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
  new workbox.strategies.StaleWhileRevalidate(),
  'GET',
);
workbox.routing.registerRoute(
  /^https?:\/\/fonts\.googleapis\.com\/css/,
  new workbox.strategies.StaleWhileRevalidate(),
  'GET',
);

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`);

const { NavigationRoute } = workbox.routing;

let lastNavigationRequest = null;
let offlineShellEnabled = true;

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources));
  },

  clearPathResources: (event) => {
    event.waitUntil(idbKeyval.clear());
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true;
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false;
  },
};

self.addEventListener(`message`, (event) => {
  const { gatsbyApi: api } = event.data;
  if (api) MessageAPI[api](event, event.data);
});

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url);

  const params = pathname.match(/:(.+)/)[1];
  const data = {};

  if (params.includes(`=`)) {
    params.split(`&`).forEach((param) => {
      const [key, val] = param.split(`=`);
      data[key] = val;
    });
  } else {
    data.api = params;
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]();
  }

  if (!data.redirect) {
    return new Response();
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  });
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event });
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request);
  }

  lastNavigationRequest = event.request.url;

  let { pathname } = new URL(event.request.url);
  pathname = pathname.replace(new RegExp(`^`), ``);

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`);
  if (!resources || !(await caches.match(`/app-103a034f0799e1448098.js`))) {
    return await fetch(event.request);
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request);
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`;
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell);
  return await caches.match(offlineShellWithKey);
});

workbox.routing.registerRoute(navigationRoute);

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest);
