---
layout: about
title: Rottoda
permalink: /
subtitle: Robot Touch Data Lab · Graduate School of Data Science, Kyungpook National University

selected_papers: true
social: true

announcements:
  enabled: true
  scrollable: false
  limit: 5

latest_posts:
  enabled: false
  scrollable: true
  limit: 3
---

<style>
  .home-page {
    --section-gap: 2.5rem;
  }

  /* Hide the layout's default subtitle since we render a bilingual one ourselves */
  .home-page-overrides .post-header .desc { display: none; }

  /* Bilingual subtitle replacement */
  .home-page .home-subtitle {
    font-size: 1.05rem;
    color: var(--global-text-color-light);
    margin: -0.5rem 0 1.5rem;
    line-height: 1.5;
  }

  /* Language toggle */
  .home-page .lang-toggle {
    display: inline-flex;
    background: var(--global-card-bg-color);
    border: 1px solid var(--global-divider-color);
    border-radius: 999px;
    padding: 3px;
    margin: 0 0 2rem;
  }
  .home-page .lang-toggle button {
    appearance: none;
    background: transparent;
    border: 0;
    padding: 0.4rem 1rem;
    border-radius: 999px;
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--global-text-color-light);
    cursor: pointer;
    transition: all 0.18s ease;
  }
  .home-page .lang-toggle button.active {
    background: var(--global-theme-color);
    color: #fff;
  }
  .home-page .lang-toggle button:not(.active):hover {
    color: var(--global-text-color);
  }

  /* Section blocks */
  .home-page .home-section {
    margin-bottom: var(--section-gap);
  }
  .home-page .home-section h2 {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--global-text-color);
    margin: 0 0 0.4rem;
  }
  .home-page .home-section .accent-line {
    height: 2px;
    width: 40px;
    background: var(--global-theme-color);
    border-radius: 2px;
    margin: 0 0 1rem;
  }
  .home-page .home-section .lead {
    color: var(--global-text-color-light);
    margin: 0 0 1rem;
    line-height: 1.6;
  }

  /* Research theme grid */
  .home-page .theme-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 0.85rem;
  }
  .home-page .theme-card {
    background: var(--global-card-bg-color);
    border: 1px solid var(--global-divider-color);
    border-radius: 12px;
    padding: 1rem 1.1rem;
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
  }
  .home-page .theme-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0,0,0,0.05);
    border-color: rgba(100, 31, 255, 0.25);
  }
  html[data-theme="dark"] .home-page .theme-card:hover {
    border-color: rgba(146, 97, 255, 0.4);
  }
  .home-page .theme-num {
    flex: 0 0 auto;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: rgba(100, 31, 255, 0.12);
    color: var(--global-theme-color);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 0.9rem;
  }
  html[data-theme="dark"] .home-page .theme-num {
    background: rgba(146, 97, 255, 0.18);
  }
  .home-page .theme-text {
    font-size: 0.92rem;
    line-height: 1.5;
    color: var(--global-text-color);
    padding-top: 0.2rem;
  }

  /* Recruiting list */
  .home-page .recruit-list {
    margin: 0 0 1rem;
    padding: 0;
    list-style: none;
  }
  .home-page .recruit-list li {
    position: relative;
    padding-left: 1.4rem;
    margin-bottom: 0.5rem;
    line-height: 1.55;
    color: var(--global-text-color);
  }
  .home-page .recruit-list li::before {
    content: "→";
    position: absolute;
    left: 0;
    color: var(--global-theme-color);
    font-weight: 700;
  }
  .home-page .recruit-cta {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    margin-top: 0.5rem;
    padding: 0.55rem 1.1rem;
    background: var(--global-theme-color);
    color: #fff;
    border-radius: 999px;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9rem;
    transition: transform 0.18s ease, box-shadow 0.18s ease;
  }
  .home-page .recruit-cta:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 14px rgba(100, 31, 255, 0.25);
    color: #fff;
    text-decoration: none;
  }

  /* Hero image */
  .home-page .hero-img-wrap {
    margin: 0 0 var(--section-gap);
    text-align: center;
  }
  .home-page .hero-img-wrap img {
    max-width: 100%;
    width: 416px;
    height: auto;
    border-radius: 14px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.06);
  }

  /* Language panels */
  .home-page .lang-panel { display: none; }
  .home-page .lang-panel.active { display: block; }
</style>

<div class="home-page home-page-overrides">

<p class="home-subtitle lang-panel lang-en active">
  We study tactile data for robots and humans — building advanced fingertip sensors, learning multimodal representations from touch, and exploring the haptic world through big data.
</p>
<p class="home-subtitle lang-panel lang-ko">
  로봇과 사람을 위한 촉각 데이터를 연구합니다 — 고도화된 핑거팁 센서를 만들고, 멀티모달 촉각 표현을 학습하며, 빅데이터 기반으로 햅틱스의 세계를 탐구합니다.
</p>

<div class="lang-toggle" role="tablist" aria-label="Language">
  <button type="button" class="lang-btn active" data-lang="en">English</button>
  <button type="button" class="lang-btn" data-lang="ko">한국어 (Korean)</button>
</div>

<!-- =================== English content =================== -->
<div class="lang-panel lang-en active">

<div class="home-section">
  <h2>Research Focus</h2>
  <div class="accent-line"></div>
  <p class="lead">Our lab works on four main themes:</p>
  <div class="theme-grid">
    <div class="theme-card"><div class="theme-num">1</div><div class="theme-text">Advanced robotic fingertip sensors</div></div>
    <div class="theme-card"><div class="theme-num">2</div><div class="theme-text">Data-driven multimodal sensing</div></div>
    <div class="theme-card"><div class="theme-num">3</div><div class="theme-text">Object manipulation using robotic fingertip sensors</div></div>
    <div class="theme-card"><div class="theme-num">4</div><div class="theme-text">Haptics research grounded in touch big data</div></div>
  </div>
</div>

<div class="hero-img-wrap">
  <img src="{{ '/assets/img/major_figs/web_main_pic.png' | relative_url }}" alt="Main research overview">
</div>

<div class="home-section">
  <h2>Who We're Looking For</h2>
  <div class="accent-line"></div>
  <ul class="recruit-list">
    <li>Students who are interested in robotics and AI but aren't sure where to start.</li>
    <li>Students who want to build rigorous, data-driven mathematical models.</li>
    <li>Students who want to grow soft skills such as academic English and paper writing.</li>
  </ul>
  <p class="lead">For open positions, please see our <a href="{{ '/recruitment/' | relative_url }}">recruitment page</a>.</p>
  <a class="recruit-cta" href="{{ '/recruitment/' | relative_url }}">
    Open positions →
  </a>
</div>

</div>

<!-- =================== Korean content =================== -->
<div class="lang-panel lang-ko">

<div class="home-section">
  <h2>연구 주제</h2>
  <div class="accent-line"></div>
  <p class="lead">우리 연구실은 다음 네 가지 주제를 메인으로 다룹니다.</p>
  <div class="theme-grid">
    <div class="theme-card"><div class="theme-num">1</div><div class="theme-text">로봇 핑거팁 센서의 고도화</div></div>
    <div class="theme-card"><div class="theme-num">2</div><div class="theme-text">데이터드리븐 멀티모달 센싱 기술 고도화</div></div>
    <div class="theme-card"><div class="theme-num">3</div><div class="theme-text">로봇 핑거팁 센서를 활용한 물체조작 기술 연구</div></div>
    <div class="theme-card"><div class="theme-num">4</div><div class="theme-text">터치 빅데이터 기반 햅틱스 연구</div></div>
  </div>
</div>

<div class="hero-img-wrap">
  <img src="{{ '/assets/img/major_figs/web_main_pic.png' | relative_url }}" alt="주요 연구 개요">
</div>

<div class="home-section">
  <h2>이런 학생을 찾습니다</h2>
  <div class="accent-line"></div>
  <ul class="recruit-list">
    <li>로봇, AI에 관심이 많은데 어떻게 시작해야 할 지 모르는 학생</li>
    <li>빅데이터 기반의 수학적이고 객관적인 모델을 만들고 싶은 학생</li>
    <li>영어 또는 논문 작성법 등의 soft skill을 높이고 싶은 학생</li>
  </ul>
  <p class="lead">연구실 Open position에 관해서는 <a href="{{ '/recruitment/' | relative_url }}">모집 안내 페이지</a>를 참고해 주세요.</p>
  <a class="recruit-cta" href="{{ '/recruitment/' | relative_url }}">
    모집 안내 →
  </a>
</div>

</div>

</div>

<script>
  (function () {
    var page = document.querySelector('.home-page');
    if (!page) return;
    var buttons = page.querySelectorAll('.lang-btn');
    function setLang(lang) {
      buttons.forEach(function (b) {
        b.classList.toggle('active', b.dataset.lang === lang);
      });
      page.querySelectorAll('.lang-panel').forEach(function (panel) {
        panel.classList.toggle('active', panel.classList.contains('lang-' + lang));
      });
    }
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () { setLang(btn.dataset.lang); });
    });
  })();
</script>
