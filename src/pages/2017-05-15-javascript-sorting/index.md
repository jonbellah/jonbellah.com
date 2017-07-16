---
title: JavaScript Sorting Algorithms
date: "2017-05-15T09:42:00.000Z"
path: "/articles/sorting-algorithms/"
---

I had the privilege of attending [jsDay](https://2017.jsday.it/) last week in Verona, Italy. One of my favorite talks during the two-day event was titled "CS101 Intro to Computational Complexity: The Sorting Problem" by [Claudia Hernández](https://twitter.com/koste4).

When calling `Array.prototype.sort()`, I (as I suspect many of you) had no idea exactly what the magicians under-the-hood were doing with my array. All I knew was that if I didn't pass proper instructions to the method, I didn't always get back the results I was expecting.

The crux of the talk revolved around the various different sorting algorithms that each of the major browser vendors use (MergeSort, QuickSort, and InsertionSort) for the native `.sort()` method and how each of those algorithms perform under various different conditions (sorting an array of 10 items, 100 items, etc. up to 10 million items).

I highly recommend taking a look through [the slides](https://speakerdeck.com/claudiahdz/cs101-intro-to-computational-complexity-the-sorting-problem). I'll be sure to update this post if/when a video of the talk becomes available.