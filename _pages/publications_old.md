---
layout: page
title: publications (old backup)
permalink: /publications-old/
nav: false
published: false
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

<!-- {% include bib_search.liquid %} -->

<div style="margin-bottom: 20px; padding: 10px; border: 1px solid #eeeeee70; border-radius: 8px; background-color: #f9f9f93c;">
  <strong>Jump to: </strong>
  <a href="#peer-reviewed" class="anchor-link" style="margin-right: 15px;">📖 Peer-reviewed</a>
  <a href="#domestic" class="anchor-link" style="margin-right: 15px;">🎤 Domestic</a>
  <a href="#patents" class="anchor-link">🔖 Patents</a>
</div>

<!-- ## 📖 Peer-reviewed Journals & Top Conferences -->
<h2 id="peer-reviewed">📖 Peer-reviewed Journals & Top Conferences</h2>
<div class="publications">
{% bibliography --query @*[keywords=peer_reviewed]* %}
</div>

---

<!-- ## 🎤 Domestic Conferences & etc. (국내학술대회 및 기타) -->
<h2 id="domestic">🎤 Domestic Conferences & etc. (국내학술대회 및 기타)</h2>
<div class="publications">
{% bibliography --query @*[keywords=domestic]* %}

</div>

---

<!-- ## 🔖 Patents (특허) -->
<h2 id="patents">🔖 Patents (특허)</h2>
<div class="publications">
{% bibliography --query @*[keywords=patent]* %}
</div>
