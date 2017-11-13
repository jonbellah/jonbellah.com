---
title: Taking an Offline First Approach
date: "2017-11-01T12:32:24.389Z"
path: "/articles/offline-first/"
excerpt: "tbd"
---

Have you ever tried reading your email while riding the subway? Checked your Twitter feed while connected to in-flight wifi? Attempted to pull up a map while wandering around in a foreign country?

If so, you're probably familiar with the problems of poor connectivity.

It took more than 25 years for the first three billion people to come online, but over the next decade that number is [expected to double](http://next3b.com/the-next-3-billion/). The vast majority of these new users will be coming online in under-developed countries, using under-powered devices, and browsing the internet over low-bandwidth connections.

It's with these people and problems in mind that developers have shifted to an offline-first approach for websites and applications.

### What does offline first mean?

Before we dig any deeper, I should clarify that offline first doesn't mean that users should be able to reach your site on their first visit without an internet connection. It means that when we, as developers, build applications, we should consider the experience of slow and intermittent connectivity. A user being offline [should not be treated as an error condition](https://alistapart.com/article/offline-first#section5).

For example, [Una Kravetz](https://una.im/save-offline/) has implemented a "save for offline" feature for the articles on her site. This is a very thoughtful feature that I've personally taken advantage of when sitting in an airport waiting to board a flight, I was able to save a handful of articles prior to turning on airplane mode... giving me plenty to read without having to pay for in-flight wifi.

[HospitalRun](http://hospitalrun.io/) is an offline first application for managing hospitals in the developing world, places where intermittent connectivity is just a fact of life. It allows records to be carried to remote clinics, where there may be no internet, and then syncs those records when there is.

Offline first applications are driven by two key components: [service workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) and some form of client-side, offline-capable storage (such as [PouchDB](https://pouchdb.com/) or [localForage](https://localforage.github.io/localForage/)). We won't dive into the storage piece too much in this post, but let's take a look at the star of the show: service workers.

### What is a service worker?

A service worker is an event-driven script that browsers run in the background. This background processing opens the door for features that do not require user interaction to operate. In fact, service workers can't directly access the DOM and instead interact with the client through `postMessage`.

A service worker can intercept and modifying navigation and resource requests, giving you complete control over how your app behaves in various situations.

Service worker code should be stateless, since the worker is shut down and loses state whenever it isn't in use.

JavaScript in a service worker must not block, meaning you need to use asynchronous APIs. For example, you cannot use `localStorage` in a service worker (`localStorage` is a synchronous API).


### Further Reading
- [Offline-first](https://github.com/pazguille/offline-first) - Repository listing virtually every resource you could ever need to deep dive into offline first.
- [Designing Offline-First Web Apps](https://alistapart.com/article/offline-first)
- [Service Worker, what are you?](https://medium.com/@kosamari/service-worker-what-are-you-ca0f8df92b65)