---
title: Acceptance Testing React Applications with Jest and Enzyme
date: "2017-07-21T04:11:28.533Z"
path: "/articles/acceptance-testing-react/"
---

In the arsenal of testing methodologies that software engineers have at their disposal, acceptance testing is, in my opinion, one of the most interesting. Unit, integration, and functional testing are all important in building upon each other to ensure that individual functions and features behave properly, but acceptance testing really allows us to dig in where the rubber meets the road.

Acceptance tests are the highest level of functional testing in a system. They represent a series of tests against the full system, simulating the interactions of users against that system. 

In plainer terms, think of it as simulating the users browser environment and testing various pieces of functionality to ensure that they meet the specification; i.e., does clicking on the search button take me to the search page? If we load a page with a slug of `/articles/acceptance-testing-react/`, is the contents of that page what we expect it to be?

The International Software Testing Qualifications Board (ISTQB) defines acceptance testing as:
> Formal testing with respect to user needs, requirements, and business processes conducted to determine  whether or not a system satisfies the acceptance criteria and to enable the user, customers or other authorized entity to determine whether or not to accept the system.

Traditionally, acceptance tests have actually been a pretty manual process; with many companies staffing entire departments of user acceptance testers. Nowadays, acceptance testing is primarily an automated process.

That's not to say that user acceptance testing (UAT) is completely automated now, as it's still quite prominent, especially in agencies, where the end customer does their final testing of the product before launch/delivery.

So without further ado, let's dig in.

### Enter Jest and Enzyme

[Jest](https://facebook.github.io/jest/) is a JavaScript testing tool and framework, originally developed by Facebook. Jest is framework agnostic, but certainly caters more to the React community (though its popularity appears to be spreading). It's lightning fast, incredibly easy to configure, and has a number of great optional features; such as mocking and snapshot testing.

[Enzyme](http://airbnb.io/enzyme/), on the other hand, is a JavaScript testing utility built by the team at Airbnb. It's specifically targeted at React, but has packages available for use with a handful of different testing frameworks. Enzyme allows us to mount our React components and make assertions about what the contents of that component *should* and *should not* be.

Enzyme is great because it provides a super simple API for DOM manipulating and traversal. The Enzyme API may look familiar, because it actually mimics the jQuery API.

When we combine these, Jest will be our test runner, we will write tests in Jest format, but use Enzyme as a layer on top to allow us to mount our React components, traverse the DOM, and make assertions about the contents of those components.

### Getting Started

So what kind of things can we actually *test*?

Well, Jest and Enzyme give us the ability to render not only particular routes, but individual components by themselves through what's called shallow rendering. Combining shallow rendering with actual route rendering, we can test how a component behaves on its own, as well as how it integrates with the other components around it in real world scenarios.