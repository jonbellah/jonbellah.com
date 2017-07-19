---
title: Introducing a Fresh New Look
date: "2017-07-18T07:00:00.000Z"
path: "/articles/redesign-2017/"
---

Welcome to the new digs!

This past weekend, I finally decided it was time to refresh things around here. Despite the fact that I still felt the old design *looked* pretty good, I didn't feel that the underlying technology and overall feel were particularly reflective of how I (or, increasingly, anyone) build sites these days.

I figured I would take an opportunity to walk you through the various updates and decisions that were made during the process.

### The Platform

On the old site, I was using a pretty basic WordPress theme that I'd built from scratch. I took a good bit of care to ensure it was lightweight and performant, achieving sub-500ms render times over a cable connection, but that was really the only remarkable thing about it.

Over the past year or so, I've spent a significant amount of time working with React and have really come to love the experience of building sites with it. So, when it came time for this redesign, I knew where I wanted to start.

I thought briefly about building a WordPress theme that was powered by React and the WP REST API, but decided that I would rather manage a blog about code like I would manage any other code.

After a bit of research, I came across [GatsbyJS](https://www.gatsbyjs.org/), a static site generator for React.

Spoiler alert: It's awesome.

For the last few days, I've been tinkering and building out this site, while learning more and more about Gatsby. I have been really impressed by so many of the features: it has a simple plugin to generate an RSS feed, it handles server rendering out-of-the-box, routing is an absolute breeze, etc.

The thing that probably impressed me the most, though, was the fact that the only thing I needed to do to make the site fully compatible with Google's [Progressive Web App Checklist](https://developers.google.com/web/progressive-web-apps/checklist) was add a `manifest.json` file.

### The Migration

Gatsby actually provides a [plugin](https://www.gatsbyjs.org/packages/gatsby-source-wordpress/) that enables basic support for using WordPress as a data source. Ultimately, though, I decided that I would rather start writing posts in markdown and storing them in my repo, making it easier to track changes and to allow others to collaborate and comment on the things that I write.

Fortunately, my history of infrequent writing paid off for once. I used this [HTML to Markdown](https://domchristie.github.io/to-markdown/) converter to take old posts, convert them to markdown, and do a bit of cleanup. It was a super manual process (and totally not scalable), but I didn't have that many posts to bring over. 

I did make a bit of a controversial decision during this process and only brought over a relatively small subsection of posts. There were a number of posts that I felt were either outdated, irrelevant, or no longer reflected my opinions about code. I'll be working to update many of the posts that I did bring over to be more complete and correct inaccuracies. 

### The Hosting

Based on recommendations found in various places during my time researching Gatsby, I decided to take a look at [Netlify](https://netlify.com). 

I went back and forth between `gh-pages` and Netlify, but decided to go with Netlify primarily due to the fact that I needed to handle redirects for the aforementioned retired posts and didn't want to manage that with React routing. 

Thus far, I've been rather pleased and impressed with the service. Setting up the new site was super easy (authenticate the GitHub repo and go). Netlify handles pretty much all of the deployment configuration for you and uses git hooks to detect updates on your chosen branch.

On the free tier, I'm still provided SSL (by way of Let's Encrypt), a CDN, automated deploys, and a few other handy features.

### The Code

As a final note, I have decided to open source the code that powers [this site](https://github.com/jonbellah/jonbellah.com). Please feel free to poke around the codebase or fork it for your own use.

If you have any questions, comments, or want to share what you've done with your fork, I'd love to hear from you in the Issues section on GitHub!