---
title: Online and Offline Events with JavaScript
date: "2017-12-26T15:00:03.149Z"
path: "/articles/online-offline-events/"
excerpt: "Let's say we want to display a message to our users when they're offline. Unfortunately, navigator.onLine is considered an unreliable API."
---

In my last post, I wrote about [building offline first applications](https://jonbellah.com/offline-first/). One thing I did not cover was how to detect when a user is online or offline, so that your application can respond accordingly -- such as when you need to display connectivity status to a user or check whether a user is online before performing an action in your application.

Going all the way back to IE8, JavaScript has provided access to `navigator.onLine`, which is a simple little API that returns a boolean where `true` means the user is online, `false` being offline. Unfortunately, though, `navigator.onLine` is considered an [unreliable API](https://html.spec.whatwg.org/dev/offline.html#browser-state). In Chrome and Safari it only determines whether a device has connection to a network, not whether or not that network can actually reach the internet. 

However, for many purposes, `navigator.onLine` may be enough to suit your needs.  So let's take a quick look at how to use it.

### Basic Detection

Let's say, for example, we want to display a message to our users when they're offline. To implement our status message, we could write:

```js
function updateOnlineStatus() {
  document.getElementById('status').innerText = 'Online';
}

function updateOfflineStatus() {
  document.getElementById('status').innerText = 'Offline';
}

window.addEventListener('online',  updateOnlineStatus);
window.addEventListener('offline', updateOfflineStatus);
```

In the above code, we're just listening for the browser to fire the `online` or `offline` events and we're updating the contents of an element with an ID of status to reflect the current state.

### Better Detection

If your application needs a more reliable mechanism for detecting user connectivity, there is hope! Instead of relying on  `navigator.onLine`, we can get a little more creative.

The most reliable method that I know of is to listen for a request to fail with a network-related error, then trigger a custom offline status event. From there the application begins polling a random asset -- such as a favicon -- every few seconds until it is able to succesfully retrieve that asset, at which time we can trigger the online event.

I'm a big fan of _not_ reinventing the wheel, so in my opinion, the best way to implement this functionality is to use [Offline.js](http://github.hubspot.com/offline/) from HubSpot. Offline.js takes this approach and actually goes one awesome step further -- once it detects that a user has gone offline, it begins capturing AJAX requests, queues them up, and remakes them as soon as the user comes back online.


### Further Reading
- [Navigator.onLine Docs (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorOnLine/onLine)
- [Offline.js](http://github.hubspot.com/offline/)
- [redux-offline-status](https://github.com/2WheelCoder/redux-offline-status)
