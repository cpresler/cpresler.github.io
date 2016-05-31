---
layout: page
title: Thoughts
permalink: /thoughts/
weight: 5
---

This is the beginning of my blog posts page. This will need its own template? Or perhaps use the default. I'll have to think about that.

Attempting to loop through posts:

<ul class="post-list">
{% for post in site.posts %}
  <li>
    <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>

    <h2>
      <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
    </h2>
  </li>
{% endfor %}
</ul>