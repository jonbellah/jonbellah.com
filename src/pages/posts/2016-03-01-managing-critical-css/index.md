---
title: Managing Critical CSS
date: "2016-03-01T07:00:00.000Z"
path: "/articles/managing-critical-css/"
excerpt: "When it comes to optimizing performance, there are a ton of little things that we, as developers, can do to squeeze every last ounce of speed out of our sites. One of these methods involves inlining the CSS for elements that appear."
---

Performance is critical. [Seriously](https://wpostats.com/). When it comes to optimizing performance, there are a ton of little things that we, as developers, can do to squeeze every last ounce of speed out of our sites. One of these methods involves inlining the CSS for elements that appear, for lack of a better term, "above the fold." This is known as the critical CSS.

The objective with inlining critical CSS is to deliver styles to the visitor as quickly as possible. The idea of critical CSS is rooted in the way that HTTP/1.1 requests are handled. The initial round trip to the server returns 16kb of data, so stuffing your critical styles into that initial request allows the browser to begin rendering those critical styles.

### What should be considered critical CSS?

Any styles that are displayed 'above the fold' (I know, I know... bear with me) should be considered critical. While 'above the fold' is an antiquated term that doesn't apply anymore, we can still determine our critical CSS based on what tends to show up in the viewport across devices. For example, we know that our header will always display at the top of the page, so we should inline the styles associated with the header. When we define our critical CSS, which you'll see in the next section, we essentially pass our tool some basic viewport parameters, which it then uses to automagically determine which styles to pull into our critical file.

### How do I setup and manage my critical CSS?

I am a big fan of using [grunt-criticalcss](https://github.com/filamentgroup/grunt-criticalcss) for managing critical CSS. In the past, critical CSS was difficult to manage, because if you made a change, for example, to the header then you would need to also make those changes in your critical CSS. What grunt-criticalcss does, is it uses [PhantomJS](http://phantomjs.org/) (a headless browser) to pull up your site and actually see which styles are shown in the viewport you define.

~~Here on this site, I use grunt-criticalcss to manage my critical styles.~~ (This site has been updated and now uses [GatsbyJS](https://gatsbyjs.org), which does it's own CSS management).

The first thing we should do is define our grunt-criticalcss task in our `Gruntfile.js`. My task looks like:

```javascript
criticalcss: {
    custom: {
        options: {
            url: 'http://jonbellah.dev',
            outputfile: 'assets/css/critical.css',
            filename: 'assets/css/style.css'
        }
    }
}
```

In my header.php file, immediately after opening the `<head>` tag, I include a reference to my grunt-criticalcss stylesheet.

```php
<style>
    <?php include( 'assets/css/critical.min.css' ); ?>
</style>
```

Now, when I run `$ grunt criticalcss`, Grunt will spin up a headless browser, navigate to my development site, grab all of the selectors that are displayed in the default viewport size (1200x900) and sent them to my critical.css file, which is then minified and output at the very top of my page.

Now I don't have to manage my critical CSS manually, everything just works nicely and can be easily updated if styles change.

Note that with the growing adoption of HTTP/2, critical CSS will begin declining in importance, since many of the limitations around requests and concurrent file downloads have been lifted. So, if your site supports [HTTP/2](https://http2.github.io/) you don't need to worry about critical CSS.