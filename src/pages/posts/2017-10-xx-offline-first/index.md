---
title: Taking an Offline First Approach
date: "2017-11-01T12:32:24.389Z"
path: "/articles/offline-first/"
excerpt: "tbd"
---

Have you ever tried reading your email while riding the subway? Checked your Twitter feed while connected to in-flight wifi? Attempted to pull up a map while wandering around in a foreign country?

If so, you're probably familiar with the problems of poor connectivity.

It took more than 25 years for the first three billion people to come online, but over the next decade that number is [expected to double](http://next3b.com/the-next-3-billion/). The vast majority of these new users will be coming online in under-developed countries, using under-powered devices, and browsing the internet over low-bandwidth connections.

It's with these people and problems in mind that developers have shifted to an offline first approach for websites and applications.

### What does offline first mean?

Before we dig any deeper, I should clarify that offline first doesn't mean that users should be able to reach your site on their first visit without an internet connection. It means that when we, as developers, build applications, we should consider the experience of slow and intermittent connectivity. A user being offline [should not be treated as an error condition](https://alistapart.com/article/offline-first#section5).

For example, [Una Kravetz](https://una.im/save-offline/) has implemented a "save for offline" feature for the articles on her site. This is a very thoughtful feature that I've personally taken advantage of when sitting in an airport waiting to board a flight, I was able to save a handful of articles prior to turning on airplane mode... giving me plenty to read without having to pay for in-flight wifi.

[HospitalRun](http://hospitalrun.io/) is an offline first application for managing hospitals in the developing world, places where intermittent connectivity is just a fact of life. It allows records to be carried to remote clinics, where there may be no internet, and then syncs those records when there is.

Offline first applications are driven by two key components: [service workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) and some form of client-side, offline-capable storage (such as [PouchDB](https://pouchdb.com/) or [localForage](https://localforage.github.io/localForage/)).

We won't dive too much into the storage aspect of things with this post, but let's go ahead and take a look at the star of the show: service workers.

### Service Workers

A service worker is an event-driven script that browsers run in a separate thread, known as a worker context. Since service workers are run in a worker context, they can't directly access the DOM. Instead, they interact with the client through `postMessage`.

A service worker can intercept and modify navigation and resource requests, giving you complete control over how your app behaves in various situations. This is one of the most powerful features of service workers... allowing you to cache good responses from API requests and having your worker respond with that data if the user goes offline.

*As an aside, service workers enable a whole host of other features that are worth noting, such as background syncing and push notifications. Features that will help bridge the gap between native and web apps.*

#### Lifecycle

As I mentioned in the last section, service workers are event-driven scripts. A service worker lifecycle includes six distinct events:

- Install
- Activate
- Fetch
- Message
- Sync
- Push

In this post, we're only going to focus on the first three event types, as they're the most minimum components necessary to set up offline first support.

Let's take a look at our `sw.js` file and break down each piece. The first thing we should do is set up our cache keys and precache routes.

```js
const PRECACHE = 'precache-v1';
const RUNTIME = 'runtime';

const PRECACHE_URLS = [
  'index.html',
  'styles.css',
  'main.js'
];
```

In the code above, we name this our precache bucket `precache-v1` and our runtime bucket `runtime`. The reason we split these into two separate caches is so that we can easily invalidate our runtime cache without dumping out our precached files and routes.

In the `PRECACHE_URLS` constant, we define an array of files that we want to precache. In this example, we're only caching the index, stylesheet, and primary javascript file, but this is a great place to preload data and assets for commonly-visited pages in your application. 

Next, let's take a look at the `install` event.

```js
// The install handler takes care of precaching the resources we always need.
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(PRECACHE)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(self.skipWaiting())
  );
});
```

Now let's take a look at the `activate` event.

```js
// The activate handler takes care of cleaning up old caches.
self.addEventListener('activate', event => {
  const currentCaches = [PRECACHE, RUNTIME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        return caches.delete(cacheToDelete);
      }));
    }).then(() => self.clients.claim())
  );
});
```

Finally, let's look at the `fetch` event.

```js
// The fetch handler serves responses for same-origin resources from a cache.
// If no response is found, it populates the runtime cache with the response
// from the network before returning it to the page.
self.addEventListener('fetch', event => {
  // Skip cross-origin requests, like those for Google Analytics.
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return caches.open(RUNTIME).then(cache => {
          return fetch(event.request).then(response => {
            // Put a copy of the response in the runtime cache.
            return cache.put(event.request, response.clone()).then(() => {
              return response;
            });
          });
        });
      })
    );
  }
});
```

#### Gotchas

Service workers are still a bit raw and can be a real pain sometimes. There are definitely some _gotchas_ to be aware of when you get started.

First, service workers require you to use HTTPS. Allowing a script to run in the background on the client, asynchronously fetching data and images, opens the door to malicious exploitation by [man-in-the-middle attacks](https://www.veracode.com/security/man-middle-attack). 

Be careful with the way that you handle file naming and cache keys with service workers. You should keep the file name consistent and trigger new installs by changing the cache key in the `sw.js` file itself. [Alexander Pope](https://www.youtube.com/watch?v=CPP9ew4Co0M) has an excellent talk about what can happen if you, instead, put the cache key on the service worker file itself.

Your code should be stateless, since the worker is shut down and loses state whenever it isn't in use. JavaScript in a service worker must not block, meaning you need to use asynchronous APIs. For example, you cannot use `localStorage` in a service worker (`localStorage` is a synchronous API).

Debugging service workers can be tricky, since the console is preserved.

### Further Reading
- [Offline first](https://github.com/pazguille/offline-first) - Repository listing virtually every resource you could ever need to deep dive into offline first.
- [Designing Offline-First Web Apps](https://alistapart.com/article/offline-first)
- [Service Worker, what are you?](https://medium.com/@kosamari/service-worker-what-are-you-ca0f8df92b65)
- [Service worker examples](https://github.com/GoogleChrome/samples/tree/gh-pages/service-worker) - Google has a great public repository of examples that I highly recommend taking a look at, they go a long way towards demystifying some of the trickier parts of service workers.