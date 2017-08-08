---
title: A Look at Async/Await in ES2017
date: "2017-08-05T12:34:08.393Z"
path: "/articles/async-await/"
excerpt: ""
---



Writing asynchronous code in JavaScript has traditionally been a pretty messy bag. It almost always meant writing callbacks on top of callbacks, creating the infamous [pyramid of doom](https://en.wikipedia.org/wiki/Pyramid_of_doom_(programming)).

Async functions, a major feature of the ECMAScript 2017 spec, aims to save you from callback hell.

### Foundation

Async functions, at their core, are a combination of two big ES6 features: Promises and generator functions. 

When an async function is called, it returns a Promise. If you're not familiar with Promises, Dr. Axel Rauschmayer has an excellent primer on his blog, [2ality](http://2ality.com/2014/09/es6-promises-foundations.html). In short, though, a Promise is an object that represents the eventual success or failure value of an asynchronous operation.

Generator functions have a lot of neat properties, but the key piece with regards to async functions is that they give us the ability to pause the execution of a function and wait for an asynchronous operation to finish before moving on.

### Cool, so how can I use async functions?

Let's start with a basic example that may look a little familiar:
```js
async function fetchJson(url) {
    try {
        const request = await fetch(url);
        const text = await request.text();
        return JSON.parse(text);
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
    }
}

// Can be called with:
fetchJson('http://example.com/some_file.json')
.then(obj => console.log(obj));
```
Here we're using an async function to fetch some JSON from an arbitrary file, parse that file, and return the contents. 

As you can see in the example above, an async function is not limited to a single `await`; you can `await` the resolution of multiple asynchronous operations. You can even use `await` with a return value: `return await JSON.parse(text)` would work just fine.

Errors are handled with `try...catch` blocks. If your async function does not declare a `catch`, errors will be swallowed, meaning that errors will be silently disposed of unless explicitly (and manually) handled.

### Things to Know

There are four main variants of async functions to be aware of:
```js
async function foo {}
const foo = async function() {}
let obj = { async foo() {} }
const foo = async() => {}
```

Async functions are started synchronously, but settled asynchronously. Meaning, they're fired off in execution order, but the Promise is resolved and returned asynchronously.

You're not allowed to use `await` within a [nested function](http://calculist.org/blog/2011/12/14/why-coroutines-wont-work-on-the-web/).

In async functions, the returned Promises are not wrapped; meaning if you return a non-Promise value then that value fulfills the Promise `p`, and if you do return a Promise, then that `p` now mirrors the state of the Promise.

```js
async function asyncFunc() {
    return Promise.resolve('abc');
}
asyncFunc()
.then(x => console.log(x)) // abc
```

If your returned Promise is rejected, then your async function will also be rejected.
```js
async function asyncFunc() {
    return Promise.reject(new Error('Oh no!'));
}
asyncFunc()
.catch(err => console.error(err)); // Error: Oh no!
```