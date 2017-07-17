---
title: How to Create a Simple CSS Dropdown Menu
date: "2013-08-12T07:00:00.000Z"
path: "/articles/create-a-simple-css-dropdown/"
---

Dropdown menus provide a nice hierarchical view of your menu structure, allowing you to help narrow the visitors focus and find exactly what they're looking for and reducing navigation clutter. Today, we'll take a look at how to create a CSS dropdown menu. This is a very simple implementation that is ideal for just about any situation.

This is the same CSS dropdown that is used here on CSSForge, minus the jQuery slide out animation. If you decide to add jQuery animation, this also serves as a graceful fallback for slow connections and terrible browsers.

Without further ado:

<p data-height="300" data-theme-id="515" data-slug-hash="iwyFs" data-default-tab="css,result" data-user="jonbellah" data-embed-version="2" data-pen-title="Simple CSS Dropdown Menu" class="codepen">See the Pen <a href="https://codepen.io/jonbellah/pen/iwyFs/">Simple CSS Dropdown Menu</a> by Jon Bellah (<a href="https://codepen.io/jonbellah">@jonbellah</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

### The HTML

There's not a lot about the HTML that's special. The main thing to note is that we've nested the sub-menu `ul` inside the `li` where we want it to drop from, in this case the Snippets `li`. This is the same way that WordPress nests menu and sub-menu items; so if you're using the built-in WordPress menu manager, then you don't need to make any changes to your HTML.

### The CSS

There are a few important parts of our CSS. The first is `.site-navigation ul li ul { visibility: hidden; }`. This hides our dropdown menu by default. The second important piece of CSS is the `.site-navigation ul li:hover > ul { visibility: visible; }`. This makes our dropdown menu display whenever the visitor hovers over the associated `li`. To ensure that our dropdown menu displays under the correct menu item, we set our `.site-navigation li { position: relative; }`, so that we can `positon:absolute;` the dropdown `ul`