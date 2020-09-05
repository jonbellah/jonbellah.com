---
title: Separation of Concerns
date: "2016-03-21T06:00:00.000Z"
path: "/articles/separation-of-concerns/"
excerpt: "In short, separation of concerns is a guiding principal in software development centered on the idea that programs should have distinct sections, with each section being responsible for its own concern."
category:
  label: 'Frontend'
  slug: 'frontend'
---

I review a _lot_ of code. That experience has given me an interesting insight into the approach and thought process of many, many other developers. I often run across code where developers are mixing the responsibilities of their HTML, CSS, and JavaScript, making their code difficult to update or build upon. 

The term _separation of concerns_ has been around for a quite some time, [more than 40 years, actually](https://en.wikipedia.org/wiki/Separation_of_concerns#Origin). In short, separation of concerns is a guiding principal in software development centered on the idea that programs should have distinct sections, with each section being responsible for its own concern.

A _concern_ is a very broad term that can refer to just about anything that relates to a website or other piece of software. In this case, we're going to be talking specifically about the roles and concerns that each language should have in the front-end stack. By separating concerns between languages, you can drastically improve both the quality and maintainability of a project.

### Separating HTML and CSS

A common issue I've encountered is developers using presentational classes in their markup. A presentational class is any CSS class that is used to define the look or feel of a particular element or component, but is not descriptive of the actual element or component.

For example, much of Bootstrap relies on presentational classes, which is especially evidenced in the grid system.

```html
<div class="my-element col-lg-3 col-md-4 col-sm-6 col-xs-12">
```

Now, as you see, your markup is not only defining _what _your element is, but also how it looks. That's CSS territory.

Rather than using presentational classes, why not use Sass mixins?

```html
<div class="my-element">
```

```css
.my-element {
    @include col-lg(3);
    @include col-md(4);
    @include col-sm(6);
    @include col-xs(12);
}
```

This approach accomplishes exactly the same thing, but keeps your HTML descriptive of the document and your CSS squarely in its own lane.

### Separating CSS and JavaScript

Another common issue that I've encountered is CSS classes being too tightly coupled with JavaScript targeting and manipulation. Have you ever changed a class (say, to be more semantic) only to realize that it broke a bunch of other stuff?

There a couple of ways that I like to separate CSS and JavaScript.

First, when I target an element, I generally prefer to target an ID (if possible)... and I prefix that ID with `js-`. This will always signify to me, or anyone reading through my code, that an element is being targeted with JavaScript. I also never attach styles to the prefixed classes.

In practice, this would look like:

```html
<div id="js-my-element" class="my-element">
```

or

```html
<div class="my-element js-my-element">
```

### Putting It All Together

With this approach your HTML, CSS, and JavaScript all play their own, clear roles. They do not overlap in their responsibilities and your code ends up being more semantic and flexible; making your application significantly easier to jump into and maintain.