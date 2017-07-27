---
title: Testing React Applications with Jest and Enzyme
date: "2017-07-21T04:11:28.533Z"
path: "/articles/testing-react-jest-enzyme/"
excerpt: "tbd"
---

Testing is a topic that I've always been particularly interested in. I've done a few [talks](https://jonbellah.com/speaking/) and written a few [articles](https://css-tricks.com/visual-regression-testing-with-phantomcss/) on the topic in the past.

When I picked up React a couple of years ago, one of the first things I did was dig into some of the testing options. If you happen to have tried Jest in the past, particularly prior to version 15, you may have been turned off, as I was, by the fact that Jest auto-mocked modules by default. Not to mention the fact that it was rather slow.

Fortunately, that's is no longer the case.

Coupled with some incredible performance boosts over the last couple of years, Jest has become a real force to be reckoned with in the JavaScript testing space.

React testing (and JS testing, in general) is a broad topic with a lot of nuance. In this post, I want to just cover some of the basic "what's" and "why's", as well as a few general best practices for testing React components. 

### Why Jest?

There are a few reasons that I think Jest is an excellent choice for your test framework:
- Incredibly simple configuration (it works out-of-the-box for React projects)
- It's fast (parallelizes tests across workers, spinning up workers asynchronously to read the filesystem and executing them synchronously)
- Snapshots solve a lot of the problems that were virtually unsolveable with visual regression testing (such as false positives from things like sub-pixel differences between machines, OS's, and browsers).

Jest's assertion library is well thought-out and is generally similar to what you'd expect if you're moving to Jest from another library, like Mocha.

### Jest with Enzyme

[Enzyme](http://airbnb.io/enzyme/) is a JavaScript testing utility built by the team at Airbnb. It's specifically targeted at React, but can be used with a handful of different test frameworks -- meaning it's not specific to Jest.

Enzyme is great because it provides a super simple API for DOM manipulation and traversal. The Enzyme API may look familiar, because it actually mimics the jQuery API.

Without Enzyme (or other similar testing utility), we would be using the built-in React TestUtils, which include cool methods like `scryRenderDOMComponentsWithClass()` and `findRenderedDOMComponentWithClass()`.

Enzyme allows us to render our React components in memory and make assertions about what the contents and behaviors of that component *should* and *should not* be. With the rendered component, we can test the props that our React component receives, we can simulate clicks or other DOM interactions, and a host of other useful scenarios.

### Getting Started

As mentioned before, Jest and Enzyme give us the ability to render not only particular routes (through the Enzyme `mount` method), but individual components by themselves through what's called shallow rendering.

By combining shallow rendering with actual route rendering, we can test how a component behaves on its own, as well as how it integrates with the other components around it in real world user scenarios.

> Tests are executable documentation. What we've started doing is moving tests and the results to the documentation, so you can verify the examples you show in documentation are exactly the code that runs.
> <cite>[Max Stoiber](https://www.youtube.com/watch?v=59Ndb3YkLKA)</cite>

At present, the React core team [recommends using shallow rendering](https://discuss.reactjs.org/t/whats-the-prefered-way-to-test-react-js-components/26/2) to test components.

### Shallow Rendering

Shallow rendering allows you to render a component "one level deep" and make assertions about that component. 