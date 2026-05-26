---
layout: page
permalink: /news/
title: news
description: Recent activities and updates from the Rottoda lab
nav: true
nav_order: 5
---

<style>
  .news-timeline-page {
    max-width: 880px;
    margin: 0 auto;
  }

  .news-year-divider {
    font-size: 2rem;
    font-weight: 800;
    color: var(--global-theme-color);
    padding: 2rem 0 0.75rem;
    border-bottom: 2px solid var(--global-theme-color);
    margin-bottom: 0.25rem;
    letter-spacing: -0.5px;
  }
  .news-year-divider:first-of-type {
    padding-top: 0.5rem;
  }

  .news-tl-item {
    display: flex;
    align-items: flex-start;
    gap: 1.5rem;
    padding: 1.5rem 1rem;
    border-bottom: 1px solid var(--global-divider-color);
    border-radius: 10px;
    transition: background 0.18s ease;
    text-decoration: none;
    color: inherit;
  }
  .news-tl-item.linkable {
    cursor: pointer;
  }
  .news-tl-item:hover {
    background: rgba(100, 31, 255, 0.06);
  }
  html[data-theme="dark"] .news-tl-item:hover {
    background: rgba(146, 97, 255, 0.10);
  }
  .news-tl-item:hover .news-tl-body h3 {
    color: var(--global-theme-color);
  }

  .news-tl-left {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.375rem;
    min-width: 56px;
    padding-top: 0.3rem;
    flex-shrink: 0;
  }
  .news-tl-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--global-theme-color);
  }
  .news-tl-date {
    font-size: 0.78rem;
    font-weight: 700;
    color: var(--global-text-color-light);
    text-align: center;
    line-height: 1.3;
    white-space: nowrap;
  }

  .news-tl-body {
    flex: 1;
    min-width: 0;
  }
  .news-tl-body h3 {
    font-size: 1.05rem;
    font-weight: 700;
    color: var(--global-text-color);
    margin: 0 0 0.4rem;
    line-height: 1.45;
    transition: color 0.18s;
  }
  .news-tl-body p {
    font-size: 0.9rem;
    color: var(--global-text-color-light);
    margin: 0;
    line-height: 1.6;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .news-tl-img {
    width: 110px;
    height: 78px;
    object-fit: cover;
    border-radius: 8px;
    flex-shrink: 0;
  }

  .old-news-toggle {
    display: block;
    margin: 2.5rem auto 0;
    padding: 0.6rem 1.4rem;
    background: transparent;
    border: 1px solid var(--global-divider-color);
    border-radius: 999px;
    color: var(--global-text-color);
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.18s ease;
  }
  .old-news-toggle:hover {
    background: var(--global-theme-color);
    color: var(--global-hover-text-color);
    border-color: var(--global-theme-color);
  }
  .old-news-toggle .chevron {
    display: inline-block;
    margin-left: 0.4rem;
    transition: transform 0.2s ease;
  }
  .old-news-toggle.open .chevron {
    transform: rotate(180deg);
  }

  @media (max-width: 640px) {
    .news-tl-item { gap: 1rem; padding: 1.1rem 0.5rem; }
    .news-tl-left { min-width: 44px; }
    .news-tl-img { width: 80px; height: 58px; }
    .news-year-divider { font-size: 1.5rem; }
  }
</style>

<div class="news-timeline-page">

{% assign news_sorted = site.news | sort: 'date' | reverse %}
{% assign last_year = '' %}
{% assign old_started = false %}

{% for item in news_sorted %}
  {% assign cur_year_str = item.date | date: '%Y' %}
  {% assign cur_year = cur_year_str | plus: 0 %}

  {% if cur_year < 2025 and old_started == false %}
    <button type="button" class="old-news-toggle" data-target="old-news-section">
      Show old news (2024 &amp; earlier)<span class="chevron">▾</span>
    </button>
    <div id="old-news-section" class="old-news" hidden>
    {% assign old_started = true %}
  {% endif %}

  {% if cur_year_str != last_year %}
    <div class="news-year-divider">{{ cur_year_str }}</div>
    {% assign last_year = cur_year_str %}
  {% endif %}

  {% comment %} Extract first image from content {% endcomment %}
  {% assign img_url = '' %}
  {% assign img_split = item.content | split: '<img' %}
  {% if img_split.size > 1 %}
    {% assign src_split = img_split[1] | split: 'src="' %}
    {% if src_split.size > 1 %}
      {% assign img_url = src_split[1] | split: '"' | first %}
      {% assign img_url = img_url | replace: '../../', '/' %}
    {% endif %}
  {% endif %}

  {% comment %} Build a short preview from content {% endcomment %}
  {% assign preview = item.content | strip_html | strip_newlines | truncate: 140 %}

  {% if item.inline %}
    <div class="news-tl-item">
  {% else %}
    <a class="news-tl-item linkable" href="{{ item.url | relative_url }}">
  {% endif %}
    <div class="news-tl-left">
      <div class="news-tl-dot"></div>
      <div class="news-tl-date">{{ item.date | date: '%b %d' }}</div>
    </div>
    <div class="news-tl-body">
      <h3>{{ item.title }}</h3>
      <p>{{ preview }}</p>
    </div>
    {% if img_url != '' %}
      <img class="news-tl-img" src="{{ img_url | relative_url }}" alt="" onerror="this.style.display='none'">
    {% endif %}
  {% if item.inline %}
    </div>
  {% else %}
    </a>
  {% endif %}
{% endfor %}

{% if old_started %}
</div>
{% endif %}

</div>

<script>
  (function () {
    var btn = document.querySelector('.old-news-toggle');
    var target = document.getElementById('old-news-section');
    if (!btn || !target) return;
    btn.addEventListener('click', function () {
      var isHidden = target.hasAttribute('hidden');
      if (isHidden) {
        target.removeAttribute('hidden');
        btn.classList.add('open');
        btn.firstChild.textContent = 'Hide old news ';
      } else {
        target.setAttribute('hidden', '');
        btn.classList.remove('open');
        btn.firstChild.textContent = 'Show old news (2024 & earlier)';
      }
    });
  })();
</script>
