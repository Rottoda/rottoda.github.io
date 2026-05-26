---
layout: page
permalink: /publications/
title: publications
description: publications by categories in reversed chronological order.
nav: true
nav_order: 4
---

<style>
  .pubs-page {
    max-width: 960px;
    margin: 0 auto;
  }

  /* ===== Filter tabs ===== */
  .pubs-page .pub-controls {
    background: var(--global-card-bg-color, #fff);
    padding: 1.25rem 1.5rem;
    border-radius: 18px;
    border: 1px solid var(--global-divider-color);
    box-shadow: 0 1px 2px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.04);
    margin-bottom: 2rem;
  }
  .pubs-page .filter-tabs {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  .pubs-page .tab-btn {
    appearance: none;
    border: 1px solid var(--global-divider-color);
    background: transparent;
    color: var(--global-text-color-light);
    padding: 0.55rem 1.1rem;
    border-radius: 999px;
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.18s ease;
    line-height: 1.2;
  }
  .pubs-page .tab-btn:hover {
    color: var(--global-theme-color);
    border-color: var(--global-theme-color);
  }
  .pubs-page .tab-btn.active {
    background: var(--global-theme-color);
    color: var(--global-hover-text-color, #fff);
    border-color: var(--global-theme-color);
    box-shadow: 0 4px 12px rgba(100, 31, 255, 0.18);
  }

  /* ===== Section headers ===== */
  .pubs-page .pub-section {
    margin-bottom: 2.5rem;
  }
  .pubs-page .pub-section > h2 {
    font-size: 1.35rem;
    font-weight: 700;
    color: var(--global-text-color);
    margin: 0 0 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid var(--global-theme-color);
    display: inline-block;
  }

  /* ===== Publication entry cards =====
     Override default jekyll-scholar styling inside .pubs-page only */
  .pubs-page .publications {
    margin-top: 0;
  }
  .pubs-page .publications ol.bibliography {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .pubs-page .publications ol.bibliography > li {
    background: var(--global-card-bg-color, #fff);
    border: 1px solid var(--global-divider-color);
    border-radius: 12px;
    padding: 1.25rem 0.7rem 1.25rem 1.25rem;
    margin-bottom: 0.85rem;
    box-shadow: 0 1px 2px rgba(0,0,0,0.02);
    transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
  }
  .pubs-page .publications ol.bibliography > li:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.06);
    border-color: rgba(100, 31, 255, 0.25);
  }
  html[data-theme="dark"] .pubs-page .publications ol.bibliography > li:hover {
    border-color: rgba(146, 97, 255, 0.4);
  }

  /* The bib.liquid uses a Bootstrap .row+.col layout that always renders
     an (often empty) abbr column. Convert to flex so the empty column
     collapses and the content fills the card width. */
  .pubs-page .publications ol.bibliography > li .row {
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-start;
    margin: 0;
    gap: 0;
  }
  .pubs-page .publications ol.bibliography > li .row > [class*="col-"] {
    padding-left: 0;
    padding-right: 0;
    max-width: none;
    flex: 1 1 auto;
    width: auto;
  }
  .pubs-page .publications ol.bibliography > li .row > .abbr {
    flex: 0 0 auto;
    max-width: 90px;
  }
  /* Collapse the abbr column when it has no actual children (jekyll-scholar
     still emits the wrapper even when there is no abbr/preview). */
  .pubs-page .publications ol.bibliography > li .row > .abbr:not(:has(> *)) {
    display: none;
  }
  /* Add a small gap only when an abbr is actually present. */
  .pubs-page .publications ol.bibliography > li .row > .abbr:has(> *) {
    margin-right: 0.9rem;
  }

  /* Title */
  .pubs-page .publications ol.bibliography > li .title {
    font-size: 1.05rem;
    font-weight: 700;
    color: var(--global-text-color);
    line-height: 1.45;
    margin-bottom: 0.4rem;
  }

  /* Authors */
  .pubs-page .publications ol.bibliography > li .author {
    font-size: 0.9rem;
    color: var(--global-text-color-light);
    margin-bottom: 0.3rem;
    line-height: 1.5;
  }
  .pubs-page .publications ol.bibliography > li .author > em {
    font-style: normal;
    font-weight: 600;
    color: var(--global-text-color);
    border-bottom: none;
  }

  /* Venue / journal / periodical */
  .pubs-page .publications ol.bibliography > li .periodical,
  .pubs-page .publications ol.bibliography > li .journal,
  .pubs-page .publications ol.bibliography > li .booktitle {
    font-style: italic;
    font-weight: 600;
    color: var(--global-theme-color);
    font-size: 0.9rem;
  }

  /* Abbr / venue badge */
  .pubs-page .publications ol.bibliography > li .abbr abbr {
    background-color: var(--global-theme-color) !important;
    color: #fff !important;
    border-radius: 6px;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    padding: 0.2rem 0.5rem;
  }

  /* Link buttons (PDF, code, etc.) */
  .pubs-page .publications ol.bibliography > li .links {
    margin-top: 0.6rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }
  .pubs-page .publications ol.bibliography > li .links a.btn {
    font-size: 0.78rem;
    font-weight: 600;
    padding: 0.3rem 0.8rem;
    border-radius: 8px;
    border: 1px solid var(--global-divider-color);
    color: var(--global-text-color);
    background: transparent;
    transition: all 0.18s ease;
  }
  .pubs-page .publications ol.bibliography > li .links a.btn:hover {
    background: var(--global-theme-color);
    color: #fff;
    border-color: var(--global-theme-color);
  }

  /* Abstract / bibtex expanded boxes */
  .pubs-page .publications ol.bibliography > li .abstract,
  .pubs-page .publications ol.bibliography > li .bibtex {
    margin-top: 0.8rem;
    font-size: 0.85rem;
    background: rgba(100, 31, 255, 0.04);
    border-radius: 8px;
    padding: 0.8rem 1rem;
  }
  html[data-theme="dark"] .pubs-page .publications ol.bibliography > li .abstract,
  html[data-theme="dark"] .pubs-page .publications ol.bibliography > li .bibtex {
    background: rgba(146, 97, 255, 0.08);
  }

  /* Empty state */
  .pubs-page .pub-empty {
    color: var(--global-text-color-light);
    font-style: italic;
    padding: 1rem 0;
  }

  @media (max-width: 640px) {
    .pubs-page .publications ol.bibliography > li { padding: 1rem 0.5rem 1rem 1rem; }
    .pubs-page .pub-section > h2 { font-size: 1.15rem; }
  }
</style>

<div class="pubs-page">

<div class="pub-controls">
  <div class="filter-tabs">
    <button type="button" class="tab-btn active" data-cat="all">All</button>
    <button type="button" class="tab-btn" data-cat="peer_reviewed">📖 Peer-reviewed</button>
    <button type="button" class="tab-btn" data-cat="domestic">🎤 Domestic</button>
    <button type="button" class="tab-btn" data-cat="patent">🔖 Patents</button>
  </div>
</div>

<div class="pub-section" data-cat="peer_reviewed">
  <h2 id="peer-reviewed">📖 Peer-reviewed Journals &amp; Top Conferences</h2>
  <div class="publications">
  {% bibliography --query @*[keywords=peer_reviewed]* %}
  </div>
</div>

<div class="pub-section" data-cat="domestic">
  <h2 id="domestic">🎤 Domestic Conferences &amp; etc. (국내학술대회 및 기타)</h2>
  <div class="publications">
  {% bibliography --query @*[keywords=domestic]* %}
  </div>
</div>

<div class="pub-section" data-cat="patent">
  <h2 id="patents">🔖 Patents (특허)</h2>
  <div class="publications">
  {% bibliography --query @*[keywords=patent]* %}
  </div>
</div>

</div>

<script>
  (function () {
    var buttons = document.querySelectorAll('.pubs-page .tab-btn');
    var sections = document.querySelectorAll('.pubs-page .pub-section');
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        buttons.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var cat = btn.dataset.cat;
        sections.forEach(function (sec) {
          sec.style.display = (cat === 'all' || sec.dataset.cat === cat) ? '' : 'none';
        });
      });
    });
  })();
</script>
