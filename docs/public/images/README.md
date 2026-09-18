# 화면 캡처 넣는 곳

문서에 들어갈 스크린샷을 역할별 폴더에 저장합니다.

```
images/
  tutor/    강사 화면
  teacher/  선생님 화면
  admin/    관리자 화면
  common/   공통 · 흐름도
```

## 이름 규칙

`{역할}-{두자리번호}-{내용}.png`

예) `tutor-01-dashboard.png`, `teacher-06-apply-form.png`, `admin-09-assign-tutor.png`

## 문서에 넣는 방법

문서 안의 아래 블록을 찾습니다.

```md
::: info 이미지 자리 · `tutor/tutor-01-dashboard.png`
로그인 직후 대시보드 화면 전체
:::
```

블록 전체를 지우고 아래 한 줄로 바꿉니다.

```md
![로그인 직후 대시보드](/images/tutor/tutor-01-dashboard.png)
```

경로에서 `docs/public` 은 빼고 `/images/...` 부터 적습니다.

## 필요한 이미지 목록

| 파일 | 어떤 화면 | 들어가는 문서 |
| --- | --- | --- |
| `tutor/tutor-01-dashboard.png` | 로그인 직후 대시보드 (왼쪽 메뉴 포함) | 강사 설명서 시작하기 |
| `tutor/tutor-02-signin.png` | 강사 로그인 화면 | 관리시스템 접속하기 |
| `tutor/tutor-03-signup-steps.png` | 회원가입 3단계 표시 | 강사 회원가입 |
| `tutor/tutor-04-signup-basic.png` | 2단계 기본 정보 입력 | 강사 회원가입 |
| `tutor/tutor-05-signup-tutor-info.png` | 3단계 강사 정보 (학력·경력) | 강사 회원가입 |
| `tutor/tutor-06-profile.png` | 강사 정보 화면 (수정 요청 내역 포함) | 강사 정보 수정 |
| `tutor/tutor-07-schedule-calendar.png` | 대시보드 월별 일정 달력 | 강의 관리 |
| `tutor/tutor-08-lecture-detail.png` | 강의 상세 위쪽 (신청자·신청 정보) | 강의 관리 |
| `tutor/tutor-09-materials.png` | 강사 준비물 영역 | 강의 관리 |
| `tutor/tutor-10-activity-input.png` | 활동 내역 입력 영역 | 강의 후 정리 |
| `tutor/tutor-11-account.png` | 계정 정보 화면 | 계정 정보 · 비밀번호 |
| `teacher/teacher-01-home.png` | 홈페이지 첫 화면 | 선생님 설명서 시작하기 |
| `teacher/teacher-02-signup.png` | 회원가입 입력 화면 | 홈페이지 접속과 회원가입 |
| `teacher/teacher-03-program-list.png` | 프로그램 목록 + 필터 | 수업 찾기 |
| `teacher/teacher-04-program-detail.png` | 프로그램 상세 (신청 버튼 포함) | 수업 찾기 |
| `teacher/teacher-05-cart.png` | 수강바구니 | 수업 찾기 |
| `teacher/teacher-06-apply-form.png` | 수강 신청서 전체 | 수강 신청하기 |
| `teacher/teacher-07-apply-confirm.png` | 신청 확인 창 | 수강 신청하기 |
| `teacher/teacher-08-mypage.png` | 마이페이지 신청 내역 목록 | 마이페이지에서 관리하기 |
| `teacher/teacher-09-apply-detail-tabs.png` | 신청 상세 (탭 4개 + 접수 상태) | 마이페이지에서 관리하기 |
| `teacher/teacher-10-chat.png` | 1:1 대화 탭 | 마이페이지에서 관리하기 |
| `teacher/teacher-11-documents.png` | 결제 정보 탭 문서함 | 마이페이지에서 관리하기 |
| `teacher/teacher-12-tutor-info.png` | 강의 정보 탭 강사 카드 | 마이페이지에서 관리하기 |
| `teacher/teacher-13-results.png` | 학급별 강의 내역 (사진·보고서) | 마이페이지에서 관리하기 |
| `teacher/teacher-14-inquiry-write.png` | 문의 작성 화면 | 문의하기 |
| `admin/admin-01-signin.png` | 관리자 로그인 | 관리자 접속과 화면 구성 |
| `admin/admin-02-layout.png` | 관리자 첫 화면 (메뉴 전체) | 관리자 접속과 화면 구성 |
| `admin/admin-03-tutor-requests.png` | 강사신청 관리 목록 | 강사 승인 관리 |
| `admin/admin-04-tutor-request-detail.png` | 강사신청 상세 | 강사 승인 관리 |
| `admin/admin-05-programs.png` | 프로그램 관리 목록 | 프로그램 관리 |
| `admin/admin-06-program-form.png` | 프로그램 등록 화면 | 프로그램 관리 |
| `admin/admin-07-applies.png` | 수강 신청 관리 목록 | 수강 신청 관리 |
| `admin/admin-08-apply-detail.png` | 신청 상세 전체 | 수강 신청 관리 |
| `admin/admin-09-assign-tutor.png` | 강사 배정 + 강사 선택 창 | 수강 신청 관리 |
| `admin/admin-10-estimate.png` | 견적서 작성 창 | 수강 신청 관리 |
| `admin/admin-11-lectures.png` | 강의 관리 목록 | 강의 관리 |
| `admin/admin-12-lecture-detail.png` | 강의 상세 (활동 내역) | 강의 관리 |
| `admin/admin-13-notice.png` | 공지사항 작성 | 공지사항 · FAQ · 문의관리 |
| `admin/admin-14-faq.png` | FAQ 작성 | 공지사항 · FAQ · 문의관리 |
| `admin/admin-15-inquiry-answer.png` | 문의 답변 화면 | 공지사항 · FAQ · 문의관리 |
| `common/common-01-flow.png` | (선택) 전체 흐름 도식 | 전체 진행 흐름도 |
