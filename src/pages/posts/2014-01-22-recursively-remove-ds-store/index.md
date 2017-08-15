---
title: How to Recursively Remove .DS_Store
date: "2014-01-22T07:00:00.000Z"
path: "/articles/recursively-remove-ds-store/"
excerpt: "Lately, I've been doing a lot of theme development with plans to place themes on the WordPress.org repo, ThemeForest and other marketplaces. With that comes a lot of use of the Theme-Check plugin."
---

Lately, I've been doing a lot of theme development with plans to place themes on the WordPress.org repo, ThemeForest and other marketplaces. With that comes a lot of use of the Theme-Check plugin.

In order for your theme to pass the Theme-Check plugin review, you need to remove .DS_Store files from the theme folder. Doing that by hand is really boring, painful, and repetitive. Enter that awesome thing we call the command line.


### Recursively Remove .DS_Store

*   Open up Terminal
*   In the command line, `cd to/your/directory`
*   Finally, in the command line, type: `find . -name '.DS_Store' -type f -delete`. Press enter.

**Warning: Never use a wildcard (*) with this command, unless you know what you're doing. Bad things can happen if you don't.**

This snippet will remove .DS_Store files from the selected folder, as well as all of the folders that it contains. All of them. At once.

This command can be used for other types of files, as well. Just replace `'.DS_Store'` with whatever file name, or type, that you want to delete.

### Other uses

You can do this for other file types, as well. For example, you could use `find . -name '*.js' -type f -delete` to delete all JavaScript files within a containing folder. Note that the asterisk is a wildcard, meaning the Terminal is looking for _any_ file with an extension of .js... it can be dangerous to use wildcards... be careful.