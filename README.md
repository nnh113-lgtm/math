# 모아 — 수합 워크스페이스

클레이모피즘 스타일의 반응형 웹앱 기본 구조입니다. 별도 빌드나 패키지 설치 없이 Vercel에서 제공할 수 있는 HTML/CSS/ES modules로 구성했습니다.

## 현재 제공하는 화면

- 홈: 기능 바로가기, 초기 현황, 최근 작업 빈 상태
- 수합 공간: 추후 수합 기능을 연결할 준비 화면
- 시뮬레이션: 추후 시뮬레이션을 연결할 준비 화면
- 이용 가이드

현재 로그인, 서버, 데이터베이스, 수합 생성 및 시뮬레이션 실행은 구현하지 않았습니다. 홈의 0은 초기 상태 표시이며 실시간 데이터가 아닙니다.

## Vercel 배포

1. 이 `moa` 폴더 내용을 Git 저장소에 올리고 Vercel에서 Import합니다.
2. Framework Preset은 **Other**로 선택합니다.
3. Root Directory는 `index.html`이 있는 디렉터리로 설정합니다.
4. Build Command와 Install Command는 비워 두고, Output Directory는 `.`으로 설정합니다.
5. Deploy를 실행합니다.

URL 해시 라우팅(`# /`의 공백 없이 사용)으로 정적 호스팅에서도 새로고침과 직접 접근을 지원합니다. 파일을 직접 더블클릭하면 브라우저의 ES module 보안 정책에 의해 동작하지 않을 수 있습니다. 로컬 HTTP 서버를 이용하세요(예: Node 설치 후 `npx serve .`).

## 확장 지점

```text
index.html       문서와 메타데이터
src/app.js       공통 레이아웃, 화면 렌더링, 해시 라우터
src/modules.js   메뉴 및 기능 목록
src/icons.js     공통 SVG 아이콘
src/styles.css   디자인 토큰, 클레이 표면, 반응형 스타일
favicon.svg     사이트 아이콘
vercel.json     정적 호스팅 설정
```

새 기능을 추가할 때 `modules.js`에 등록하고, `app.js`의 feature 렌더링을 실제 기능 모듈로 교체하세요. 데이터 연결 시 초기 현황과 최근 작업도 API 응답으로 교체하세요. 민감한 키는 브라우저 코드에 넣지 말고 Vercel 서버 함수와 환경 변수로 관리하세요.

한국어 글꼴은 Google Fonts의 Noto Sans KR을 사용하며, 연결되지 않으면 시스템 sans-serif로 표시합니다.
