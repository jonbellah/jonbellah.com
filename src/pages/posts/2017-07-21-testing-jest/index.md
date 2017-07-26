---
title: Testing React Applications with Jest and Enzyme
date: "2017-07-21T04:11:28.533Z"
path: "/articles/testing-react-jest-enzyme/"
excerpt: "tbd"
---

Testing is a topic that I've always been particularly interested in. I've done a few [talks](https://jonbellah.com/speaking/) and [articles](https://css-tricks.com/visual-regression-testing-with-phantomcss/) on the topic in the past.

When I picked up React a couple years ago, one of the first things I did was dig into some of the testing options. If you happen to have tried Jest in the past, prior to version 15, you may have been turned off, as I was, by the fact that Jest auto-mocked modules by default. Not to mention the fact that it was rather slow.

Fortunately, that's is no longer the case. Coupled with some incredible performance boosts over the last couple of years, Jest has become a real force to be reckoned with in the JavaScript testing space.

### Why Jest?

There are a few reasons that I think Jest is an excellent choice for your test framework: incredibly simple configuration (it works out-of-the-box for React projects), it's fast (parallelizes tests across workers), and snapshots solve a lot of the problems that were virtually unsolveable with visual regression testing.

### Enter Jest and Enzyme

[Jest](https://facebook.github.io/jest/) is a JavaScript testing tool and framework, originally developed by Facebook. Jest is framework agnostic, but certainly caters more to the React community (though its popularity appears to be spreading). It's lightning fast, incredibly easy to configure, and has a number of great optional features; such as mocking and snapshot testing.

[Enzyme](http://airbnb.io/enzyme/), on the other hand, is a JavaScript testing utility built by the team at Airbnb. It's specifically targeted at React, but has packages available for use with a handful of different testing frameworks. Enzyme allows us to mount our React components and make assertions about what the contents of that component *should* and *should not* be.

Enzyme is great because it provides a super simple API for DOM manipulating and traversal. The Enzyme API may look familiar, because it actually mimics the jQuery API.

When we combine these, Jest will be our test runner, we will write tests in Jest format, but use Enzyme as a layer on top to allow us to mount our React components, traverse the DOM, and make assertions about the contents of those components.

### Getting Started

So what kind of things can we actually *test*?

Well, Jest and Enzyme give us the ability to render not only particular routes, but individual components by themselves through what's called shallow rendering. Combining shallow rendering with actual route rendering, we can test how a component behaves on its own, as well as how it integrates with the other components around it in real world scenarios.