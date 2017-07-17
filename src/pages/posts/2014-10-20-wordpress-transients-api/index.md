---
title: Building Faster, More Scalable WordPress Sites Using the Transients API
date: "2014-10-20T07:00:00.000Z"
path: "/articles/wordpress-transients-api/"
---

The WordPress Transients API is a super useful way to temporarily store cached data. It was introduced in WordPress 2.8 (all the way back in 2009, so it's pretty much an antique or something now), but I've only recently become more aware of it and started using it heavily in production... as always, I find myself late to the party.

The Transients API is virtually identical to the [Options API](http://codex.wordpress.org/Option_Reference), except for the added ability to set an expiration on whatever data that you're storing... it even uses the `wp_options` table to store data.

Unfortunately, the Transients API seems to be relatively misunderstood by a lot of developers. With this post, I'm hoping to help sort out at least a little bit of that confusion.

### When should I use transients?

As a general rule of thumb, you should use transients to cache:

*   External requests (Twitter API, RSS feeds, etc)
*   Complex, slow database queries
*   Queries with results that rarely change

Say, for example, that you've coded up a Twitter widget to put on your site. Twitter would probably not be very happy if you're making requests to their API every single time a visitor on your site loads a page.

By using the WordPress Transients API, you can keep a cached version of Twitter's response on your server; meaning you only need to make requests to their API once every 10 minutes, for example, fetching updated data only when the transient expires.

Providing these static, cached copies of expensive queries and external requests translates into a much more performant website and much lower overhead on your servers; allowing your site to scale more quickly and efficiently.

### How do I use the WordPress Transients API?

If, for example, you wanted to store your `WP_Query` results in a transient... this is how that would look:

```php
// Check if the transient exists
$portfolio_query = get_transient( 'myblog_portfolio_query' );

// If the transient does not exist, run our portfolio query
if ( false === $portfolio_query ) {
    // Query args
    $portfolio_args = array(
        'post_status' => 'publish',
        'post_type'   => 'portfolio',
    );

    // The query
    $portfolio_query = new WP_Query( $portfolio_args );

    // Set a new transient only if there are no errors and we have data to store
    if ( ! is_wp_error( $portfolio_query ) && ! empty( $portfolio_query ) ) {
        set_transient( 'myblog_portfolio_query', $portfolio_query, 2 * HOUR_IN_SECONDS );
    }
}
```

Transients use key-value pairs to store your data, meaning you can store your data in a key that makes sense to you, your theme, or your plugin (in this case, `myblog_portfolio_query`) and can use that key to retrieve the value stored within it.

So in the sample above, `myblog_portfolio_query` is our transient name (key), `$portfolio_query` is the object or value that we're storing in that key and `2 * HOUR_IN_SECONDS` is the length of time that we want to store that data.

One of the things that makes dealing with transients interesting is that you can never assume that your data will be there. By their very nature, transients expire and disappear. So as a developer, you have to account for a range of possibilities.

If the transient doesn't exist, it will return `false`. That's the reason that, in the sample above, that we check `if ( false === $portfolio_query )`. We only want to execute our query if the transient **does not** exist.

### Implementation is Everything

Remember... **transients are temporary**. Do not rely on them being there.

Another curveball comes in the form of **Memcache**, a caching system that stores data in memory, rather than in a database. Memcache uses an allotted amount of memory to store data and begins dropping off the least active data as it needs more space. This means that even if you've set a transient to expire in three hours, it may only exist for one or two hours.

So, I'll say it once more. Do not rely on them being there.

That said, transients can be a very powerful way to store cached data that needs to expire. If you're interested in reading more about the WordPress Transients API, I recommend checking out the [Codex page](http://codex.wordpress.org/Transients_API).

One final note - make sure you keep the character length of your transient names [under 45 characters](https://core.trac.wordpress.org/ticket/15058)... otherwise, your mileage may vary.

I've only scratched the surface of how transients work and how to use them. Though transients may seem a bit intimidating at first, I highly encourage you to take the time to tinker with them and see how they affect the performance of your site.