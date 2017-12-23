---
title: Online and Offline Events with JavaScript
date: "2017-12-15T15:00:03.149Z"
path: "/articles/online-offline-events/"
excerpt: "tbd"
---

In my last post, I wrote about [building offline first applications](https://jonbellah.com/offline-first/). One thing that was not covered was how to detect when a user is online or offline so that your application can respond accordingly, such as when you need to display connectivity status to a user or check whether a user is online before performing an action in your application.

Since the days of IE8, we've had access to a JavaScript API called `navigator.onLine` which returns a boolean value referring to the online status of the browser -- `true` being online, `false` being offline. Unfortunately, `navigator.onLine` is an [unreliable API](https://html.spec.whatwg.org/dev/offline.html#browser-state). In Chrome and Safari it only determines whether a device has connection to a network, not whether or not that network can actually reach the internet. 

For many purposes, though, `navigator.onLine` may be good enough to suit your needs.  So let's take a quick look at how to use it.

### Basic Detection

Let's say, for example, we want to display a message to our users when they're offline. The simplest option would be to use `navigator.onLine` for detection.

To implement our status message, we could write:

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

In the above code, we're just listening for the browser to fire the `online` or `offline` evemts and we're updating the contents of an element with an ID of status to reflect the current state.


### Better Detection

If your application needs a more reliable mechanism for detecting user connectivity, there is hope! Instead of relying on  `navigator.onLine`, we can listen for a request to fail with a network error then trigger our own custom offline status event and begin polling a random asset -- such as a favicon -- until it returns OK, at which time we can trigger our online event.

Sindre Sorhus's [is-online](https://github.com/sindresorhus/is-online) tool takes this approach. Once called, it will run checks against the following resources in parallel:
- Retrieve icanhazip.com via HTTPS
- Query myip.opendns.com on OpenDNS (Node.js only)
- Retrieve Apple's Captive Portal test page (Node.js only)

Nick Stevens put together a great wrapper around `is-online` for use with Redux, aptly called [redux-offline-status](https://github.com/2WheelCoder/redux-offline-status). You just need to trigger the offline status from within your application, and `redux-offline-status` will kick into gear and will trigger the `online` action once it detects connectivity.

### Implementation

So now we know _why_ `navigator.onLine` is unreliable and _what_ we need to do to build more reliable detection, so let's take a look at _how_ to put it all together.