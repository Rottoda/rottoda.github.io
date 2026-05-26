---
layout: page
title: projects
permalink: /projects/
description: Rottoda는 양질의 과제비 확보를 통해 안정적인 연구수행 환경을 제공합니다.
nav: true
nav_order: 1
---

<style>
  .projects-page {
    --section-gap: 2.75rem;
  }

  .projects-page .proj-section {
    margin-bottom: var(--section-gap);
  }
  .projects-page .proj-section h2 {
    font-size: 1.35rem;
    font-weight: 700;
    color: var(--global-text-color);
    margin: 0 0 0.4rem;
  }
  .projects-page .proj-accent {
    height: 2px;
    width: 44px;
    background: var(--global-theme-color);
    border-radius: 2px;
    margin: 0 0 1.25rem;
  }
  .projects-page .proj-section-sub {
    font-size: 0.95rem;
    color: var(--global-text-color-light);
    margin: 0 0 1rem;
    line-height: 1.6;
  }

  .projects-page .proj-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 1.25rem;
  }

  .projects-page .proj-card {
    display: flex;
    flex-direction: column;
    background: var(--global-card-bg-color);
    border: 1px solid var(--global-divider-color);
    border-radius: 14px;
    overflow: hidden;
    text-decoration: none;
    color: inherit;
    transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
  }
  .projects-page .proj-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 22px rgba(0,0,0,0.06);
    border-color: rgba(100, 31, 255, 0.25);
    text-decoration: none;
  }
  html[data-theme="dark"] .projects-page .proj-card:hover {
    border-color: rgba(146, 97, 255, 0.4);
  }
  .projects-page .proj-card:hover .proj-title {
    color: var(--global-theme-color);
  }

  .projects-page .proj-img {
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    background: var(--global-divider-color);
  }
  .projects-page .proj-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.3s ease;
  }
  .projects-page .proj-card:hover .proj-img img {
    transform: scale(1.04);
  }

  .projects-page .proj-body {
    padding: 1rem 1.1rem 1.1rem;
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
    flex: 1;
  }

  .projects-page .proj-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
  }
  .projects-page .proj-tag {
    display: inline-block;
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.03em;
    padding: 0.15rem 0.55rem;
    border-radius: 999px;
    line-height: 1.4;
  }
  .projects-page .proj-tag.cat {
    background: var(--global-divider-color);
    color: var(--global-text-color-light);
  }
  .projects-page .proj-tag.role {
    background: rgba(100, 31, 255, 0.12);
    color: var(--global-theme-color);
  }
  html[data-theme="dark"] .projects-page .proj-tag.role {
    background: rgba(146, 97, 255, 0.18);
  }

  .projects-page .proj-title {
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.45;
    margin: 0;
    color: var(--global-text-color);
    transition: color 0.18s ease;
  }
  .projects-page .proj-agency {
    font-size: 0.82rem;
    color: var(--global-text-color-light);
    margin: 0;
    line-height: 1.5;
  }
  .projects-page .proj-detail {
    margin-top: auto;
    font-size: 0.78rem;
    font-weight: 600;
    color: var(--global-theme-color);
    padding-top: 0.5rem;
  }

  @media (max-width: 640px) {
    .projects-page .proj-grid {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="projects-page">

<div class="proj-section">
  <h2>Active Projects</h2>
  <div class="proj-accent"></div>
  <p class="proj-section-sub">수행중인 연구과제입니다. 각 카드를 클릭하면 상세 페이지로 이동합니다.</p>

  <div class="proj-grid">

    <a class="proj-card" href="{{ '/projects/korea-uk/' | relative_url }}">
      <div class="proj-img"><img src="{{ '/assets/img/projects/korea-uk/rep_img_v2.png' | relative_url }}" alt="한국-영국 국제 공동연구"></div>
      <div class="proj-body">
        <div class="proj-meta">
          <span class="proj-tag cat">Rottoda</span>
          <span class="proj-tag role">연구책임</span>
        </div>
        <h3 class="proj-title">멀티모달 비전기반 촉각센싱에 의한 로봇의 물체 조작 기술 향상</h3>
        <p class="proj-agency">한국연구재단 · 개인기초연구</p>
        <span class="proj-detail">상세 →</span>
      </div>
    </a>

    <a class="proj-card" href="{{ '/projects/itrc/' | relative_url }}">
      <div class="proj-img"><img src="{{ '/assets/img/projects/itrc/rep_img_v2.png' | relative_url }}" alt="데이터기반 모빌리티 연구"></div>
      <div class="proj-body">
        <div class="proj-meta">
          <span class="proj-tag cat">GSDS</span>
        </div>
        <h3 class="proj-title">데이터 기반 지능형 모빌리티 연구센터</h3>
        <p class="proj-agency">정보통신기획평가원 · 정보통신방송혁신인재양성</p>
        <span class="proj-detail">상세 →</span>
      </div>
    </a>

    <a class="proj-card" href="{{ '/projects/bk21/' | relative_url }}">
      <div class="proj-img"><img src="{{ '/assets/img/projects/bk21/rep_img.png' | relative_url }}" alt="부산대-경북대 DS 협력"></div>
      <div class="proj-body">
        <div class="proj-meta">
          <span class="proj-tag cat">GSDS</span>
        </div>
        <h3 class="proj-title">GLOW-AI 혁신인재양성 교육연구단</h3>
        <p class="proj-agency">한국연구재단 · 4단계BK21사업</p>
        <span class="proj-detail">상세 →</span>
      </div>
    </a>

    <a class="proj-card" href="{{ '/projects/kds/' | relative_url }}">
      <div class="proj-img"><img src="{{ '/assets/img/projects/kds/rep_img.png' | relative_url }}" alt="데이터사이언스 인재양성"></div>
      <div class="proj-body">
        <div class="proj-meta">
          <span class="proj-tag cat">GSDS</span>
        </div>
        <h3 class="proj-title">지역산업 혁신을 위한 지역 수요 중심 데이터사이언스 융합인재 양성사업</h3>
        <p class="proj-agency">한국연구재단 · 과학기술혁신인재양성</p>
        <span class="proj-detail">상세 →</span>
      </div>
    </a>

  </div>
</div>

<div class="proj-section">
  <h2>Completed Projects</h2>
  <div class="proj-accent"></div>
  <p class="proj-section-sub">수행이 종료된 연구과제입니다.</p>

  <div class="proj-grid">

    <a class="proj-card" href="{{ '/projects/agi/' | relative_url }}">
      <div class="proj-img"><img src="{{ '/assets/img/projects/agi/rep_img.png' | relative_url }}" alt="범용 인공지능 연구"></div>
      <div class="proj-body">
        <div class="proj-meta">
          <span class="proj-tag cat">Rottoda</span>
          <span class="proj-tag role">세부과제책임</span>
        </div>
        <h3 class="proj-title">차세대 다중감각 통합 소셜 로봇 제어를 위한 범용 인공지능 플랫폼 개발</h3>
        <p class="proj-agency">정보통신기획평가원 · 인간지향적차세대도전형 AI기술개발</p>
        <span class="proj-detail">상세 →</span>
      </div>
    </a>

  </div>
</div>

</div>
