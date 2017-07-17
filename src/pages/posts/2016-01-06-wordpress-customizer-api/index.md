---
title: Building Better WordPress Themes with the Customizer API
date: "2016-01-06T07:00:00.000Z"
path: "/articles/wordpress-customizer-api/"
---

There have been a ton of great features added to WordPress over the last few years, but undoubtedly my favorite is the Customizer API. Leveraging the Customizer is my go-to for any settings that a client may need to change or update.

For example, on a recent project, before the project kicked off, we discussed A/B testing all the calls-to-action on the site. Rather than forcing the client to rely on our engineering team to make text changes (which would ultimately slow their progress and cost them more money), we leveraged the Customizer to empower the client with the ability to make the changes on their own.

There are a ton of other scenarios where the Customizer can really come in handy.

### What is the Customizer API?

The Customizer API, previously known as the Theme Customization API, is a framework for live previewing changes within WordPress. It can be accessed in the WordPress admin via _Appearance > Customize._

The Customizer helps bring consistency to settings and options within WordPress. With the Customizer, users can customize everything from widgets, colors, layouts, menus, and much more. Soon, as the Customizer gains wider adoption, the days of custom settings pages will be gone (hopefully).

### Customizer Objects

There are four primary types of objects within the Customizer API: Panels, Sections, Settings, and Controls. I'm borrowing an image from the [WordPress Theme Handbook](https://developer.wordpress.org/themes/advanced-topics/customizer-api/), because it does a great job of visualizing exactly what each of these objects are and what they do.

![Image courtesy the WordPress Theme Handbook](https://jonbellah.com/wp-content/uploads/2016/01/customizer-object-types.png)<span class="caption">Image courtesy of the WordPress Theme Handbook</span>

I won't go into too much detail about the specifics of each type of object, as I feel that the Theme Handbook article does an excellent job of explaining them... what I want to focus more on real world use cases and how to build some of those specific settings and controls.

### Settings: Options vs. Theme Mods
The Customizer API, much like other WordPress API's, leverages the `wp_options` table to store its settings values. There are two types of settings: options and theme modifications. The distinction between the two is an important one to make.

Options are stored directly in the database as their own individual rows and always apply to the site, regardless of which theme is currently active.

Theme modifications, on the other hand, are actually stored together in a single row within the database and apply only to the theme that they modify. If you look in the database, you'll see that all theme mod values are stored with the key `theme_mods_{theme-dir-name}`.

In general, you should err on the side of using theme mods, not options.

### Getting Started

Let's start with a simple, text input example... let's use our example from earlier. We have a theme we're building for a client, they want to be able to quickly and easily A/B test their calls-to-actions and act on those test results.

First, let's create a new file, call it `customizer.php` and place it in our themes `includes` folder (if your theme doesn't have this folder, create it). Start by creating a new `class` and a `register_settings()` function within it. We also want to hook our new settings into the Customizer, which we can do by using the `customize_register` action.

So far, your `customizer.php` file should look like:

```php
class JonBellah_Customize {
    /**
     * This hooks into 'customize_register' (available as of WP 3.4) and allows
     * you to add new sections and controls to the Theme Customize screen.
     *
     * @see add_action( 'customize_register', $func )
     * @param WP_Customize_Manager $wp_customize
     */
    public static function register_settings( $wp_customize ) {
        // code goes here
    }
}
add_action( 'customize_register' , array( 'JonBellah_Customize' , 'register_settings' ) );
```

Next, let's create a new section that we can place all our calls-to-action in. This will help keep our Customizer options neatly organized. Inside the `register_settings()` function, add:

```php
// Calls-to-action Section
$wp_customize->add_section( 'cta' , array(
    'title'    => esc_html__( 'Calls-to-Action', 'jonbellah' ),
    'priority' => 70,
) );
```
Now, below your section code (and still inside the `register_settings()` function) let's create our setting and it's corresponding control.

```php
// Call to action text
$wp_customize->add_setting( 'cta_primary', array(
    'transport'         =>  'refresh',
    'default'           => __( 'This is my call-to-action.', 'jonbellah' ),
    'sanitize_callback' => 'esc_textarea'
) );

$wp_customize->add_control( 'cta_primary', array(
    'label'       => esc_html__( 'Primary Call-to-Action', 'jonbellah' ),
    'section'     => 'cta',
    'type'        => 'input',
    'description' => __( 'Default: This is my call-to-action.', 'jonbellah' )
) );
```

And voila! You've got a new Customizer setting that will allow you or your clients to quickly and easily change calls-to-action... but wait... how do we pull this in on the front-end?

In your theme, anywhere that you want to display your call-to-action, use the `get_theme_mod()` function like so:

```php
<?php esc_html_e( get_theme_mod( 'cta_primary' ) ); ?>
```

(_Note_: if you decide to use the option type, rather than theme mod, you'll grab your setting on the front-end with the `get_option()` function instead).

That's all there is to it for a simple text input setting.

### Getting More Complex

There is tons of flexibility to the Customizer. For example, you can also allow users to upload images for use in various places on the front-end of the site. So, for example, you want them to be able to replace the site logo on a page. That would look like:

```php
// Logo Setting
$wp_customize->add_setting( 'jonbellah_logo', array(
    'default'    => '',
    'capability' => 'edit_theme_options',
) );

$wp_customize->add_control(
    new WP_Customize_Image_Control( $wp_customize, 'jonbellah_logo_control', array(
        'label'    => __( 'Logo', 'jonbellah' ),
        'section'  => 'jonbellah_logo_section',
        'settings' => 'jonbellah_logo',
    )
) );
```

Or if you want to allow the user to change the color of the links on their site, with the help of a nice color wheel, you can use:

```php
// Link Colors
$wp_customize->add_setting( 'jonbellah_link_color', array(
    'default'    => '',
    'capability' => 'edit_theme_options',
) );

$wp_customize->add_control(
    new WP_Customize_Color_Control(	$wp_customize, 'jonbellah_link_color', array(
        'label'      => __( 'Link Color', 'jonbellah' ),
        'section'    => 'jonbellah_links',
        'settings'   => 'jonbellah_link_color',
    )
) );
```

This really only scratches the surface of what you can do with the Customizer API. We haven't even touched on the ability to do [real-time live previews](https://codex.wordpress.org/Theme_Customization_API#Part_3:_Configure_Live_Preview_.28Optional.29) using JavaScript.

I hope you've found this useful and will start leveraging the Customizer in your own themes!