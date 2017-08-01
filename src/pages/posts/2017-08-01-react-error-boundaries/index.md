---
title: Improved Error Handling in React 16 with Error Boundaries
date: "2017-07-31T04:11:28.533Z"
path: "/articles/react-error-boundary/"
excerpt: "React 16 has entered the beta phase and with it comes with two of my favorite additions in a long time: returning arrays in the render() method and improved support for error boundaries."
---

React 16 has entered the [beta](https://github.com/facebook/react/issues/10294) phase and with it comes with two of my favorite additions in a long time: returning arrays with the `render()` method and improved support for error boundaries.

If you've worked with React in the past, you've probably encountered cryptic error messages that had nothing to do with your code.

There are a few scenarios that can cause React to throw cryptic errors: your application code is swallowing errors (whether through unhandled Promise rejections or faulty `try...catch`), your component returns an error instead of an actual React component, etc.

> Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.
> <cite>[React Docs](https://facebook.github.io/react/blog/2017/07/26/error-handling-in-react-16.html)</cite>

We first got a glimpse of error boundaries with React in version 15, with the `unstable_handleError()` method, but as the name implies, it was an unstable API; meaning there was no real guarantee that it would work. It was a work in progress.

After lots of work and discussion, the React team has introduced the `componentDidCatch()` method, which works like a `catch {}` block, except it's built for React components. 

### Using error boundaries

A class component becomes an error boundary when it defines the `componentDidCatch` lifecycle method. 

Creating a basic `ErrorBoundary` component looks like this:

```js
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    logErrorToMyService(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Uh oh! Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
```

There are a couple of things worth pointing out in the above sample. 

First, in `componentDidCatch`, you'll notice the pseudo-method `logErrorToMyService()`. If you're using a third-party error tracking service, like Rollbar or Raygun, this is an excellent place to log those errors.

Second, our `render()` method is a pretty straightforward passthrough. If the `hasError` state is false, we return `this.props.children`, which would be everything between our `<ErrorBoundary></ErrorBoundary>` wrapper.

If the `hasError` state is true, we just return an error message. This block can be customized to display different messages based on the error. We could, for example, set our error message in state and then display it in our `render` method.

For example:

```js
componentDidCatch(error, info) {
	this.setState({
		hasError: true,
		error
	});
}

render() {
	if (this.state.hasError) {
		return <h1>Uh oh! {this.state.error};
	}
}
```

To output your error boundary, just wrap your component with the new `ErrorBoundary` component like so:

```js
<ErrorBoundary>
  <MyComponent />
</ErrorBoundary>
```

### Placing error boundaries
As mentioned before, error boundaries will catch errors anywhere in it's child component tree (but not within itself). As such, you don't have to use the `ErrorBoundary` component just at the root of your application.

It's a good idea to *have* an error boundary at the root of your application, but by placing error boundaries in strategic locations throughout your application, you can more easily isolate the problematic child component trees.

For example, each major feature can have an error boundary to itself. Dan Abramov mentioned in the [official React blog](https://facebook.github.io/react/blog/2017/07/26/error-handling-in-react-16.html) post that Facebook Messenger uses four different error boundaries, one for each of it's major components. 

One important thing to note is that after upgrading to React 16, **errors not caught within any error boundaries will result in unmounting the entire React component tree**; so it's important to at least have, if nothing else, an error boundary at the root as a catch-all.

All in all, I think this is a super exciting new feature and one that I've been hoping for for a long time. 


