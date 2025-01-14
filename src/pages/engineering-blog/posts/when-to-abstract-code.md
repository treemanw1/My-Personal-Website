---
layout: ../../../layouts/PostLayout.astro
title: "When Should You Abstract Code?"
date: 2024-10-19T12:00:00Z
---

# Premature Abstraction: Rule Of Three

_Abstraction_: Moving repeated code into a function, method, or class that can be reused across a codebase.

As a newbie writing software (often from scratch), I often find myself drawn toward abstracting code the moment the opportunity presents itself. However, I realize that the costs of premature abstraction (extra overhead following code trails into a new function) outweigh the little benefit (lesser lines of code).

I've found that a helpful general heuristic to avoid this problem is the rule of three:

_If a piece of code is copied more than twice, it needs to be abstracted out._

## When To Abstract: A Deeper Dive

_Distilled insights gathered from ["Write code that is easy to delete, not easy to extend"](https://programmingisterrible.com/post/139222674273/write-code-that-is-easy-to-delete-not-easy-to?source=post_page-----56b0d9de2c43--------------------------------)._

1. The price of abstraction is flexibility. Thus it follows that you should only abstract under some assumption of stability, i.e., if the code is unlikely to change.

    If it's not obvious why abstractions are difficult to delete (it wasn't to me), the reason is because abstractions introduce dependencies. The ramifications of deleting boilerplate or copy-pasted code are self-contained. The effects of deleting abstractions are contrastingly less visible and can lead to unintended consequences.

2. The corollary of point 1 is that we should refrain from abstracting code that is likely to change.

3. In abstractions, extensibility and ease-of-use are at odds with each other.
