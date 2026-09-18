# 인터에듀 사용 설명서 (interedu-manual)

인터에듀 서비스의 사용 설명서입니다. [VitePress](https://vitepress.dev) 로 만들어졌습니다.

## 실행

```bash
npm install
npm run dev     # 개발 서버 (http://localhost:5173)
npm run build   # 정적 사이트 빌드 (docs/.vitepress/dist)
npm run preview # 빌드 결과 미리보기
```

## 문서 구성

| 폴더 | 내용 |
| --- | --- |
| `docs/tutor/` | 강사·단체용 설명서 |
| `docs/teacher/` | 선생님(수업 신청자)용 설명서 |
| `docs/admin/` | 관리자용 설명서 |
| `docs/reference/` | 상태값 용어집, 자동 발송 메일, 전체 진행 흐름도 |

## 디자인

`docs/.vitepress/theme/custom.css` 에서 설정합니다.

| 항목 | 값 |
| --- | --- |
| 포인트(브랜드) 색 | 검정 `#000000` — 다크 모드에서는 흰색 `#ffffff` |
| 본문 폰트 | Wanted Sans (jsDelivr CDN, `docs/.vitepress/config.mts` 의 `head` 에서 로드) |
| 자간 | `-0.02em` (서비스 화면과 동일) |

포인트 색은 `--vp-c-brand-1~3` 값만 바꾸면 링크, 사이드바 활성 항목, 버튼, 안내 상자에 한 번에 반영됩니다.

폰트 CDN 주소는 다음과 같습니다.

```
https://cdn.jsdelivr.net/gh/wanteddev/wanted-sans@v1.0.3/packages/wanted-sans/fonts/webfonts/variable/complete/WantedSansVariable.min.css
```

## 전체 진행 흐름도

`docs/reference/flow.md` 의 "한 장 요약" 은 인라인 SVG 도식입니다.
이 도식만 예외적으로 색을 사용해 역할을 구분합니다 (선생님 · 관리자 · 강사 · 시스템 자동 처리).
색상 값은 `custom.css` 의 `.flow` 블록에서 관리하며, 라이트와 다크 모드 값이 각각 정의되어 있습니다.

## 화면 캡처(이미지) 넣는 방법

문서 안에 아래와 같은 **이미지 자리** 표시가 들어가 있습니다.

```md
::: info 이미지 자리 · `tutor/tutor-01-dashboard.png`
로그인 직후 대시보드 화면 전체
:::
```

1. 안내된 이름 그대로 스크린샷을 저장합니다.
   예) `docs/public/images/tutor/tutor-01-dashboard.png`
2. 위 `::: info ... :::` 블록을 지우고 아래 한 줄로 바꿉니다.

```md
![로그인 직후 대시보드](/images/tutor/tutor-01-dashboard.png)
```

경로는 `docs/public` 을 뺀 `/images/...` 로 적습니다.

### 이미지 이름 규칙

`{역할}-{두자리번호}-{내용}.png`

- 역할 : `tutor`(강사) / `teacher`(선생님) / `admin`(관리자) / `common`(공통)
- 번호 : 문서에 나오는 순서대로 01, 02, 03 …
- 내용 : 영문 소문자와 `-` 만 사용 (예: `apply-form`, `assign-tutor`)

필요한 이미지 41장의 전체 목록은 [docs/public/images/README.md](docs/public/images/README.md) 에 있습니다.

## 문서 작성 규칙

- 서술은 `~합니다`, 요청은 `~해 주세요` 로 통일합니다.
- 화면에 실제로 보이는 버튼·메뉴 이름은 **굵게** 표기합니다.
- 제목에 `—` 나 `:` 같은 기호를 넣지 않습니다. VitePress 가 한글 제목 id 를 자모 분해(NFD) 형태로 만들기 때문에,
  다른 문서에서 특정 절로 링크할 때는 제목 뒤에 `{#english-anchor}` 로 명시적 앵커를 달고 그 앵커로 링크합니다.
