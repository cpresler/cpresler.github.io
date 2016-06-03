---
layout: page
title: Thoughts
permalink: /thoughts/
weight: 5
---

Lets loop through some posts:

<ul class="post-list">
{% for post in site.posts %}
  <li>
    <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
    {% if post.image %}
        <a class="post-link" href="{{ post.url | prepend: site.url }}"><img src="{{ site.url }}{{ post.image | prepend: 
    site.blog_img_url }}" /></a>
    {% endif %}

    <h2>
      <a class="post-link" href="{{ post.url | prepend: site.url }}">{{ post.title }}</a>
    </h2>
  </li>
{% endfor %}
</ul>