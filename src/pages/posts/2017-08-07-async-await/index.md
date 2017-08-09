---
title: A Look at Async/Await in ES2017
date: "2017-08-09T14:17:39.475Z"
path: "/articles/async-await/"
excerpt: ""
---

Writing asynchronous code in JavaScript has traditionally been a pretty messy endeavor. It usually meant writing callbacks on top of callbacks, handling errors multiple levels deep, resulting in the infamous [pyramid of doom](https://en.wikipedia.org/wiki/Pyramid_of_doom_(programming)).

```js
fs.readdir(source, function (err, files) {
  if (err) {
    console.log('Error finding files: ' + err)
  } else {
    files.forEach(function (filename, fileIndex) {
      console.log(filename)
      gm(source + filename).size(function (err, values) {
        if (err) {
          console.log('Error identifying file size: ' + err)
        } else {
          console.log(filename + ' : ' + values)
          aspect = (values.width / values.height)
          widths.forEach(function (width, widthIndex) ]
            height = Math.round(width / aspect)
            console.log('resizing ' + filename + 'to ' + height + 'x' + height)
            this.resize(width, height).write(dest + 'w' + width + '_' + filename, function(err) {
              if (err) console.log('Error writing file: ' + err)
            })
          }.bind(this))
        }
      })
    })
  }
})
```

Ew, right? This is a sample from [callbackhell.com](http://callbackhell.com) that I think is a pretty excellent example of exactly what async functions aim to save us from.

### Overview

Async functions, a major feature in the ES2017 spec, are effectively a combination of two big ES6 features: Promises and generator functions. 

When an async function is called, it returns a Promise. If you're not familiar with Promises, Axel Rauschmayer has an excellent primer on [2ality](http://2ality.com/2014/09/es6-promises-foundations.html). In short, though, a Promise is an object that represents the eventual success or failure value of an asynchronous operation.

On the other hand, we have generator functions. Generators are functions that can be exited and later re-entered, with context stored across re-entrances. In the context of async functions, generators give us the ability to pause a function, wait for an asynchronous operation to finish, then jump back in and continue execution.

In broad terms, you can think of async functions a lot like regular Promises. When you resolve a Promise, you use the `.then()` callback to continue execution. With async functions, `await` behaves a lot like `.then()`, in that it will pause the execution of your function until that Promise has been resolved.

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
fetchJson('https://example.com/file.json')
.then(obj => console.log(obj));
```
Here we're using an async function to fetch some JSON from a file, parse that file, and return the contents. We use await to pause while fetch goes and gets the file, then again on the next line while the `request.text()` Promise is resolved.

In async functions, errors are handled with `try...catch` blocks. In the sample above, if our Promise is rejected we just log the error to the console.

It's important to note that if your async function does not declare a `catch`, errors will be swallowed, meaning that errors will be silently disposed of unless explicitly (and manually) handled.

### Stuff worth noting

Async functions are started synchronously, but settled asynchronously. Meaning, they're fired off in execution order, but the Promise is resolved and returned asynchronously. 

As you can see in the example above, an async function is not limited to a single `await`; you can `await` the resolution of multiple asynchronous operations within the same function. Each `await` declaration will wait for the previous value to resolve before performing its own operation.

One big *gotcha* with async functions is that you cannot to use `await` within a [nested function](http://calculist.org/blog/2011/12/14/why-coroutines-wont-work-on-the-web/). For example, if you have a callback within your async function that includes `await`, that `await` will not be respected. 

Another interesting thing to note is that in async functions, the returned Promises are not wrapped; meaning if you return a non-Promise value then that value fulfills the Promise `p`, and if you do return a Promise, then that `p` now mirrors the state of the Promise.

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

### Start writing better async code today!

Pretty cool, right? Ready for the good news? Most browsers already have native [support](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function#Browser_compatibility) for async functions... for those that don't, Babel has a [polyfill](https://babeljs.io/docs/plugins/transform-async-to-generator/).

### Further Reading

I came across a lot of helpful resources on async functions while researching this article. Here are a few of my favorites:
* [Async/await proposal](https://tc39.github.io/ecmascript-asyncawait/)
* [ExploringJS](http://exploringjs.com/es2016-es2017/ch_async-functions.html)
* [Understand Promises before you start using async/await](https://medium.com/@bluepnume/learn-about-promises-before-you-start-using-async-await-eb148164a9c8)
* [Simplifying Asynchronous Coding with Async Functions](https://www.sitepoint.com/simplifying-asynchronous-coding-async-functions/)
