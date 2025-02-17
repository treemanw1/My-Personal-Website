---
layout: ../../../layouts/PostLayout.astro
title: "Learning workflows: Greatest evidence-based method for retaining information"
date: 2025-2-17T12:00:00Z
---

TLDR: It's spaced repetition.

[`mdfc`](https://github.com/bttger/markdown-flashcards) (markdown-flashcards) is
a wonderful command-line tool that simplifies making flashcards in simple
markdown. For example:

```
# Fruits

## What color is an apple?

Red

## What color is a pear?

Green

```


Which can be run simply with `mdfc fruits.md` in the terminal.

`mdfc` gives users four options: Not remembered, Hard, Okay, and Easy, which
upon selection calculates the next due date for the card by multiplying the
previous interval by the difficulty level.

These specific intervals can be configured in the `leitner.go` file.

Give it a shot!