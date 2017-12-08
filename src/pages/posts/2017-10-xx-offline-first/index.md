---
title: Building Offline-First Applications
date: "2017-11-01T12:32:24.389Z"
path: "/articles/offline-first/"
excerpt: "tbd"
---

Have you ever tried reading your email while riding the subway? Checked your Twitter feed while connected to in-flight wifi? Attempted to pull up a map while wandering around in a foreign country?

If so, you're probably familiar with the problem of poor connectivity.

It took more than 25 years for the first three billion people to come online, but over the next decade that number is [expected to double](http://next3b.com/the-next-3-billion/). The vast majority of these new users will be coming online in under-developed countries, using under-powered devices, and browsing the internet over low-bandwidth connections.

It's with these people and problems in mind that developers have shifted to an offline first approach for websites and applications.

### What does offline first mean?

Before we dig any deeper, I should clarify that offline first doesn't mean that users should be able to reach your site on their first visit without an internet connection. It means that when we, as developers, build applications, we should consider the experience of slow and intermittent connectivity. A user being offline [should not be treated as an error condition](https://alistapart.com/article/offline-first#section5).

For example, [HospitalRun](http://hospitalrun.io/) is an offline first application for managing hospitals in the developing world, places where intermittent connectivity is just a fact of life. It allows records to be carried to remote clinics, where there may be no internet, and then syncs those records when there is.

[Una Kravetz](https://una.im/save-offline/) has implemented a "save for offline" feature for the articles on her site. This is a very useful and thoughtful feature that I've personally taken advantage of while sitting at the airport, waiting to board a flight. I was able to save a handful of articles prior to turning on airplane mode, which gave me plenty to read without having to pay for in-flight wifi.

Offline first applications are driven by two key components: [service workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) and some form of client-side, offline-capable storage (such as [PouchDB](https://pouchdb.com/) or [localForage](https://localforage.github.io/localForage/)).

We won't dive too much into the storage aspect of things with this post, but let's go ahead and take a look at the star of the show: service workers.

### Service Workers

A service worker is an event-driven script that browsers run in a separate thread, known as a worker context. Since service workers are run in a worker context, they can't directly access the DOM. Instead, they interact with the client through `postMessage`.

A service worker can intercept and modify navigation and resource requests, giving you complete control over how your app behaves in various situations. This is one of the most powerful features of service workers -- allowing you to cache good responses from API requests and having your worker respond with that data if the user goes offline.

*As an aside, service workers provide access to a few other features worth noting, such as channel messaging, background syncing, and push notifications. Features that will help bridge the gap between native and web apps. Those features are out of the scope of this post, though.*

#### Lifecycle

As I mentioned in the last section, service workers are event-driven scripts. A service worker lifecycle can contain any or all of six distinct events:

- Install
- Activate
- Fetch
- Message
- Sync
- Push

In this post, we're only going to focus on the first three event types, as they're the basic pieces necessary to set up offline first support.

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

In the code above, we name this our precache bucket `precache-v1` and our runtime bucket `runtime`. The reason we split these into two separate caches is so that we can easily invalidate our runtime cache without dumping out our precached files and routes or vice versa.

In the `PRECACHE_URLS` constant, we define an array of files that we want to precache. In this example, we're only caching the index, stylesheet, and primary javascript file -- typically what you'd expect with a single page application. This is also a great place to preload data and assets for commonly-visited pages in your application. 

Next, let's take a look at the `install` event.

The first event a service worker runs through during it's lifecycle is `install`, which is triggered as soon as the worker executes and is only called once per service worker. The install event is where we should cache all the assets we'll need before being able to control the client.

The promise that is passed to `event.waitUntil()` tells the browser when your install completes, and whether or not it was successful. If the promise rejects, the install fails, and the browser discards the service worker.

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

Once the service worker is installed and ready to take control of clients, we'll get an `activate` event. Here we'll clean up any caches that may be left over from old service workers.

Finally, let's look at the `fetch` event, where the magic really starts happening. The `fetch` event acts as an intermediary between a client request and the servers response, it contains important information about the request being made. For example:


```js
self.addEventListener('fetch', event => {
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

This `fetch` handler first checks to see if the request is for the same-origin, filtering out cross-origin requests to services like Google Analytics, and serves responses from our cache. If no response is found, it populates the runtime cache with the response from the network before returning it.

There are a lot of other ways we can fine-tune our `fetch` responses; for example, we could change our handler so that it only responds to `GET` requests by checking the `event.request.method` before `event.respondWith()`. 

#### Gotchas

Service workers are still a bit raw and can be a real pain sometimes. There are definitely some _gotchas_ to be aware of when you get started.

First, service workers require you to use HTTPS. Allowing a script to run in the background on the client, asynchronously fetching data and images, opens the door to malicious exploitation by [man-in-the-middle attacks](https://www.veracode.com/security/man-middle-attack). 

Be careful with the way that you handle file naming and cache keys with service workers. You should keep the file name consistent and trigger new installs by changing the cache key in the `sw.js` file itself. [Alexander Pope](https://www.youtube.com/watch?v=CPP9ew4Co0M) has an excellent talk about what can happen if you, instead, put the cache key on the service worker file itself.

Your code should be stateless, since the worker is shut down and loses state whenever it isn't in use. JavaScript in a service worker must not block, meaning you need to use asynchronous APIs. For example, you cannot use `localStorage` in a service worker (`localStorage` is a synchronous API).

Debugging service workers can be tricky, since the console is preserved.

### Further Reading
There are tons of great resources out there to learn more about service workers and the offline-first push. Here are a few that I found particularly enlightening:

- [Offline first](https://github.com/pazguille/offline-first) - Repository listing virtually every resource you could ever need to deep dive into offline first.
- [Designing Offline-First Web Apps](https://alistapart.com/article/offline-first)
- [Service Worker, what are you?](https://medium.com/@kosamari/service-worker-what-are-you-ca0f8df92b65)
- [Service worker examples](https://github.com/GoogleChrome/samples/tree/gh-pages/service-worker) - Google has a great public repository of examples that I highly recommend taking a look at, they go a long way towards demystifying some of the trickier parts of service workers.