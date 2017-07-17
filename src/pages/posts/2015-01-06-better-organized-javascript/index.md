---
title: Writing Better Organized Front-End JavaScript
date: "2015-01-06T07:00:00.000Z"
path: "/articles/better-organized-javascript/"
---

Creating organized and easily maintainable front-end related JavaScript files is something that took me a long time to figure out. It's also something that I've noticed a lot of other people struggling with; by way of code reviews and just looking through other peoples projects, I've noticed just how easy it is to end up with spaghetti-like JavaScript.

The title of this post alludes to the fact that this is a method to organize your front-end JavaScript -- it's phrased this way because I understand that this not necessarily how you'd organize a Node.js app, for example.

Writing organized, well documented, and easily maintainable code is something that every developer should strive for. You should always try to make it as easy as possible for the next developer to look through your code, find what they need, and make the changes that they need.

To accomplish this, I use JavaScript objects and methods to handle any front-end related scripts. Using methods allows me to write code in a way that makes it very easy to discern what a block of code is doing and exactly when and where it's running.

### Objects & Methods

Let's start by taking a look at an example of what I mean by using objects and methods. I've created a file called `core.js` and included the following:

```javascript
var Jon = {
    setupAnalytics: function() {
        var _gaq = _gaq || [];
        _gaq.push(['_setAccount', 'UA-XXXXX-X']);
        _gaq.push(['_trackPageview']);

        (function() {
            var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
            ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
        })();
    },

    mobileNavigation: function() {
        // JavaScript here		
    },

    setupPortfolio: function() {
        // JavaScript here
    },
};

jQuery( function() {
    // Vars
    var $body = document.getElementsByTagName('body')[0];

    // Sitewide scripts
    Jon.setupAnalytics();
    Jon.mobileNavigation();

    // Portfolio scripts
    if ( $body.hasClass( 'portfolio' ) ) {
        Jon.setupPortfolio();
    }
});
```

As you can see, organizing JavaScript this way makes it very easy to tell what code is doing and where it's doing it. `var Jon = {}` is our object. `setupAnalytics: function() {}` is the first method within our object.

At the bottom of the document, we've created a jQuery wrapper function (note: jQuery isn't required to use objects and methods, but I'm well-aware of how popular it is so this tutorial uses jQuery as an example). Inside our wrapper function, we call our JavaScript methods when and where they need to be run.

Then, all you need to do is include `core.js` at the bottom of your page and you're off and running.

### Managing Third Party Libraries

This method of organization also makes it easy to manage arguments that are passed to external vendor scripts and such.  For example, say you're using a slider on your page and you need to pass some arguments to the slider script:

```javascript
var Jon = {
    testimonialSlider: function() {
        jQuery('#testimonial-slider').responsiveSlides({
            auto : true,
            pager: false,
            nav: true,
            timeout: 7000,
            speed: 800,
            prevText: '« Previous',
            nextText: 'Next »'
        });
    },
}

jQuery( function() {
    Jon.testimonialSlider();
});
```

### Project Structure

I don't recommend concatenating vendor scripts into your `core.js` file. Instead, I recommend including external libraries only on the pages and contexts that they're needed. In WordPress, you can use conditional `wp_enqueue_script()`'s to accomplish this.

Personally, I use Grunt to manage concatenation and minification. So I organize all of my own scripts into an `assets/js/src/*.js` folder and I place vendor scripts in an `assets/js/vendor/*.js` folder. Then I set Grunt to concatenate and minify everything in the `assets/js/src/` folder and ignore all vendor scripts.

While I understand performance concerns with adding more requests to a page, I try to organize projects in the most maintainable way possible. To me, this means managing external dependencies and libraries by themselves, rather than rolling them all into one big file and hoping that the next developer knows how to unroll them.