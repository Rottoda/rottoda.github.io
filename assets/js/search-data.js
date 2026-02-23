// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-rottoda",
    title: "Rottoda",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "Rottoda는 양질의 과제비 확보를 통해, 여러분들의 안정적인 연구수행 환경을 제공합니다.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-pi",
          title: "PI",
          description: "Introduction of the principal investigator",
          section: "Navigation",
          handler: () => {
            window.location.href = "/pi/";
          },
        },{id: "nav-members",
          title: "members",
          description: "Members at Rottoda",
          section: "Navigation",
          handler: () => {
            window.location.href = "/members/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Check repositories made by Rottoda or PI",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "List of courses PI provides.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "dropdown-tactip-fabriation",
              title: "TacTip Fabriation",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/tactip_fab/";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/plotly/";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/photo-gallery/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/tabs/";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/typograms/";
          
        },
      },{id: "post-a-post-that-can-be-cited",
        
          title: "a post that can be cited",
        
        description: "this is what a post that can be cited looks like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post-citation/";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/pseudocode/";
          
        },
      },{id: "post-a-post-with-code-diff",
        
          title: "a post with code diff",
        
        description: "this is how you can display code diffs",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/code-diff/";
          
        },
      },{id: "post-a-post-with-advanced-image-components",
        
          title: "a post with advanced image components",
        
        description: "this is what advanced image components could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/advanced-images/";
          
        },
      },{id: "post-a-post-with-vega-lite",
        
          title: "a post with vega lite",
        
        description: "this is what included vega lite code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/vega-lite/";
          
        },
      },{id: "post-a-post-with-geojson",
        
          title: "a post with geojson",
        
        description: "this is what included geojson code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/geojson-map/";
          
        },
      },{id: "post-a-post-with-echarts",
        
          title: "a post with echarts",
        
        description: "this is what included echarts code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/echarts/";
          
        },
      },{id: "post-a-post-with-chart-js",
        
          title: "a post with chart.js",
        
        description: "this is what included chart.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/chartjs/";
          
        },
      },{id: "post-a-post-with-tikzjax",
        
          title: "a post with TikZJax",
        
        description: "this is what included TikZ code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tikzjax/";
          
        },
      },{id: "post-a-post-with-bibliography",
        
          title: "a post with bibliography",
        
        description: "an example of a blog post with bibliography",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/post-bibliography/";
          
        },
      },{id: "post-a-post-with-jupyter-notebook",
        
          title: "a post with jupyter notebook",
        
        description: "an example of a blog post with jupyter notebook",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/jupyter-notebook/";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/custom-blockquotes/";
          
        },
      },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
        
          title: "a post with table of contents on a sidebar",
        
        description: "an example of a blog post with table of contents on a sidebar",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/sidebar-table-of-contents/";
          
        },
      },{id: "post-a-post-with-audios",
        
          title: "a post with audios",
        
        description: "this is what included audios could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/audios/";
          
        },
      },{id: "post-a-post-with-videos",
        
          title: "a post with videos",
        
        description: "this is what included videos could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/videos/";
          
        },
      },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
        
          title: "displaying beautiful tables with Bootstrap Tables",
        
        description: "an example of how to use Bootstrap Tables",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tables/";
          
        },
      },{id: "post-a-post-with-table-of-contents",
        
          title: "a post with table of contents",
        
        description: "an example of a blog post with table of contents",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/table-of-contents/";
          
        },
      },{id: "post-a-post-with-giscus-comments",
        
          title: "a post with giscus comments",
        
        description: "an example of a blog post with giscus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/giscus-comments/";
          
        },
      },{id: "post-continuous-vs-continual",
        
          title: "Continuous vs. Continual",
        
        description: "Continuous vs. Continual",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/Continuous/";
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "post-a-post-with-redirect",
        
          title: "a post with redirect",
        
        description: "you can also redirect to assets like pdf",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/assets/pdf/example_pdf.pdf";
          
        },
      },{id: "post-어떻게-생각해-what-do-you-think-of-how-do-you-think-of",
        
          title: "어떻게 생각해? - What do you think of? How do you think of?...",
        
        description: "소소한데 비웃음 당하는 표현들",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/How_do_you_think_of/";
          
        },
      },{id: "post-수학용어-variable-parameter-coefficient",
        
          title: "수학용어 - Variable? Parameter? Coefficient?",
        
        description: "수학용어 - Variable? Parameter? Coefficient?",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/Parameter/";
          
        },
      },{id: "post-a-post-with-diagrams",
        
          title: "a post with diagrams",
        
        description: "an example of a blog post with diagrams",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/diagrams/";
          
        },
      },{id: "post-셀-수-있는-명사-vs-셀-수-없는-명사",
        
          title: "셀 수 있는 명사 vs. 셀 수 없는 명사",
        
        description: "셀 수 있는 명사 vs. 셀 수 없는 명사",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/Uncountable_noun/";
          
        },
      },{id: "post-in-vs-during",
        
          title: "In vs. During",
        
        description: "In vs. During",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/during/";
          
        },
      },{id: "post-a-distill-style-blog-post",
        
          title: "a distill-style blog post",
        
        description: "an example of a distill-style blog post and main elements",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/distill/";
          
        },
      },{id: "post-한정사의-개념으로-관사의-a-the-용법을-꿰뚫자",
        
          title: "한정사의 개념으로 관사의 (a, the) 용법을 꿰뚫자!",
        
        description: "한정사의 개념으로 관사의 (a, the) 용법을 꿰뚫자!",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/article2/";
          
        },
      },{id: "post-many-명사-vs-many-of-명사",
        
          title: "Many 명사 vs. Many of 명사",
        
        description: "Many 명사 vs. Many of 명사",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/many_manyof/";
          
        },
      },{id: "post-call-it-as-regard-it-as-consider-it-as",
        
          title: "Call it as? Regard it as? Consider it as?",
        
        description: "Call it as? Regard it as? Consider it as?",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/call_it_N/";
          
        },
      },{id: "post-영어의-올바른-따옴표-인용부호-사용법-특히-마침표-쉼표의-위치는-한국어처럼-생각해선-안된다",
        
          title: "영어의 올바른 따옴표 (인용부호) 사용법! 특히 마침표, 쉼표의 위치는 한국어처럼 생각해선 안된다!",
        
        description: "인용부호",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/quotation/";
          
        },
      },{id: "post-formal-writing-을-위한-소소한-팁들",
        
          title: "Formal writing 을 위한 소소한 팁들",
        
        description: "Formal writing 을 위한 소소한 팁들",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/tips_1/";
          
        },
      },{id: "post-a-b-and-c-vs-a-b-and-c",
        
          title: "A, B, and C vs. A, B and C",
        
        description: "콤마 활용법 2",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/comma_2/";
          
        },
      },{id: "post-언제까지에서-까지는-by-일까-until-일까",
        
          title: "언제까지에서 까지는 by 일까 until 일까?",
        
        description: "언제까지에서 까지는 by 일까 until 일까?",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/by_until/";
          
        },
      },{id: "post-영어-논문에서-수동태를-써야하는-경우",
        
          title: "영어 논문에서 수동태를 써야하는 경우",
        
        description: "be p.p. 라고 들어는 봤는지...",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/passive_sentence/";
          
        },
      },{id: "post-abstract-초록-작성법-이거-하나로-끝",
        
          title: "Abstract 초록 작성법, 이거 하나로 끝!",
        
        description: "초록 쓰기의 정석",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/abstract/";
          
        },
      },{id: "post-시제일치를-꼭-해야-하는가",
        
          title: "시제일치를 꼭 해야 하는가?",
        
        description: "논문에서의 시제 선정 문제",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/tense_1/";
          
        },
      },{id: "post-unless-와-if-not-의-작은-차이점",
        
          title: "Unless 와 if not 의 작은 차이점",
        
        description: "Unless is not equal to if not",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/unless_if_not/";
          
        },
      },{id: "post-어떻게-하면-관사-a-the-를-잘-이해할-수-있을까",
        
          title: "어떻게 하면 관사 (a, the) 를 잘 이해할 수 있을까?",
        
        description: "어떻게 하면 관사 (a, the) 를 잘 이해할 수 있을까?",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/article/";
          
        },
      },{id: "post-현재완료-have-p-p-는-어떻게-써야-하는가",
        
          title: "현재완료 (Have p.p.) 는 어떻게 써야 하는가?",
        
        description: "현재완료 (Have p.p.) 는 어떻게 써야 하는가?",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/have_pp_had_pp/";
          
        },
      },{id: "post-prevent-목적어-from-v-ing-vs-prevent-목적어-from-v-ing",
        
          title: "Prevent 목적어 from V-ing vs. Prevent 목적어 (from) V-ing",
        
        description: "Prevent 목적어 from V-ing vs. Prevent 목적어 (from) V-ing",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/prevent_from_ving/";
          
        },
      },{id: "post-according-to-를-오용하지말자",
        
          title: "According to 를 오용하지말자",
        
        description: "According to 를 오용하지말자",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/according_to/";
          
        },
      },{id: "post-dangling-modifiers",
        
          title: "Dangling modifiers",
        
        description: "Dangling modifiers",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/Dangling_modifiers/";
          
        },
      },{id: "post-in-front-of-vs-ahead-of",
        
          title: "In front of vs. Ahead of",
        
        description: "In front of vs. Ahead of",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/in_front_of_vs_ahead_of/";
          
        },
      },{id: "post-어떻게-하면-주목을-끄는-제목을-정할-수-있을까",
        
          title: "어떻게 하면 주목을 끄는 제목을 정할 수 있을까?",
        
        description: "논문 제목 결정의 tips",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/How_to_decide_title/";
          
        },
      },{id: "post-생각보다-많이-쓰이는-표현-across",
        
          title: "생각보다 많이 쓰이는 표현 across",
        
        description: "across 활용법",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/across/";
          
        },
      },{id: "post-군더더기-삽입의-용도로-쓰이는-comma에-대하여",
        
          title: "군더더기 삽입의 용도로 쓰이는 comma에 대하여",
        
        description: "콤마 활용법 1",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/Comma/";
          
        },
      },{id: "post-except-vs-except-for",
        
          title: "Except vs. Except for",
        
        description: "Except vs. Except for",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/Except_Except_for/";
          
        },
      },{id: "post-a-post-with-twitter",
        
          title: "a post with twitter",
        
        description: "an example of a blog post with twitter",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/twitter/";
          
        },
      },{id: "post-a-post-with-disqus-comments",
        
          title: "a post with disqus comments",
        
        description: "an example of a blog post with disqus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/disqus-comments/";
          
        },
      },{id: "post-a-post-with-math",
        
          title: "a post with math",
        
        description: "an example of a blog post with some math",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/math/";
          
        },
      },{id: "post-a-post-with-code",
        
          title: "a post with code",
        
        description: "an example of a blog post with some code",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/code/";
          
        },
      },{id: "post-a-post-with-images",
        
          title: "a post with images",
        
        description: "this is what included images could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/images/";
          
        },
      },{id: "post-a-post-with-formatting-and-links",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/formatting-and-links/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-robot-touch-data-lab의-역사적인-첫-랩-회식을-진행했습니다",
          title: 'Robot Touch Data Lab의 역사적인 첫 랩 회식을 진행했습니다.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/20240725_team_dinner/";
            },},{id: "news-ai를-활용한-햅틱-모빌리티-기술-을-주제로-참가하여-인기상을-수상하였습니다",
          title: '‘AI를 활용한 햅틱 모빌리티 기술’ 을 주제로 참가하여 인기상을 수상하였습니다.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/20240821_KHC/";
            },},{id: "news-ict-챌린지에-참가했습니다",
          title: 'ICT 챌린지에 참가했습니다.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/20240925_ICT_challenge/";
            },},{id: "news-fix-2024-전시회에-참가했습니다",
          title: 'FIX 2024 전시회에 참가했습니다.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/20241024_FIX/";
            },},{id: "news-k-ds-컨퍼런스-amp-해커톤에-참가했습니다",
          title: 'K-DS 컨퍼런스 &amp;amp; 해커톤에 참가했습니다.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/20241112_KDS/";
            },},{id: "news-한국통신학회-2024년도-추계종합학술발표회를-참가했습니다",
          title: '한국통신학회 2024년도 추계종합학술발표회를 참가했습니다.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/20241122_telecom_conf/";
            },},{id: "news-robot-touch-data-lab의-1호-멤버인-권태준-학생이-우수상을-수상하였습니다",
          title: 'Robot Touch Data Lab의 1호 멤버인 권태준 학생이 우수상을 수상하였습니다.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/20241128_young_challenge/";
            },},{id: "news-2024학년도-2학기-졸업식-거행",
          title: '2024학년도 2학기 졸업식 거행!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/20250221_graduation/";
            },},{id: "news-itrc-인재양성대전에-참여하였습니다",
          title: 'ITRC 인재양성대전에 참여하였습니다.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/20250425_ITRC/";
            },},{id: "news-홈페이지를-새단장-했습니다",
          title: '홈페이지를 새단장 했습니다!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/20250629_web_renewal/";
            },},{id: "news-rottoda-com-도메인-구매를-완료-하였습니다",
          title: 'rottoda.com 도메인 구매를 완료 하였습니다.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/20250629_domain_purchase/";
            },},{id: "news-rottoda가-world-haptics-conference-2025에-참여했습니다",
          title: 'Rottoda가 World Haptics Conference 2025에 참여했습니다.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/20250708_WHC/";
            },},{id: "news-2025학년도-1학기-졸업식-거행",
          title: '2025학년도 1학기 졸업식 거행!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/20250822_graduation/";
            },},{id: "news-오스트리아-빈에서-열린-ekc2025-학회에-참가하였습니다",
          title: '오스트리아 빈에서 열린 EKC2025 학회에 참가하였습니다.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/20250829_EKC/";
            },},{id: "news-남세광-교수가-동아사이언스-신문기사에-언급되었습니다",
          title: '남세광 교수가 동아사이언스 신문기사에 언급되었습니다.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/20250829_EKC_news/";
            },},{id: "news-대구-호텔수성에서-열린-k-data-science-컨퍼런스에-참가하였습니다",
          title: '대구 호텔수성에서 열린 K-Data Science 컨퍼런스에 참가하였습니다.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/20250905_KDS/";
            },},{id: "news-경축-rottoda의-떠오르는-신예-이준희-학생이-k-data-science-컨퍼런스에서-미래연구상을-수상하였습니다",
          title: '경축! Rottoda의 떠오르는 신예, 이준희 학생이 K-Data Science 컨퍼런스에서 미래연구상을 수상하였습니다.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/20250905_KDS_award/";
            },},{id: "news-경축-rottoda의-에이스-김효성-학생이-2025-ict-챌린지에서-과기부-장관상을-수상하였습니다",
          title: '경축! Rottoda의 에이스, 김효성 학생이 2025 ICT 챌린지에서 과기부 장관상을 수상하였습니다.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/20250911_ICT_challenge/";
            },},{id: "news-university-of-bristol의-연구진이-경북대를-방문했습니다",
          title: 'University of Bristol의 연구진이 경북대를 방문했습니다.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/20250925_KNU_bristol/";
            },},{id: "news-humanoids-2025에서-dexterous-humanoid-manipulation-workshop에-포스터-발표-및-참여-하였습니다",
          title: 'Humanoids 2025에서 Dexterous Humanoid Manipulation Workshop에 포스터 발표 및 참여 하였습니다.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/20251002_humanoids/";
            },},{id: "news-kiev-2025에서-장지은-학생이-성공적인-발표를-마쳤습니다",
          title: 'KIEV 2025에서 장지은 학생이 성공적인 발표를 마쳤습니다.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/20251016_kiev/";
            },},{id: "news-남세광-교수가-로봇신문의-39-젊은-로봇-공학자-39-로-소개되었습니다",
          title: '남세광 교수가 로봇신문의 &amp;#39;젊은 로봇 공학자&amp;#39;로 소개되었습니다.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/20251026_Robotplus/";
            },},{id: "news-iccas-2025에서-권태준-학생이-성공적인-발표를-마쳤습니다",
          title: 'ICCAS 2025에서 권태준 학생이 성공적인 발표를 마쳤습니다.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/20251105_ICCAS/";
            },},{id: "news-2025-icros-kros-호남제주-그랜드-합동-학술대회에서-이준희-권태준-학생이-성공적인-발표를-마쳤습니다",
          title: '2025 ICROS-KROS 호남제주 그랜드 합동 학술대회에서 이준희, 권태준 학생이 성공적인 발표를 마쳤습니다.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/20251204_ICROS/";
            },},{id: "news-2025년을-마무리하는-랩-송년회를-가졌습니다",
          title: '2025년을 마무리하는 랩 송년회를 가졌습니다.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/20251229_Rottoda/";
            },},{id: "news-남세광-교수가-monash-university-malaysia에서-연구-교류를-하였습니다",
          title: '남세광 교수가 Monash University Malaysia에서 연구 교류를 하였습니다.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/20260106_Monash/";
            },},{id: "news-monash-university-malaysia에서-dr-lee-박사가-데이터사이언스대학원에서-연구-발표를-하였습니다",
          title: 'Monash University Malaysia에서 Dr. Lee 박사가 데이터사이언스대학원에서 연구 발표를 하였습니다.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/20260109_Global_matching_lab/";
            },},{id: "news-김효성-이준희-학생이-한국로봇종합학술대회에-참여하였습니다",
          title: '김효성, 이준희 학생이 한국로봇종합학술대회에 참여하였습니다.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/20260204_KRoC/";
            },},{id: "news-한국로봇종합학술대회에서-남세광-교수가-신진연구자세션에서-발표를-하였습니다",
          title: '한국로봇종합학술대회에서 남세광 교수가 신진연구자세션에서 발표를 하였습니다.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/20260204_KRoC_new_researcher/";
            },},{id: "news-2025학년도-2학기-졸업식-거행",
          title: '2025학년도 2학기 졸업식 거행!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/20260220_graduation/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "projects-범용-인공지능-연구",
          title: '범용 인공지능 연구',
          description: "촉각 반응 제어 기법 연구",
          section: "Projects",handler: () => {
              window.location.href = "/projects/agi/";
            },},{id: "projects-부산대-경북대-ds-협력",
          title: '부산대-경북대 DS 협력',
          description: "BK21사업",
          section: "Projects",handler: () => {
              window.location.href = "/projects/bk21/";
            },},{id: "projects-데이터기반-모빌리티-연구",
          title: '데이터기반 모빌리티 연구',
          description: "대학ICT연구센터 사업",
          section: "Projects",handler: () => {
              window.location.href = "/projects/itrc/";
            },},{id: "projects-데이터사이언스-인재양성",
          title: '데이터사이언스 인재양성',
          description: "KDS사업",
          section: "Projects",handler: () => {
              window.location.href = "/projects/kds/";
            },},{id: "projects-한국-영국-국제-공동연구",
          title: '한국-영국 국제 공동연구',
          description: "한국-영국 국제공동연구사업",
          section: "Projects",handler: () => {
              window.location.href = "/projects/korea-uk/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73.%6E%61%6D@%6B%6E%75.%61%63.%6B%72", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/rottoda", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/knu_rottoda", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-7713-8505", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=DSZzGh0AAAAJ", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: 'Socials',
        handler: () => {
          window.open("https://data.knu.ac.kr/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
