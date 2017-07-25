---
title: Load Random Images with PHP
date: "2013-04-25T07:00:00.000Z"
path: "/articles/load-random-images-with-php/"
excerpt: "Todays snippet is a quick and easy one. While developing a new site for the agency where I work, I decided to display a random set of gifs on the 404 page. There are 7 images and I only wanted to display one per page load."
---

Todays snippet is a quick and easy one. While developing a new site for the agency where I work, I decided to display a random set of gifs on the 404 page. There are 7 images and I only wanted to display one per page load.

There are a number of ways to go about it, and the methods get increasingly more complicated when you're wanting to randomly load ads and such, but for this purpose a simple PHP `rand()` does the trick.

This is it looks like:

```html
<img src="http://www.example.com/images/image-<?php echo rand(1,7); ?>.jpg">
```

In order to get this to work, you'll want to name your images: image-1.jpg, image-2.jpg, image-3.jpg, etc.

When the page loads, the PHP rand() will echo a random number (in this case, a number between 1 and 7), completing the URL and thus displaying the corresponding image.

Give it a try in your projects and let me know what you think!