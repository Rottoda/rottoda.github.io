---
layout: page
title: projects
permalink: /projects/
description: Rottoda는 양질의 과제비 확보를 통해, 여러분들의 안정적인 연구수행 환경을 제공합니다.
nav: true
nav_order: 1
display_categories: [Rottoda, GSDS]
horizontal: false
---

## 수행중인 연구과제 리스트
1. 멀티모달 비전기반 촉각센싱에 의한 로봇의 물체 조작 기술 향상 (**연구책임**; 한국연구재단-개인기초연구) [[상세](./korea-uk/)]
2. 차세대 다중감각 통합 소셜 로봇 제어를 위한 범용 인공지능 플랫폼 개발 (**세부과제책임**; 정보통신기획평가원-인간지향적차세대도전형AI기술개발) [[상세](./agi/)]
3. 데이터 기반 지능형 모빌리티 연구센터 (정보통신기획평가원-정보통신방속혁신인재양성) [[상세](./itrc/)]
4. GLOW-AI 혁신인재양성 교육연구단 (한국연구재단-4단계BK21사업) [[상세](./bk21/)]
5. 지역산업 혁신을 위한 지역 수요 중심 데이터사이언스 융합인재 양성사업 (한국연구재단-과학기술혁신인재양성) [[상세](./kds/)]

구체적인 연구 내용은 아래 포스팅에서 확인 가능합니다.

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
