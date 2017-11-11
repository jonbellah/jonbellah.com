---
title: Taking an Offline First Approach
date: "2017-11-01T12:32:24.389Z"
path: "/articles/offline-first/"
excerpt: "tbd"
---

Have you ever tried to check your email while riding the subway in New York? Checked Twitter over airplane wifi? Tried to pull up a map while walking around in a foreign country?

If so, you're probably familiar with the problems of poor connectivity.

It took more than 25 years for the first three billion people to come online, but over the next decade that number is [expected to double](http://next3b.com/the-next-3-billion/). The vast majority of these new users will be coming online in under-developed countries, using under-powered devices, and browsing the internet over low-bandwidth connections.

In order to build websites and applications that are accessible and readily available to these new users, we must think about the offline experience. A user being offline [should not be treated as an error condition](https://alistapart.com/article/offline-first#section5).

Offline apps have become more of a focus for me since I started working for a company that puts on conferences (as conferences, in general, tend to have notoriously bad wifi).

### What does it mean to take an offline first approach?

Whenever this topic comes up, inevitably the first question I hear is "how can we go offline first if connectivity is required to access our application?"

It's a compeletely legitimate and understandable question -- and certainly indicates that the concept of "offline first" could be better named, a bit like "serverless" or "the cloud" -- but ultimately shows a bit of a misunderstanding of the idea. Offline first does not mean that users should be able to reach your site on their first visit without an internet connection. It means that when we, as developers, build applications, we should consider the experience of slow and intermittent connectivity.

For example, [Una Kravetz](https://una.im/save-offline/) has implemented a "save for offline" feature for the articles on her site. This is a very thoughtful feature that I've personally taken advantage of when sitting in an airport waiting to board a flight, I was able to save a handful of articles prior to turning on airplane mode... giving me plenty to read without having to pay for in-flight wifi.

Let's say, as another example, that you have an application that supports live chat between users. By taking an offline first approach, you can build your application such that if a user loses connectivity during the act of sending a message, those messages can be saved and queued up locally so that as soon as they have a connection again, those messages can be sent out.

In fact, this approach serves as one of the pillars of what Google has termed [progressive web apps](https://developers.google.com/web/progressive-web-apps/).

### Progressive Web Apps

Android currently runs on more than [2 billion devices](https://qz.com/986042/google-goog-designed-android-go-to-win-over-the-next-billion-smartphone-users-in-the-developing-world/) and is adding more every second. While smartphone penetration in the US sits around [80%](https://www.comscore.com/Insights/Blog/US-Smartphone-Penetration-Surpassed-80-Percent-in-2016), it's only around [30%](https://qz.com/608005/india-has-overtaken-the-us-to-become-the-worlds-second-largest-smartphone-market/) in India. Approximately 9 out of every 10 smartphone devices shipped across the world today use Android.

Remember our statistic about the next three billion users?

Google has defined three core tenants of progressive web apps, applications must be: reliable, fast, and engaging.

> When launched from the user’s home screen, service workers enable a Progressive Web App to load instantly, regardless of the network state.
> <cite>[Google](https://developers.google.com/web/progressive-web-apps/#reliable)</cite>

Through a combination of tools and technologies such as [Service Workers](http://www.w3.org/TR/service-workers/) and [IndexedDB](http://www.w3.org/TR/IndexedDB/), we can create applications that cache important assets locally once the user has visited the site for the first time. Then, if and when they lose connectivity, they can still interact with the site.

### Service Workers

A service worker is a script that browsers run in the background, which open the door for features that do not require user interaction to operate. In fact, service workers can't directly access the DOM, instead they interact through `postMessage`.

"A service worker is an event-driven script, registered against an origin and a path. It takes the form of a JavaScript file that can control the web page/site it is associated with, intercepting and modifying navigation and resource requests, and caching resources in a very granular fashion to give you complete control over how your app behaves in certain situations (the most obvious one being when the network is not available.)"

"ServiceWorker is event-driven and your code should aim to be stateless. That’s because when a ServiceWorker isn't being used it's shut down, losing all state. You have no control over that, so it's best to avoid any long-term dependence on the in-memory state."

Don’t cache bad responses: `if (response.ok)`

"Service worker scripts run in a separate thread in the browser from the pages they control."

"We use offline and online events to detect changes in connectivity and display the banner when users go offline."

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

"JavaScript in a service worker must not block. You need to use asynchronous APIs. For example, you cannot use localStorage in a service worker (localStorage is a synchronous API). "


### Further Reading
- [Offline-first](https://github.com/pazguille/offline-first) - Repository listing virtually every resource you could ever need to deep dive into offline first.
- [Designing Offline-First Web Apps](https://alistapart.com/article/offline-first)
- [Service Worker, what are you?](https://medium.com/@kosamari/service-worker-what-are-you-ca0f8df92b65)
- [offlinefirst.org](http://offlinefirst.org/)