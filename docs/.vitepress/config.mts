import { defineConfig } from "vitepress"

export default defineConfig({
  lang: "ko-KR",
  title: "인터에듀 사용 설명서",
  description: "강사 · 선생님 · 관리자를 위한 인터에듀 사용 안내서",
  cleanUrls: true,
  lastUpdated: true,

  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["link", { rel: "preconnect", href: "https://cdn.jsdelivr.net" }],
    [
      "link",
      {
        rel: "stylesheet",
        as: "style",
        crossorigin: "",
        href: "https://cdn.jsdelivr.net/gh/wanteddev/wanted-sans@v1.0.3/packages/wanted-sans/fonts/webfonts/variable/complete/WantedSansVariable.min.css",
      },
    ],
  ],

  themeConfig: {
    outline: { level: [2, 3], label: "이 페이지 목차" },

    nav: [
      { text: "시작하기", link: "/start", activeMatch: "^/start" },
      { text: "강사", link: "/tutor/", activeMatch: "^/tutor/" },
      { text: "선생님", link: "/teacher/", activeMatch: "^/teacher/" },
      { text: "관리자", link: "/admin/", activeMatch: "^/admin/" },
      {
        text: "참고자료",
        link: "/reference/statuses",
        activeMatch: "^/reference/",
      },
    ],

    sidebar: {
      "/tutor/": [
        {
          text: "강사 · 단체 설명서",
          items: [
            { text: "강사 설명서 시작하기", link: "/tutor/" },
            { text: "1. 관리시스템 접속하기", link: "/tutor/access" },
            { text: "2. 강사 회원가입", link: "/tutor/signup" },
            { text: "3. 강사 정보 수정", link: "/tutor/profile" },
            { text: "4. 강의 관리", link: "/tutor/lectures" },
            { text: "5. 강의 후 정리", link: "/tutor/after-class" },
            { text: "6. 계정 정보와 비밀번호", link: "/tutor/account" },
            { text: "자주 묻는 질문", link: "/tutor/faq" },
          ],
        },
      ],
      "/teacher/": [
        {
          text: "선생님 설명서",
          items: [
            { text: "선생님 설명서 시작하기", link: "/teacher/" },
            { text: "1. 홈페이지 접속과 회원가입", link: "/teacher/access" },
            { text: "2. 수업 찾기", link: "/teacher/find-program" },
            { text: "3. 수강 신청하기", link: "/teacher/apply" },
            { text: "4. 마이페이지에서 관리하기", link: "/teacher/mypage" },
            { text: "5. 문의하기", link: "/teacher/inquiry" },
            { text: "자주 묻는 질문", link: "/teacher/faq" },
          ],
        },
      ],
      "/admin/": [
        {
          text: "관리자 설명서",
          items: [
            { text: "관리자 설명서 시작하기", link: "/admin/" },
            { text: "1. 관리자 접속과 화면 구성", link: "/admin/access" },
            { text: "2. 강사 승인 관리", link: "/admin/tutor-approval" },
            { text: "3. 프로그램 관리", link: "/admin/programs" },
            { text: "4. 수강 신청 관리와 강사 배정", link: "/admin/applies" },
            { text: "5. 강의 관리", link: "/admin/lectures" },
            { text: "6. 공지사항 · FAQ · 문의관리", link: "/admin/boards" },
            { text: "7. 회원 · 시스템 설정", link: "/admin/settings" },
          ],
        },
      ],
      "/reference/": [
        {
          text: "참고자료",
          items: [
            { text: "입력 규칙 한눈에 보기", link: "/reference/validation" },
            { text: "상태값 한눈에 보기", link: "/reference/statuses" },
            { text: "자동으로 나가는 메일", link: "/reference/emails" },
            { text: "전체 진행 흐름도", link: "/reference/flow" },
          ],
        },
      ],
      "/": [
        {
          text: "시작하기",
          items: [
            { text: "이 설명서에 대하여", link: "/start" },
            { text: "강사 설명서", link: "/tutor/" },
            { text: "선생님 설명서", link: "/teacher/" },
            { text: "관리자 설명서", link: "/admin/" },
          ],
        },
      ],
    },

    docFooter: { prev: "이전", next: "다음" },
    returnToTopLabel: "맨 위로",
    sidebarMenuLabel: "메뉴",
    darkModeSwitchLabel: "화면 모드",
    lightModeSwitchTitle: "밝은 화면으로",
    darkModeSwitchTitle: "어두운 화면으로",
    lastUpdatedText: "마지막 수정",

    search: {
      provider: "local",
      options: {
        translations: {
          button: { buttonText: "검색", buttonAriaLabel: "검색" },
          modal: {
            displayDetails: "상세 보기",
            resetButtonTitle: "검색어 지우기",
            backButtonTitle: "닫기",
            noResultsText: "검색 결과가 없습니다",
            footer: {
              selectText: "선택",
              navigateText: "이동",
              closeText: "닫기",
            },
          },
        },
      },
    },

    footer: {
      message: "인터에듀 사용 설명서",
      copyright: "© 인터에듀",
    },
  },
})
