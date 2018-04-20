---
title: Debugging Issues with HTML Download Attribute
date: "2018-04-19T12:31:08.212Z"
path: "/articles/download-attribute/"
excerpt: "Earlier today I spent the better part of a couple of hours scratching my head over a seemingly simple issue, so I thought I’d share the problem I encountered and the resolution I finally found."
---

Earlier today I spent the better part of a couple of hours scratching my head over a seemingly simple issue, so I thought I’d share the problem I encountered and the resolution I finally found.

When linking to a file using the `<a download>` attribute, I was having trouble getting the actual file to download. The app that I was working on has been using the `download` attribute for a few years and never had any issues with.

Recently, though, when users click on the link to download the asset, the file is opened in a new tab rather than being downloaded.

After several dead-ends, I finally found [the culprit](https://www.chromestatus.com/feature/4969697975992320).

A couple of months ago, several browser vendors shipped an important security update to the `<a download>` attribute, effectively ignoring the flag when the file source is cross-origin.

Fear not… There’s hope, after all!

Setting the [Content-Disposition](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition) header to `attachment` signals the client to download the file.

In my case, the files that users download live on S3. Fortunately, AWS allows you to bulk update the the headers for all files in a given bucket or folder within a bucket. Just right click the file or folder and select `Change Metadata`.

