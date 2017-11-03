---
title: Offline First
date: "2017-11-01T12:32:24.389Z"
path: "/articles/offline-first/"
excerpt: "tbd"
---

Have you ever tried to check your email while riding the subway in New York? Checked your Twitter feed over airplane wifi? Tried to pull up a map while traveling in a foreign country?

If so, you're probably familiar with the problems of poor connectivity.

It took more than 25 years for the first three billion people to come online. Over the next decate, that number is [expected to double](http://next3b.com/the-next-3-billion/). The vast majority of these people will be coming online in under-developed countries, using under-powered devices, and browsing the internet over low-bandwidth connections.

In order to build websites and applications that are accessible and attractive to these new users, we must think about the offline experience. Much the same way that we now take a mobile first approach to front-end development, we need to start thinking in terms of offline first for application development.

### What does it mean to take an offline first approach?

Whenever this topic comes up, inevitably the first question I hear is "how can we go offline first if connectivity is required to access our application?"

It's a compeletely legitimate and understandable question -- and certainly indicates that the concept of "offline first" could be better named, a bit like "serverless" or "the cloud" -- but ultimately shows a bit of a misunderstanding of the idea. Offline first does not mean that users should be able to reach your site on their first visit without an internet connection. It means that when we, as developers, build applications, we should consider the experience of slow and intermittent connectivity.

Through a combination of tools and technologies such as [Service Workers](http://www.w3.org/TR/service-workers/) and [IndexedDB](http://www.w3.org/TR/IndexedDB/), we can create applications that cache important assets locally once the user has visited the site for the first time. Then, if and when they lose connectivity, they can still interact with the site.

For example, [Una Kravetz](https://una.im/save-offline/) has implemented a "save for offline" feature for the articles on her site. This is a very thoughtful feature that I've personally taken advantage of when sitting in an airport waiting to board a flight, I was able to save a handful of articles prior to turning on airplane mode... giving me plenty to read without having to pay for in-flight wifi.

Let's say, as another example, that you have an application that supports live chat between users. By taking an offline first approach, you can build your application such that if a user loses connectivity during the act of sending a message, those messages can be saved and queued up locally so that as soon as they have a connection again, those messages can be sent out.

In fact, this approach serves as one of the pillars of what Google has termed [progressive web apps](https://developers.google.com/web/progressive-web-apps/).

### Progressive Web Apps

Android currently runs on more than [2 billion devices](https://qz.com/986042/google-goog-designed-android-go-to-win-over-the-next-billion-smartphone-users-in-the-developing-world/) and is adding more every second. While smartphone penetration in the US sits around [80%](https://www.comscore.com/Insights/Blog/US-Smartphone-Penetration-Surpassed-80-Percent-in-2016), it's only around [30%](https://qz.com/608005/india-has-overtaken-the-us-to-become-the-worlds-second-largest-smartphone-market/) in India. Approximately 9 out of every 10 smartphone devices shipped across the world today use Android.

Remember our statistic about the next three billion users?

Google has defined three core tenants of progressive web apps, applications must be: reliable, fast, and engaging. 

> When launched from the user’s home screen, service workers enable a Progressive Web App to load instantly, regardless of the network state.
> <cite>[Google](https://developers.google.com/web/progressive-web-apps/#reliable)</cite>



----------


### Notes
- enables background syncing
- enables push notifications
- "A service worker is a script that your browser runs in the background, separate from a web page, opening the door to features that don't need a web page or user interaction"
- "The reason this is such an exciting API is that it allows you to support offline experiences, giving developers complete control over the experience."
- Service workers can't access the DOM directly, instead interact via postMessage.
- Service workers make extensive use of promises.
- "It's terminated when not in use, and restarted when it's next needed, so you cannot rely on global state within a service worker's onfetch and onmessage handlers. If there is information that you need to persist and reuse across restarts, service workers do have access to the IndexedDB API."
- To install a service worker, you need to register it.
- "After the activation step, the service worker will control all pages that fall under its scope, though the page that registered the service worker for the first time won't be controlled until it's loaded again."
- "During development you'll be able to use service worker through localhost, but to deploy it on a site you'll need to have HTTPS setup on your server."
- "One subtlety with the register() method is the location of the service worker file. You'll notice in this case that the service worker file is at the root of the domain. This means that the service worker's scope will be the entire origin. In other words, this service worker will receive fetch events for everything on this domain. If we register the service worker file at /example/sw.js, then the service worker would only see fetch events for pages whose URL starts with /example/ (i.e. /example/page1/, /example/page2/)."
- A user agent may terminate service workers at any time it:
  - Has no event to handle.
  - Detects abnormal operation: such as infinite loops and tasks exceeding imposed time limits (if any) while handling the events.
- "In terms of network control, it acts like a proxy server sitting on the client, you get to decide what to do on a request-by-request basis. You can use this to make stuff work faster, offline, or build new features."
- "With the ServiceWorker, we get to first-render over a second faster, and our first render includes images, which takes 16 seconds without ServiceWorker. They're cached images of course, but ServiceWorker allows us to present a fully-rendered view while we go to the network for latest content."
- "Whenever you navigate to page within scope of your ServiceWorker, the browser checks for updates in the background. If the script is byte-different, it's considered to be a new version, and installed (note: only the script is checked, not external importScripts). However, the old version remains in control over pages until all tabs using it are gone. Then the old version is garbage collected and the new version takes over."
- "ServiceWorker comes with a caching API, letting you create stores of responses keyed by request"
- "A service worker is a script that stands between your website and the network, giving you, among other things, the ability to intercept network requests and respond to them in different ways."
- "Service Workers are a proxy that live between the web-app and the user. They work in a separate thread and can cache assets, hook into requests, and communicate with the website via messages."
- "Service worker scripts run in a separate thread in the browser from the pages they control."
- "There are ways to communicate between workers and pages, but they execute in a separate scope. That means you won’t have access to the DOM of those pages"
- "JavaScript in a service worker must not block. You need to use asynchronous APIs. For example, you cannot use localStorage in a service worker (localStorage is a synchronous API). "
- "Once the service worker has been registered and downloaded, it gets installed in the background. Your service worker can listen for the install event and perform tasks appropriate for this stage."
- "By pre-caching some static assets (images, CSS, JavaScript) that are used by many pages on my website, I can speed up loading times by grabbing these out of cache, instead of fetching from the network on subsequent page loads."
- "By pre-caching an offline fallback page, I can show a nice page when I can’t fulfill a page request because the user is offline."
- "Possibly not a bug, but certainly a confusion: If you console.log from service workers, Chrome will continue to re-display (rather than clear) those log messages on subsequent page requests. This can make it seem like events are firing too many times or like code is executing over and over."
- "What exactly you consider "exceptional" is up for debate, as always. But, you should always ask, before rejecting a promise: if this function was synchronous, would I expect a thrown exception under this circumstance? Or perhaps a failure value (like null, false, or undefined)? You should think about which behavior is more useful for consumers of your API. If you’re not sure, pretend your API is synchronous and then think if your developers would expect a thrown exception."
- "If the network request is successful (i.e. the promise resolves), go ahead and stash a copy of the HTML document in the appropriate cache (content). This is called read-through caching. Responses may be used only once."
-`Response` objects may be used only once.
- Don’t cache bad responses: `if (response.ok)`
- "Watch out for CDNs if you are restricting fetch handling to your origin. When constructing my first service worker, I forgot that my hosting provider sharded assets (images and scripts) onto its CDN, so that they no were no longer served from my website’s origin (lyza.com). Whoops! That didn’t work. I ended up disabling the CDN for the affected assets (but optimizing those assets, of course!)."
- "When a new version of the Service Worker is deployed, the browser will automatically detect byte differences and activate the worker version on next visit."
- "We use offline and online events to detect changes in connectivity and display the banner when users go offline."

```js
bindEvents () {
  window.addEventListener('offline', this.onOfflineStatus)
  window.addEventListener('online', this.onOnlineStatus)
}

onOfflineStatus () {
  this.showOfflineBanner()
}

onOnlineStatus () {
  this.hideOfflineBanner()
}
```

- [Immediate Claim](https://serviceworke.rs/immediate-claim.html) - This recipe shows how to have the service worker immediately take control of the page without waiting for a navigation event. Basic service worker registration requires a navigation event to occur before the service worker starts working. This recipe illustrates a trick you can use for the service worker to immediately start working upon install.
- "Once installed and activated, a ServiceWorker can programmatically determine how to respond to requests for resources from your origin, even when the browser is offline. ServiceWorker can be used to power the so-called "Offline First" web."
- "Given the fact that you can implement this stuff in a progressive enhancement style (doesn't affect unsupported browsers), it's a great opportunity to get ahead of the pack."
- "ServiceWorker is event-driven and your code should aim to be stateless. That’s because when a ServiceWorker isn't being used it's shut down, losing all state. You have no control over that, so it's best to avoid any long-term dependence on the in-memory state."

```js
self.addEventListener('fetch', function(event){
  console.log(event.request.url);
  // return something for each interception
});
```
- A service worker is an event-driven worker registered against an origin and a path. It takes the form of a JavaScript file that can control the web page/site it is associated with, intercepting and modifying navigation and resource requests, and caching resources in a very granular fashion to give you complete control over how your app behaves in certain situations (the most obvious one being when the network is not available.)
- APIs such as synchronous XHR and localStorage can't be used inside a service worker.
- After that it is downloaded every 24 hours or so. It may be downloaded more frequently, but it must be downloaded every 24h to prevent bad scripts from being annoying for too long.
- If there is an existing service worker available, the new version is installed in the background, but not yet activated — at this point it is called the worker in waiting. It is only activated when there are no longer any pages loaded that are still using the old service worker.
- As soon as there are no more such pages still loaded, the new service worker activates (becoming the active worker).  Activation can happen sooner using ServiceWorkerGlobalScope.skipWaiting() and existing pages can be claimed by the active worker using Clients.claim().
- There is also an activate event. The point where this event fires is generally a good time to clean up old caches and other things associated with the previous version of your service worker.
- Your service worker can respond to requests using the FetchEvent event. You can modify the response to these requests in any way you want, using the FetchEvent.respondWith method.
- A fetch event fires every time any resource controlled by a service worker is fetched, which includes the documents inside the specified scope, and any resources referenced in those documents (for example if index.html makes a cross origin request to embed an image, that still goes through its service worker.)
- caches.match(event.request) allows us to match each resource requested from the network with the equivalent resource available in the cache, if there is a matching one available. The matching is done via url and vary headers, just like with normal HTTP requests.
- Service Workers are a way to execute code in a persistent, background process contained in the web browser. The code is event-driven, meaning the events that fire in the scope of a Service Worker are what drives its behavior.
- 


### Notes from experimenting
- Doesn't always update the service worker easily. Sometimes have to go into the app tab and delete the service worker... can see weird inconsistencies between a hard refresh and soft refresh.