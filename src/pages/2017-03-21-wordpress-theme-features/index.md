---
title: WordPress Multisite Architecture with the Theme Features API
date: "2017-03-21T13:06:00.000Z"
path: "/articles/wordpress-theme-features/"
---

Lately I've found myself working with an ever increasing number of WordPress multisite installations, each built with a slightly different approach than the others. As a result, I've spent a lot of time thinking about how to architect these networks to maximize code clarity and maintainability.

Before going much further, I should point out that in my particular use cases, the individual sites on each of the networks generally share common designs, templates, general features, etc.

There are, however, minor customizations to each site - an additional widget here, additional templates there, and so on and so forth. If you've worked with WordPress in the past, you may be familiar with add_theme_support(); it's used to register support for things like post thumbnails, title tags, custom headers, etc.

You may not be familiar with `current_theme_supports()`, though. `current_theme_supports()`, in conjunction with `add_theme_support()` and `remove_theme_supports()`, make up the Theme Features API and provide developers with an excellent API that, in practice, allows us to bundle features in a modular way that can easily be enabled or disabled programmatically, on a site-by-site basis.

> **Theme Features** is a set of specific functionality that may be enabled by theme authors. Themes must register each individual Theme Feature that the author wishes to support.<cite>[WordPress Codex](https://codex.wordpress.org/Theme_Features)</cite>

The approach that I've come to favor uses the Theme Features API to break a codebase into three distinct pieces: a feature plugin, a theme, and child themes.

### The Plugin

The feature plugin should be enabled network-wide, whether as an `mu-plugin` or just enabled from the network panel in the WordPress admin. All primary pieces of functionality should be placed in the plugin. Let's say, for example, that we have a custom popular posts widget that we want to enable. In our feature plugin, we can write all our code in a file called `popular-posts`. Then conditionally load that file like so:

```php
if ( current_theme_supports( 'my-plugin', 'popular-posts' ) ) {
    require_once( esc_url( plugins_url( 'includes/modules/popular-posts/popular-posts.php', __FILE__ ) ) );
}
```

### The Parent Theme

In most of my own use cases, the sites on the network shared some sort of common design elements. In these cases, it made sense for us to have a parent theme that we could use as a starting point for each site, then extend and customize as needed.

If the sites on your multisite network do not have these commonalities, you can skip the parent theme. If the sites on your multisite network _do _share similarities, then leveraging a parent theme makes a lot of sense. Another great thing about leveraging a parent theme is that when you need to customize it for a particular site, you can write your own hooks with `apply_filters()` or `do_action()` and then extend those customizations in your child theme. That way each site on the network can display the same piece of functionality in many different ways.

Let's say, for example, that on **Site A** you label the popular posts feature "Popular Posts", but on **Site B** you label it "Most Popular". In places where you're outputting the title of your popular posts widget, you can use:

```php
echo apply_filters( 'popular_posts_title', esc_html__( 'Popular Posts', 'textdomain' ) );
```

With this architecture, I've also found it useful to leverage the WordPress Customizer for things like logos, color settings, etc. and providing default values for each setting. This makes it especially easy as a new developer on a project to spin up an environment without requiring an exact copy of the production database, as basic settings and features will be enabled and configured programmatically.

### The Child Themes

Finally, having an individual child theme for each site on the network provides you a place to put all of your site-level customizations. The primary function for us will be to enable selected features from our feature plugin. In our `functions.php` file, that would look something like:

```php
function theme_supports() {
    add_theme_support( 'my-plugin', array(
        'popular-posts',
         'my-other-feature'
     ) );
}
 add_action( 'after_setup_theme', 'theme_supports' );
```

### Final Thoughts

If you've ever ramped up on a new WordPress multisite project, you probably understand how difficult it can be to discern where all of the code you're working on is being used, particularly if features are being enabled as standalone plugins; so often test cases get missed and bugs get shipped.

By enabling and disabling features programmatically, we can more easily determine which sites on a network are utilizing a particular feature. I believe this architecture provides a clean code structure and clear separation of concerns, making future maintenance a much less daunting task.

Now, when needing to do maintenance on a feature in six months, it will be easy to discern which sites a particular feature is enabled on just by searching the project directory - as opposed having to hunt through each site to see if the feature plugin is enabled.