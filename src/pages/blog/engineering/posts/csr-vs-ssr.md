---
layout: "@/layouts/PostLayout.astro"
title: "Frontend Explorations: Client Side Rendering vs Server Side Rendering"
date: 2024-10-10T12:00:00Z
---

*Note: a lot of what is discussed here is from
[Josh Comeau's article](https://www.joshwcomeau.com/react/server-components),*
this is just my attempt at condensing the contents of that article.

*First Paint - Time taken for something to appear on the screen*  
*Page Interactive - Pretty self descriptive, React is downloaded and components
are hydrated*  
*Content Paint - Stuff is pulled from the database and rendered into the UI*
# What is Client-Side Rendering?

The default means by which React renders content on the page. The client
first receives an empty HTML skeleton and a bundle.js script which it
executes, populating the DOM with components. If there exists content
that is dependent on database queries an additional query is made, after
which content is successfully rendered.

The issue with this is that First Paint, the time before the user seems
something on the screen, is substantial because the user stares at a
blank screen while bundle.js is executing, especially if the React app
is large.

# What is Server-Side Rendering?

Server-Side Rendering I describe here refers to React's Server
Components and Next's default React components.

With Server-Side Rendering, the page shell is rendered first instead of
an empty HTML skeleton, giving us a slightly better First Paint. Because
this component is rendered on the server, we can run our database query
prior to this first request giving us a much improved Content Paint
result.

Bundle.js is then downloaded, hydrating the page components.