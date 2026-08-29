---
layout: page
permalink: /team/
title: team
description: Members of the Rottoda lab
nav: true
nav_order: 2
---

<style>
  .team-page {
    --card-radius: 14px;
    --card-shadow: 0 1px 2px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.06);
    --card-shadow-hover: 0 6px 16px rgba(0,0,0,0.08), 0 12px 32px rgba(0,0,0,0.10);
    --section-gap: 3.5rem;
  }

  .team-page .team-section {
    margin-top: var(--section-gap);
  }
  .team-page .team-section:first-of-type {
    margin-top: 2rem;
  }

  .team-page .section-title {
    font-size: 1.6rem;
    font-weight: 600;
    letter-spacing: -0.01em;
    margin: 0 0 0.25rem;
    color: var(--global-text-color, #212529);
  }
  .team-page .section-sub {
    font-size: 0.95rem;
    color: var(--global-text-color-light, #828282);
    margin: 0 0 1.5rem;
  }
  .team-page .section-divider {
    height: 2px;
    width: 44px;
    background: var(--global-theme-color);
    border-radius: 2px;
    margin: 0 0 1.5rem;
  }

  /* PI hero */
  .pi-card {
    display: grid;
    grid-template-columns: 220px 1fr;
    gap: 2rem;
    align-items: start;
    padding: 1.75rem;
    border-radius: var(--card-radius);
    background: var(--global-card-bg-color, #fff);
    box-shadow: var(--card-shadow);
  }
  .pi-card .pi-photo img {
    width: 100%;
    height: auto;
    border-radius: 12px;
    display: block;
    object-fit: cover;
    aspect-ratio: 1 / 1;
  }
  .pi-card .pi-name {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0 0 0.25rem;
  }
  .pi-card .pi-role {
    color: var(--global-text-color-light, #6c757d);
    margin: 0 0 1rem;
    font-size: 0.95rem;
    line-height: 1.5;
  }
  .pi-card .pi-links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }
  .pi-card .pi-links a {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    padding: 0.35rem 0.7rem;
    border-radius: 999px;
    border: 1px solid var(--global-divider-color);
    font-size: 0.85rem;
    color: var(--global-text-color, #212529);
    text-decoration: none;
    transition: all 0.15s ease;
  }
  .pi-card .pi-links a:hover {
    background: var(--global-theme-color);
    color: #fff;
    border-color: var(--global-theme-color);
  }
  .pi-meta h4 {
    font-size: 0.95rem;
    font-weight: 600;
    margin: 1rem 0 0.4rem;
    color: var(--global-text-color, #212529);
  }
  .pi-meta ul {
    margin: 0;
    padding-left: 1.1rem;
    font-size: 0.9rem;
    line-height: 1.6;
    color: var(--global-text-color, #444);
  }

  /* Member grid */
  .member-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1.5rem;
  }
  .member-card {
    background: var(--global-card-bg-color, #fff);
    border-radius: var(--card-radius);
    overflow: hidden;
    box-shadow: var(--card-shadow);
    transition: transform 0.18s ease, box-shadow 0.18s ease;
    display: flex;
    flex-direction: column;
  }
  .member-card:hover {
    transform: translateY(-3px);
    box-shadow: var(--card-shadow-hover);
  }
  .member-photo {
    width: 100%;
    aspect-ratio: 1 / 1;
    overflow: hidden;
    background: #f4f4f6;
  }
  .member-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.3s ease;
  }
  .member-card:hover .member-photo img {
    transform: scale(1.04);
  }
  .member-body {
    padding: 0.9rem 1rem 1.1rem;
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .member-name {
    font-size: 1rem;
    font-weight: 600;
    margin: 0 0 0.15rem;
    line-height: 1.3;
  }
  .member-name .en {
    color: var(--global-text-color-light, #6c757d);
    font-weight: 400;
    font-size: 0.85rem;
    margin-left: 0.25rem;
  }
  .member-role {
    font-size: 0.78rem;
    color: var(--global-text-color-light, #6c757d);
    margin: 0 0 0.5rem;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }
  .member-interest {
    font-size: 0.85rem;
    line-height: 1.45;
    color: var(--global-text-color, #444);
    margin: 0 0 0.5rem;
  }
  .member-extra {
    font-size: 0.8rem;
    line-height: 1.45;
    color: var(--global-text-color-light, #6c757d);
    margin: auto 0 0;
  }
  .member-extra a {
    color: var(--global-theme-color);
    text-decoration: none;
  }
  .member-extra a:hover {
    text-decoration: underline;
  }

  /* Alumni list */
  .alumni-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 0.75rem 1.5rem;
  }
  .alumni-item {
    display: flex;
    gap: 0.9rem;
    align-items: center;
    padding: 0.6rem;
    border-radius: 10px;
    transition: background 0.15s ease;
  }
  .alumni-item:hover {
    background: rgba(100, 31, 255, 0.06);
  }
  html[data-theme="dark"] .alumni-item:hover {
    background: rgba(146, 97, 255, 0.10);
  }
  .alumni-photo {
    flex: 0 0 56px;
    width: 56px;
    height: 56px;
    border-radius: 10px;
    overflow: hidden;
    background: #f4f4f6;
  }
  .alumni-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .alumni-info {
    flex: 1;
    min-width: 0;
  }
  .alumni-name {
    font-size: 0.92rem;
    font-weight: 600;
    margin: 0;
    line-height: 1.3;
  }
  .alumni-name .en {
    color: var(--global-text-color-light, #6c757d);
    font-weight: 400;
    font-size: 0.8rem;
  }
  .alumni-meta {
    font-size: 0.78rem;
    color: var(--global-text-color-light, #6c757d);
    margin: 0.15rem 0 0;
    line-height: 1.4;
  }

  .badge-fulltime, .badge-parttime {
    display: inline-block;
    font-size: 0.7rem;
    padding: 0.1rem 0.45rem;
    border-radius: 999px;
    margin-left: 0.35rem;
    vertical-align: middle;
    font-weight: 500;
  }
  .badge-fulltime { background: rgba(100, 31, 255, 0.12); color: var(--global-theme-color); }
  .badge-parttime { background: var(--global-divider-color); color: var(--global-text-color-light); }
  html[data-theme="dark"] .badge-fulltime { background: rgba(146, 97, 255, 0.18); }

  /* Commencement year sub-headers */
  .team-page .year-label {
    font-size: 1.05rem;
    font-weight: 600;
    margin: 1rem 0 0.8rem;
    color: var(--global-text-color);
  }
  .team-page .year-label.spaced { margin-top: 2rem; }

  @media (max-width: 640px) {
    .pi-card {
      grid-template-columns: 1fr;
    }
    .pi-card .pi-photo {
      max-width: 200px;
      margin: 0 auto;
    }
    .member-grid {
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      gap: 1rem;
    }
  }
</style>

<div class="team-page">

<!-- ============ PI ============ -->
<div class="team-section">
  <h2 class="section-title">Principal Investigator</h2>
  <div class="section-divider"></div>

  <div class="pi-card">
    <div class="pi-photo">
      <img src="{{ '/assets/img/members/Nam_Saekwang_v2.png' | relative_url }}" alt="Saekwang Nam">
    </div>
    <div class="pi-info">
      <h3 class="pi-name">남세광 <span style="color:var(--global-text-color-light);font-weight:400;font-size:0.95rem;">Saekwang Nam</span></h3>
      <p class="pi-role">
        Assistant Professor<br>
        Department of Artificial Intelligence, University of Seoul
      </p>
      <div class="pi-links">
        <a href="https://scholar.google.com/citations?user=DSZzGh0AAAAJ&hl=en" target="_blank" rel="noopener">Google Scholar</a>
        <a href="{{ '/assets/pdf/cv_Saekwang_Nam.pdf' | relative_url }}" target="_blank" rel="noopener">CV (PDF)</a>
      </div>

      <div class="pi-meta">
        <h4>Education</h4>
        <ul>
          <li><b>B.E.</b>, Human &amp; Mechanical Systems Engineering, Kanazawa University, Japan (2007 – 2011)</li>
          <li><b>M.S.</b>, Computer Science, University of California, San Diego, USA (2011 – 2013)</li>
          <li><b>Dr. rer. nat.</b>, Haptic Intelligence dept., Max Planck Institute for Intelligent Systems, Stuttgart, Germany (2017 – 2022)</li>
        </ul>
        <h4>Experience</h4>
        <ul>
          <li><b>Researcher</b>, Electronics and Telecommunications Research Institute, Daejeon, Korea (2013 – 2017)</li>
          <li><b>Postdoctoral Research Associate</b>, Dexterous Robotics Group, University of Bristol, UK (2022 – 2024)</li>
          <li><b>Assistant Professor</b>, Graduate School of Data Science, Kyungpook National University (Mar. 2024 – Aug. 2026)</li>
          <li><b>Assistant Professor</b>, Department of Artificial Intelligence, University of Seoul (Sep. 2026 – present)</li>
        </ul>
        <h4>Academic Services</h4>
        <ul>
          <li><b>Local Arrangement Chair</b>, 2026 Asia Haptics Conference (2026)</li>
          <li><b>Extended Abstracts Chair</b>, IEEE-RAS RoboSoft 2026 (2026)</li>
          <li><b>Organizing Committee</b>, 4th Korean Haptics Society PI Symposium (2026)</li>
          <li><b>Director of International Cooperation</b>, Korean Haptics Society (2025 – 2026)</li>
          <li><b>Organizing Committee</b>, 3rd Korean Haptics Society PI Symposium (2025)</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<!-- ============ Researchers ============
<div class="team-section">
  <h2 class="section-title">Researchers</h2>
  <div class="section-divider"></div>

  <div class="member-grid">
    <div class="member-card">
      <div class="member-photo">
        <img src="{{ '/assets/img/members/Bae_Sungeun.jpeg' | relative_url }}" alt="Sungeun Bae">
      </div>
      <div class="member-body">
        <h4 class="member-name">배성은 <span class="en">Sungeun Bae</span><span class="badge-fulltime">Full-time</span></h4>
        <p class="member-role">Undergraduate Researcher</p>
        <p class="member-interest">Haptic Sensing, Big Data Analytics, Robot Perception</p>
      </div>
    </div>
  </div>
</div> -->

<!-- ============ MS Students ============ -->
<div class="team-section">
  <h2 class="section-title">M.S. Students</h2>
  <p class="section-sub">Current graduate students by enrollment year</p>
  <div class="section-divider"></div>

  <h3 class="year-label">Enrolled at KNU in 2026</h3>
  <div class="member-grid">
    <div class="member-card">
      <div class="member-photo">
        <img src="{{ '/assets/img/members/Bae_Sungeun.jpeg' | relative_url }}" alt="Sungeun Bae">
      </div>
      <div class="member-body">
        <h4 class="member-name">배성은 <span class="en">Sungeun Bae</span><span class="badge-fulltime">Full-time</span></h4>
        <!-- <p class="member-role">Undergraduate Researcher</p> -->
        <p class="member-interest">Haptic Sensing, Big Data Analytics, Robot Perception</p>
      </div>
    </div>

    <div class="member-card">
      <div class="member-photo"><img src="{{ '/assets/img/members/Ku_Hyeongmo.png' | relative_url }}" alt="Hyeongmo Ku"></div>
      <div class="member-body">
        <h4 class="member-name">구형모 <span class="en">Hyeongmo Ku</span><span class="badge-fulltime">Full-time</span></h4>
        <p class="member-interest">Big Data, Deep Learning, Collaborative Robot</p>
      </div>
    </div>

    <div class="member-card">
      <div class="member-photo"><img src="{{ '/assets/img/members/Choi_Jaewoong.jpeg' | relative_url }}" alt="Jaewoong Choi"></div>
      <div class="member-body">
        <h4 class="member-name">최재웅 <span class="en">Jaewoong Choi</span><span class="badge-fulltime">Full-time</span></h4>
        <p class="member-interest">Imitation Learning, Dexterous Manipulation</p>
      </div>
    </div>

    <div class="member-card">
      <div class="member-photo"><img src="{{ '/assets/img/members/Lee_Sunjong.jpeg' | relative_url }}" alt="Sungjong Lee"></div>
      <div class="member-body">
        <h4 class="member-name">이선종 <span class="en">Sunjong Lee</span><span class="badge-fulltime">Full-time</span></h4>
        <p class="member-interest">Multimodal Robot, Manipulation, Haptics</p>
      </div>
    </div>

  </div>

  <h3 class="year-label spaced">Enrolled at KNU in 2025</h3>
  <div class="member-grid">

    <div class="member-card">
      <div class="member-photo"><img src="{{ '/assets/img/members/Kim_Hyosung.jpeg' | relative_url }}" alt="Hyosung Kim"></div>
      <div class="member-body">
        <h4 class="member-name">김효성 <span class="en">Hyosung Kim</span><span class="badge-fulltime">Full-time</span></h4>
        <p class="member-interest">ROS, 멀티모달 센싱</p>
      </div>
    </div>

    <div class="member-card">
      <div class="member-photo"><img src="{{ '/assets/img/members/Lee_Junhui.jpeg' | relative_url }}" alt="Junhui Lee"></div>
      <div class="member-body">
        <h4 class="member-name">이준희 <span class="en">Junhui Lee</span><span class="badge-fulltime">Full-time</span></h4>
        <p class="member-interest">로봇 빅데이터, ROS</p>
      </div>
    </div>

    <div class="member-card">
      <div class="member-photo"><img src="{{ '/assets/img/members/Jeong_Yoonseok.jpeg' | relative_url }}" alt="Yoonseok Jeong"></div>
      <div class="member-body">
        <h4 class="member-name">정윤석 <span class="en">Yoonseok Jeong</span><span class="badge-parttime">Part-time</span></h4>
        <p class="member-interest">가상환경 기반 로봇 실증, 검증기술</p>
        <p class="member-extra">한국로봇산업진흥원</p>
      </div>
    </div>

    <div class="member-card">
      <div class="member-photo"><img src="{{ '/assets/img/members/ai_member6.png' | relative_url }}" alt="Simyung Lee"></div>
      <div class="member-body">
        <h4 class="member-name">이시명 <span class="en">Simyung Lee</span><span class="badge-parttime">Part-time</span></h4>
        <p class="member-interest">프로그래밍</p>
        <p class="member-extra">경북대학교 해양과학연구소</p>
      </div>
    </div>

  </div>
</div>

<!-- ============ Alumni ============ -->
<div class="team-section">
  <h2 class="section-title">Alumni of KNU</h2>
  <p class="section-sub">Former KNU members and where they are now</p>
  <div class="section-divider"></div>

  <div class="alumni-grid">
    <div class="alumni-item">
      <div class="alumni-photo"><img src="{{ '/assets/img/members/Jeong_HuiMyeong.jpeg' | relative_url }}" alt="HuiMyeong Jeong"></div>
      <div class="alumni-info">
        <p class="alumni-name">정희명 <span class="en">HuiMyeong Jeong</span></p>
        <p class="alumni-meta">M.S. Aug 2026 · iM 데이터 시스템 <a href="https://www.instagram.com/ttneck.053" target="_blank" rel="noopener">Instagram</a></p>
      </div>
    </div>

    <div class="alumni-item">
      <div class="alumni-photo"><img src="{{ '/assets/img/members/Son_Gunhee.jpg' | relative_url }}" alt="Gunhee Son"></div>
      <div class="alumni-info">
        <p class="alumni-name">손건희 <span class="en">Gunhee Son</span></p>
        <p class="alumni-meta">Undergrad. Researcher · Contract ended May 2026 <a href="https://sites.google.com/view/khson-profile-record" target="_blank" rel="noopener">Personal site</a></p>
      </div>
    </div>

    <div class="alumni-item">
      <div class="alumni-photo"><img src="{{ '/assets/img/members/ai_member5.png' | relative_url }}" alt="Donghyun Ko"></div>
      <div class="alumni-info">
        <p class="alumni-name">고동현 <span class="en">Donghyun Ko</span></p>
        <p class="alumni-meta">Post-master Researcher · Contract ended Oct 2025</p>
      </div>
    </div>

    <div class="alumni-item">
      <div class="alumni-photo"><img src="{{ '/assets/img/members/Kwon_TaeJun.jpg' | relative_url }}" alt="TaeJun Kwon"></div>
      <div class="alumni-info">
        <p class="alumni-name">권태준 <span class="en">TaeJun Kwon</span></p>
        <p class="alumni-meta">M.S. Feb 2026 · 한국철도기술연구원</p>
      </div>
    </div>

    <div class="alumni-item">
      <div class="alumni-photo"><img src="{{ '/assets/img/members/Lee_Eunjung.jpg' | relative_url }}" alt="Eunjung Lee"></div>
      <div class="alumni-info">
        <p class="alumni-name">이은정 <span class="en">Eunjung Lee</span></p>
        <p class="alumni-meta">M.S. Feb 2026 · 대구교육대학교 박사과정</p>
      </div>
    </div>

    <div class="alumni-item">
      <div class="alumni-photo"><img src="{{ '/assets/img/members/ai_member1.png' | relative_url }}" alt="Hyungyu Lee"></div>
      <div class="alumni-info">
        <p class="alumni-name">이현규 <span class="en">Hyungyu Lee</span></p>
        <p class="alumni-meta">M.S. Feb 2026 · POSCO</p>
      </div>
    </div>

    <div class="alumni-item">
      <div class="alumni-photo"><img src="{{ '/assets/img/members/Jang_Jieun.jpg' | relative_url }}" alt="Jieun Jang"></div>
      <div class="alumni-info">
        <p class="alumni-name">장지은 <span class="en">Jieun Jang</span></p>
        <p class="alumni-meta">M.S. Feb 2026</p>
      </div>
    </div>

    <div class="alumni-item">
      <div class="alumni-photo"><img src="{{ '/assets/img/members/Kim_Juju.png' | relative_url }}" alt="JuJu Kim"></div>
      <div class="alumni-info">
        <p class="alumni-name">김은주 <span class="en">JuJu Kim</span></p>
        <p class="alumni-meta">M.S. Aug 2025 · 한국로봇산업진흥원</p>
      </div>
    </div>

    <div class="alumni-item">
      <div class="alumni-photo"><img src="{{ '/assets/img/members/ai_member4.png' | relative_url }}" alt="Yun Hui Na"></div>
      <div class="alumni-info">
        <p class="alumni-name">나윤희 <span class="en">Yun Hui Na</span></p>
        <p class="alumni-meta">M.S. Aug 2025 · 경북대학교 첨단정보통신융합산업기술원</p>
      </div>
    </div>

    <div class="alumni-item">
      <div class="alumni-photo"><img src="{{ '/assets/img/members/ai_member2.png' | relative_url }}" alt="Kwang Hyeon Ro"></div>
      <div class="alumni-info">
        <p class="alumni-name">노광현 <span class="en">Kwang Hyeon Ro</span></p>
        <p class="alumni-meta">M.S. Feb 2026 · NUC전자</p>
      </div>
    </div>

    <div class="alumni-item">
      <div class="alumni-photo"><img src="{{ '/assets/img/members/Park_Jongmin.jpg' | relative_url }}" alt="Jongmin Park"></div>
      <div class="alumni-info">
        <p class="alumni-name">박종민 <span class="en">Jongmin Park</span></p>
        <p class="alumni-meta">M.S. Aug 2025 · <a href="https://www.linkedin.com/in/jongmin-park-269426179" target="_blank" rel="noopener">LinkedIn</a></p>
      </div>
    </div>

    <div class="alumni-item">
      <div class="alumni-photo" style="display:flex;align-items:center;justify-content:center;color:#aaa;font-size:0.7rem;">No&nbsp;photo</div>
      <div class="alumni-info">
        <p class="alumni-name">우승준 <span class="en">Seung Jun Woo</span></p>
        <p class="alumni-meta">M.S. Feb 2024 · 이음기술</p>
      </div>
    </div>

    <div class="alumni-item">
      <div class="alumni-photo"><img src="{{ '/assets/img/members/ai_member9.png' | relative_url }}" alt="Hyeonwoo Cho"></div>
      <div class="alumni-info">
        <p class="alumni-name">조현우 <span class="en">Hyeonwoo Cho</span></p>
        <p class="alumni-meta">M.S. Feb 2026 · 한국지능정보사회진흥원 (NIA)</p>
      </div>
    </div>

    <div class="alumni-item">
      <div class="alumni-photo"><img src="{{ '/assets/img/members/ai_member8.png' | relative_url }}" alt="EunYeong Tak"></div>
      <div class="alumni-info">
        <p class="alumni-name">탁은영 <span class="en">EunYeong Tak</span></p>
        <p class="alumni-meta">M.S. Aug 2025</p>
      </div>
    </div>

    <div class="alumni-item">
      <div class="alumni-photo" style="display:flex;align-items:center;justify-content:center;color:#aaa;font-size:0.7rem;">No&nbsp;photo</div>
      <div class="alumni-info">
        <p class="alumni-name">한영민 <span class="en">Youngmin Han</span></p>
        <p class="alumni-meta">M.S. Feb 2024 · 에이디엔이노텍</p>
      </div>
    </div>

  </div>
</div>

</div>
