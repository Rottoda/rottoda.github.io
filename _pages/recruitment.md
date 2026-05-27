---
layout: page
permalink: /recruitment/
title: Recruitment
description: 2027학년도 3월 입학 석·박사과정 학생을 모집합니다.
nav: false
---

<style>
  .recruit-page {
    --section-gap: 2.75rem;
    max-width: 920px;
    margin: 0 auto;
  }

  /* ===== Hero ===== */
  .recruit-page .recruit-hero {
    background: var(--global-card-bg-color);
    border: 1px solid var(--global-divider-color);
    border-radius: 16px;
    padding: 1.5rem 1.75rem;
    margin-bottom: var(--section-gap);
    box-shadow: 0 1px 2px rgba(0,0,0,0.03);
  }
  .recruit-page .recruit-tagline {
    display: inline-block;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--global-theme-color);
    background: rgba(100, 31, 255, 0.10);
    padding: 0.2rem 0.6rem;
    border-radius: 999px;
    margin-bottom: 0.7rem;
  }
  html[data-theme="dark"] .recruit-page .recruit-tagline {
    background: rgba(146, 97, 255, 0.18);
  }
  .recruit-page .recruit-headline {
    font-size: 1.45rem;
    font-weight: 700;
    color: var(--global-text-color);
    margin: 0 0 0.4rem;
    line-height: 1.4;
  }
  .recruit-page .recruit-sub {
    color: var(--global-text-color-light);
    margin: 0 0 1rem;
    line-height: 1.6;
  }
  .recruit-page .recruit-quickfacts {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 0.8rem;
    margin-top: 1rem;
  }
  .recruit-page .qf-item {
    background: rgba(100, 31, 255, 0.05);
    border-radius: 10px;
    padding: 0.6rem 0.9rem;
  }
  html[data-theme="dark"] .recruit-page .qf-item {
    background: rgba(146, 97, 255, 0.10);
  }
  .recruit-page .qf-label {
    font-size: 0.72rem;
    color: var(--global-text-color-light);
    margin: 0 0 0.15rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  .recruit-page .qf-value {
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--global-text-color);
    margin: 0;
    line-height: 1.4;
  }

  /* ===== Section blocks ===== */
  .recruit-page .recruit-section {
    margin-bottom: var(--section-gap);
  }
  .recruit-page .recruit-section h2 {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--global-text-color);
    margin: 0 0 0.4rem;
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
  }
  .recruit-page .recruit-section h2 .num {
    font-size: 0.85rem;
    color: var(--global-theme-color);
    font-weight: 700;
    letter-spacing: 0.04em;
  }
  .recruit-page .recruit-section h3 {
    font-size: 1rem;
    font-weight: 700;
    color: var(--global-text-color);
    margin: 1.25rem 0 0.6rem;
  }
  .recruit-page .accent-line {
    height: 2px;
    width: 40px;
    background: var(--global-theme-color);
    border-radius: 2px;
    margin: 0 0 1rem;
  }

  /* Bullet lists with arrow markers */
  .recruit-page .bullet-list {
    margin: 0 0 0.5rem;
    padding: 0;
    list-style: none;
  }
  .recruit-page .bullet-list li {
    position: relative;
    padding-left: 1.4rem;
    margin-bottom: 0.45rem;
    line-height: 1.6;
    color: var(--global-text-color);
  }
  .recruit-page .bullet-list li::before {
    content: "→";
    position: absolute;
    left: 0;
    color: var(--global-theme-color);
    font-weight: 700;
  }
  .recruit-page .bullet-list .field {
    color: var(--global-text-color-light);
    font-size: 0.85rem;
    margin-left: 0.35rem;
  }

  /* Location card */
  .recruit-page .info-card {
    background: var(--global-card-bg-color);
    border: 1px solid var(--global-divider-color);
    border-radius: 12px;
    padding: 1rem 1.2rem;
    line-height: 1.65;
  }
  .recruit-page .info-card .place {
    font-weight: 600;
    color: var(--global-text-color);
    margin: 0 0 0.2rem;
  }
  .recruit-page .info-card .addr {
    font-size: 0.9rem;
    color: var(--global-text-color-light);
    margin: 0;
  }

  /* Image */
  .recruit-page .recruit-img {
    margin: 0.5rem 0 1.25rem;
    text-align: center;
  }
  .recruit-page .recruit-img img {
    max-width: 100%;
    width: 368px;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 4px 14px rgba(0,0,0,0.05);
  }

  /* Topic cards */
  .recruit-page .topic-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 0.75rem;
  }
  .recruit-page .topic-card {
    background: var(--global-card-bg-color);
    border: 1px solid var(--global-divider-color);
    border-radius: 12px;
    padding: 0.9rem 1rem;
    transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease;
  }
  .recruit-page .topic-card:hover {
    transform: translateY(-2px);
    border-color: rgba(100, 31, 255, 0.25);
    box-shadow: 0 6px 16px rgba(0,0,0,0.05);
  }
  html[data-theme="dark"] .recruit-page .topic-card:hover {
    border-color: rgba(146, 97, 255, 0.4);
  }
  .recruit-page .topic-title {
    font-size: 0.92rem;
    font-weight: 600;
    color: var(--global-text-color);
    margin: 0 0 0.3rem;
    line-height: 1.45;
  }
  .recruit-page .topic-field {
    font-size: 0.78rem;
    color: var(--global-text-color-light);
    margin: 0;
  }

  /* Quota cards */
  .recruit-page .quota-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
  }
  .recruit-page .quota-card {
    background: var(--global-card-bg-color);
    border: 1px solid var(--global-divider-color);
    border-radius: 14px;
    padding: 1.1rem 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }
  .recruit-page .quota-label {
    font-size: 0.78rem;
    color: var(--global-text-color-light);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  .recruit-page .quota-num {
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--global-theme-color);
    line-height: 1;
  }
  .recruit-page .quota-note {
    font-size: 0.82rem;
    color: var(--global-text-color-light);
  }

  /* Benefit groups */
  .recruit-page .benefit-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1rem;
  }
  .recruit-page .benefit-card {
    background: var(--global-card-bg-color);
    border: 1px solid var(--global-divider-color);
    border-radius: 14px;
    padding: 1rem 1.2rem;
  }
  .recruit-page .benefit-card h4 {
    margin: 0 0 0.6rem;
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--global-text-color);
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }
  .recruit-page .benefit-card h4 .badge {
    display: inline-block;
    font-size: 0.7rem;
    padding: 0.1rem 0.5rem;
    border-radius: 999px;
    background: rgba(100, 31, 255, 0.12);
    color: var(--global-theme-color);
    font-weight: 600;
  }
  html[data-theme="dark"] .recruit-page .benefit-card h4 .badge {
    background: rgba(146, 97, 255, 0.18);
  }
  .recruit-page .benefit-card ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .recruit-page .benefit-card li {
    position: relative;
    padding-left: 1.2rem;
    margin-bottom: 0.4rem;
    font-size: 0.9rem;
    line-height: 1.55;
    color: var(--global-text-color);
  }
  .recruit-page .benefit-card li::before {
    content: "✓";
    position: absolute;
    left: 0;
    color: var(--global-theme-color);
    font-weight: 700;
  }

  /* Schedule timeline */
  .recruit-page .schedule {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
  .recruit-page .sched-item {
    display: grid;
    grid-template-columns: 140px 1fr;
    gap: 1rem;
    padding: 0.7rem 1rem;
    border: 1px solid var(--global-divider-color);
    border-radius: 10px;
    align-items: center;
    background: var(--global-card-bg-color);
  }
  .recruit-page .sched-when {
    font-weight: 700;
    color: var(--global-theme-color);
    font-size: 0.9rem;
  }
  .recruit-page .sched-what {
    color: var(--global-text-color);
    font-size: 0.92rem;
  }

  /* Contact panel */
  .recruit-page .contact-panel {
    background: var(--global-card-bg-color);
    border: 1px solid var(--global-divider-color);
    border-radius: 14px;
    padding: 1.25rem 1.4rem;
  }
  .recruit-page .contact-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem 0.9rem;
    line-height: 1.7;
    color: var(--global-text-color);
  }
  .recruit-page .contact-row .label {
    color: var(--global-text-color-light);
    font-size: 0.85rem;
    min-width: 90px;
  }
  .recruit-page .contact-cta {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    margin-top: 0.8rem;
    padding: 0.55rem 1.1rem;
    background: var(--global-theme-color);
    color: #fff;
    border-radius: 999px;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9rem;
    transition: transform 0.18s ease, box-shadow 0.18s ease;
  }
  .recruit-page .contact-cta:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 14px rgba(100, 31, 255, 0.25);
    color: #fff;
    text-decoration: none;
  }
  .recruit-page .contact-note {
    margin-top: 0.9rem;
    padding: 0.7rem 0.9rem;
    border-left: 3px solid var(--global-theme-color);
    background: rgba(100, 31, 255, 0.05);
    border-radius: 6px;
    font-weight: 600;
    color: var(--global-text-color);
  }
  html[data-theme="dark"] .recruit-page .contact-note {
    background: rgba(146, 97, 255, 0.10);
  }

  @media (max-width: 640px) {
    .recruit-page .sched-item { grid-template-columns: 1fr; gap: 0.15rem; }
  }
</style>

<div class="recruit-page">

<!-- =========== Hero =========== -->
<div class="recruit-hero">
  <span class="recruit-tagline">Now Recruiting · 2027 Spring</span>
  <h2 class="recruit-headline">2027학년도 3월 입학 석·박사과정 학생 모집</h2>
  <p class="recruit-sub">경북대학교 데이터사이언스대학원 로봇촉각데이터 연구실에서 함께 연구할 학생을 찾습니다.</p>

  <div class="recruit-quickfacts">
    <div class="qf-item">
      <p class="qf-label">원서접수</p>
      <p class="qf-value">2026년 11월 초</p>
    </div>
    <div class="qf-item">
      <p class="qf-label">구술고사</p>
      <p class="qf-value">2026년 12월 초</p>
    </div>
    <div class="qf-item">
      <p class="qf-label">입학</p>
      <p class="qf-value">2027년 3월 1일</p>
    </div>
    <div class="qf-item">
      <p class="qf-label">모집 인원</p>
      <p class="qf-value">석사 약 2명 · 박사 1명</p>
    </div>
  </div>
</div>

<!-- =========== 1. 모집 대상 =========== -->
<div class="recruit-section">
  <h2><span class="num">01</span> 모집 대상</h2>
  <div class="accent-line"></div>
  <ul class="bullet-list">
    <li>로보틱스에 관심이 많으나 그동안 계기가 없었던 학생</li>
    <li>각종 센서, 로봇팔 등에 관심이 많은 학생</li>
    <li>머신러닝을 로봇으로 입덕하고 싶은 학생</li>
  </ul>
</div>

<!-- =========== 2. 연구실 위치 =========== -->
<div class="recruit-section">
  <h2><span class="num">02</span> 연구실 위치</h2>
  <div class="accent-line"></div>
  <div class="info-card">
    <p class="place">경북대학교 대구캠퍼스 데이터사이언스대학원 · 로봇촉각데이터 연구실</p>
    <p class="addr">대구광역시 북구 대학로 80 · 제4합동강의동</p>
  </div>
</div>

<!-- =========== 3. 연구 내용 =========== -->
<div class="recruit-section">
  <h2><span class="num">03</span> 연구 내용 <span style="font-size:0.85rem;color:var(--global-text-color-light);font-weight:500;">(유관 학문)</span></h2>
  <div class="accent-line"></div>

  <div class="recruit-img">
    <img src="{{ '/assets/img/major_figs/web_main_pic.png' | relative_url }}" alt="주요 연구 분야 개요">
  </div>

  <div class="topic-grid">
    <div class="topic-card">
      <p class="topic-title">로봇 핸드에 사용되는 핑거팁 촉각 센서 제작</p>
      <p class="topic-field">기계공학 · 재료공학</p>
    </div>
    <div class="topic-card">
      <p class="topic-title">소프트 촉각 센서의 움직임 가상화</p>
      <p class="topic-field">컴퓨터공학 · 기계공학</p>
    </div>
    <div class="topic-card">
      <p class="topic-title">AI 모델 기반 촉각 센싱 기법 연구</p>
      <p class="topic-field">컴퓨터공학 · 데이터사이언스</p>
    </div>
    <div class="topic-card">
      <p class="topic-title">촉각 센서에 들어오는 멀티모달 데이터 처리 연구</p>
      <p class="topic-field">데이터사이언스</p>
    </div>
    <div class="topic-card">
      <p class="topic-title">멀티모달 데이터 합성용 회로 연구</p>
      <p class="topic-field">전자공학</p>
    </div>
    <div class="topic-card">
      <p class="topic-title">시각 + 촉각 데이터 활용 로봇의 물체 조작 기법 연구</p>
      <p class="topic-field">이/공학 전분야</p>
    </div>
  </div>
</div>

<!-- =========== 4. 모집 인원 =========== -->
<div class="recruit-section">
  <h2><span class="num">04</span> 모집 인원 <span style="font-size:0.85rem;color:var(--global-text-color-light);font-weight:500;">(2027학년도 3월 입학)</span></h2>
  <div class="accent-line"></div>
  <div class="quota-grid">
    <div class="quota-card">
      <span class="quota-label">석사과정</span>
      <span class="quota-num">2명 정도</span>
      <span class="quota-note">전일제</span>
    </div>
    <div class="quota-card">
      <span class="quota-label">박사과정</span>
      <span class="quota-num">1명</span>
      <span class="quota-note">전일제</span>
    </div>
  </div>
</div>

<!-- =========== 5. 지원 혜택 =========== -->
<div class="recruit-section">
  <h2><span class="num">05</span> 지원 혜택</h2>
  <div class="accent-line"></div>
  <div class="benefit-grid">
    <div class="benefit-card">
      <h4>공통 혜택 <span class="badge">All</span></h4>
      <ul>
        <li>각 과정별 국내 최고 수준의 월급 제공 (연구원 등록 필수)</li>
        <li>해외 학회 지원</li>
        <li>해외 서머스쿨 지원</li>
        <li>데이터사이언스대학원 전용 서버실 (머신러닝 모델 트레이닝용)</li>
      </ul>
    </div>
    <div class="benefit-card">
      <h4>박사과정 특별 혜택 <span class="badge">Ph.D.</span></h4>
      <ul>
        <li>등록금 초기 2년간 면제 (등록 후 학교에서 되돌려줌)</li>
      </ul>
    </div>
  </div>
</div>

<!-- =========== 6. 전형일정 =========== -->
<div class="recruit-section">
  <h2><span class="num">06</span> 전형일정 <span style="font-size:0.85rem;color:var(--global-text-color-light);font-weight:500;">(안)</span></h2>
  <div class="accent-line"></div>
  <div class="schedule">
    <div class="sched-item">
      <span class="sched-when">2026년 11월 초</span>
      <span class="sched-what">원서접수 — <a href="https://data.knu.ac.kr" target="_blank" rel="noopener">data.knu.ac.kr</a> 참조</span>
    </div>
    <div class="sched-item">
      <span class="sched-when">2026년 12월 초</span>
      <span class="sched-what">구술고사</span>
    </div>
    <div class="sched-item">
      <span class="sched-when">2027년 3월 1일</span>
      <span class="sched-what">입학</span>
    </div>
  </div>
</div>

<!-- =========== 7. 기타 / 컨택 =========== -->
<div class="recruit-section">
  <h2><span class="num">07</span> 기타 · 문의</h2>
  <div class="accent-line"></div>
  <div class="contact-panel">
    <div class="contact-row">
      <span class="label">랩 홈페이지</span>
      <a href="https://rottoda.com" target="_blank" rel="noopener">https://rottoda.com</a>
    </div>
    <div class="contact-row">
      <span class="label">문의 이메일</span>
      <span>남세광 교수 · <code style="background:transparent;padding:0;">s.nam (at) knu.ac.kr</code></span>
    </div>
    <a class="contact-cta" href="mailto:s.nam@knu.ac.kr">교수님께 메일 보내기 →</a>
    <p class="contact-note">지원 전 컨택을 권장합니다.</p>
  </div>
</div>

</div>
