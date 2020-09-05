---
title: Intro to Testing React Applications with Jest and Enzyme
date: "2017-07-31T13:51:03.719Z"
path: "/articles/intro-react-testing/"
excerpt: "React testing (and JS testing, in general) is an incredibly broad topic with a lot of nuance. In this post, I primarily want to focus on exploring some of the basic what's and why's of, as well as a few best practices for, testing React applications."
category:
  label: 'JavaScript'
  slug: 'javascript'
---

Automated testing is something that I've always found particularly interesting. In fact, it's a topic that I've even done a few [talks](https://jonbellah.com/speaking/) and written a few [articles](https://css-tricks.com/visual-regression-testing-with-phantomcss/) on in the past.

React testing (and JS testing, in general) is an incredibly broad topic with a lot of nuance. So, in this post, I'd primarily like to focus on exploring some of the basic "what's" and "why's" of testing React applications with Jest, then finish off with a few best practices.

While this post is an introduction, it does assume that you have some familiarity with React and general testing procedures.

### Why Jest?

If you happen to have tried Jest in the past, particularly prior to version 15, you may have been turned off by the fact that it auto-mocked modules by default (meaning Jest automatically stubbed out functionality with mock data); or that it was rather slow once a test suite reached a decent size.

Fortunately, thanks to a ton of hard work from hundreds of contributors, that's no longer the case.

There are a few reasons that I think Jest is an excellent choice for your test framework:
- **Simple configuration** - it works out-of-the-box for React projects
- **It's fast** - Jest parallelizes tests across workers, spinning up workers asynchronously to read the filesystem and executing them synchronously
- **Snapshots** - even though we don't cover them in this post, I'm a big fan of snapshots. I think snapshots solve a lot of the problems that were virtually unsolveable with visual regression testing (such as false positives from things like sub-pixel differences between machines, OS's, and browsers)

### Jest with Enzyme

[Enzyme](http://airbnb.io/enzyme/) is a JavaScript testing utility built by the team at Airbnb. It's specifically built for React, relying on React TestUtils under-the-hood, but is not specific to Jest; in fact, it also works with other test frameworks like Mocha, Tape, and Karma.

Enzyme isn't a requirement for working with Jest, but without it we would be using the built-in React TestUtils, which include super memorable methods like `scryRenderDOMComponentsWithClass()` and `findRenderedDOMComponentWithClass()`.

Enzyme allows us to test our components in a few different ways, using `mount()`, `shallow()`, and `render()`.

The two most important, in my opinion, are the `mount()` method, which renders our React components in memory using [jsdom](https://github.com/tmpvar/jsdom), or the `shallow()` method, which allows you to render components "one level deep".

Enzyme and Jest allow us to do things like simulate clicks or other DOM interactions, test Redux actions, inspect the props that our React components receive, and a host of other useful things.

### Shallow Rendering

At present, the React core team [recommends using shallow rendering](https://discuss.reactjs.org/t/whats-the-prefered-way-to-test-react-js-components/26/2) to test components. Shallow rendering is a pretty inexpensive process and allows you to isolate components and their immediate children, in order to test each component on its own.

> Tests are executable documentation. What we've started doing is moving tests and the results to the documentation, so you can verify the examples you show in documentation are exactly the code that runs.
> <cite>[Max Stoiber](https://www.youtube.com/watch?v=59Ndb3YkLKA)</cite>

So let's take a look at a basic example of shallow rendering:

```js
import { shallow } from 'enzyme';

describe('<SampleComponent />', () => {
  it('should render three <Foo /> components', () => {
    const wrapper = shallow(<SampleComponent />);
    expect(wrapper.find(Foo)).to.have.length(3);
  });

  it('should render a `#nav-toggle`', () => {
    const wrapper = shallow(<SampleComponent />);
    expect(wrapper.find('#nav-toggle')).to.have.length(1);
  });
});
```

One thing worth noting is that since shallow rendering is such an inexpensive process, there's no real need to render our wrapper in the upper scope of the suite and pass it down to each assertion. Instead, we can just throw away the component after each assertion so we fully isolate each test case.

### Testing DOM Interactions

To test DOM interactions, I would recommend using a library like [sinon](http://sinonjs.org/) to add spies to your test suite, which allow you to test whether a function was called during a particular interaction. 

```js
import { mount } from 'enzyme';
import sinon from 'sinon';
import Foo from './Foo';

describe('<Foo />', () => {
  it('calls componentDidMount', () => {
    sinon.spy(Foo.prototype, 'componentDidMount');
    const wrapper = mount(<Foo />);
    expect(Foo.prototype.componentDidMount.calledOnce).to.equal(true);
  });

  it('allows us to set props', () => {
    const wrapper = mount(<Foo bar="baz" />);
    expect(wrapper.props().bar).to.equal('baz');
    wrapper.setProps({ bar: 'foo' });
    expect(wrapper.props().bar).to.equal('foo');
  });

  it('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = mount((
      <Foo onButtonClick={onButtonClick} />
    ));
    wrapper.find('button').simulate('click');
    expect(onButtonClick.calledOnce).to.equal(true);
  });
});
```

By going this route, you can separate your functional/acceptance test from your unit test. You can first test that a function has been called, then separately test that the called function returns expected values.

Sinon can also be used to provide DOM interaction testing with shallow rendering, where you would otherwise be required to use `mount()` and simulate interactions with jsdom.

```js
import { shallow } from 'enzyme';
import sinon from 'sinon';

describe('<SampleComponent />', () => {
  it('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(<Foo onButtonClick={onButtonClick} />);
    wrapper.find('button').simulate('click');
    expect(onButtonClick.calledOnce).to.equal(true);
  });
});
```

The above two code samples come from the [Enzyme docs](https://github.com/airbnb/enzyme), which I highly recommend taking a read through.

### Summary

Jest and Enzyme make testing React applications an absolute breeze... but we've only really scratched the surface of what they can do. We've not yet covered unit testing, snapshot testing, full DOM testing, or any of a handful of other tools and methodologies that we have at our disposal.

Next time you spin up a new React project, be sure to consider Jest for your test framework.