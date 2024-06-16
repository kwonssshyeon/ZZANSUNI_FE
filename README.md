## 핵심 라이브러리

### React

- react: 사용자 인터페이스를 구축하기 위한 JavaScript 라이브러리.
- react-dom: React의 DOM 관련 메서드를 제공.

### 스타일링

- CSS-in-JS 라이브러리: @emotion/react 및 @emotion/styled: JavaScript로 CSS
  스타일을 작성하기 위한 CSS-in-JS 접근 방식을 제공하는 라이브러리.
- styled-components: 실제 CSS를 사용하여 React 컴포넌트를 스타일링할 수 있는 또
  다른 인기 있는 CSS-in-JS 라이브러리.

### UI 컴포넌트

Ant Design: antd: 고품질의 컴포넌트를 제공하는 인기 있는 React UI 프레임워크.

### 애니메이션 및 상호작용

- 애니메이션 및 모션: framer-motion: React 애플리케이션에서 애니메이션을
  생성하기 위한 라이브러리. react-intersection-observer: 요소의 가시성 변화를
  관리하기 위한 Intersection Observer API의 React 구현체.

### 모달 관리

- 모달 관리: react-modal: React에서 접근 가능한 모달 다이얼로그를 생성하기 위한
  라이브러리.

### 라우팅

- 라우팅: react-router-dom: React 애플리케이션에서 경로 및 내비게이션을 관리하기
  위한 라이브러리.

### 상태 관리

- 상태 관리: zustand: 작고 빠르고 확장 가능한 React 상태 관리 라이브러리.

### HTTP 클라이언트

- HTTP 클라이언트:
- axios: 서버로 요청을 보내기 위한 promise 기반의 HTTP 클라이언트.

### 개발 도구

- 개발 도구: vite: 차세대 프론트엔드 빌드 도구. eslint: JavaScript 코드의 패턴을
  식별하고 보고하는 도구로, 코드 품질을 보장. prettier: 의견이 반영된 코드
  포매터. @vitejs/plugin-react: React와 Vite를 통합하기 위한 Vite 플러그인.

### 린팅 및 포맷팅

- ESLint 플러그인:

eslint-config-airbnb: JavaScript, React, JSX 규칙을 포함한 Airbnb의 ESLint 구성.
eslint-config-prettier: Prettier와 충돌할 수 있는 규칙을 비활성화.
eslint-plugin-import: ES6+ import/export 구문을 린트하고, 파일 경로 및 import
이름의 철자 오류를 방지. eslint-plugin-jsx-a11y: JSX 요소의 접근성 규칙을 위한
정적 AST 검사기. eslint-plugin-prettier: Prettier를 ESLint 규칙으로 실행.
eslint-plugin-react: React 전용 ESLint 규칙. eslint-plugin-react-hooks: Hooks의
규칙을 강제하여 일반적인 실수를 방지. eslint-plugin-react-refresh: 개발 중에
React Refresh와 관련된 규칙을 강제. TypeScript 정의:

@types/react: React의 TypeScript 정의. @types/react-dom: React DOM의 TypeScript
정의.

### 유틸리티 라이브러리

- 유틸리티 라이브러리: inflight: 진행 중인 요청을 관리하기 위한 라이브러리.
  react-icons: React 프로젝트에서 인기 있는 아이콘을 포함하기 위한 라이브러리.
  swiper: 하드웨어 가속 전환을 사용하는 현대적인 모바일 터치 슬라이더.

### Prettier 플러그인

- Prettier 플러그인: @trivago/prettier-plugin-sort-imports: import를 정렬하기
  위한 Prettier 플러그인. 이 스택은 빌드 도구, 린터, 포매터, 상태 관리
  라이브러리, UI 컴포넌트 등을 포함하여 효율적인 개발을 위한 다양한 도구를
  제공하며, 잘 구성된 강력한 개발 환경을 보장합니다.
=======
# 짠수니

## 데모

## 참여

## 기획

### 동기

- 팀원 4명의 공통 관심사를 취합하였다. 그결과 `짠수니`라는 서비스를 기획하게 되었다.
- 사회에 긍정적인 영향 미치기 위해 노력하는 사람들을 위한 서비스를 만들고 싶었다.
- 사용자에게 재미를 주면서도, 사회에 긍정적인 영향을 미치는 서비스를 만들고 싶었다.

## 기능

### 1️⃣ 진행상황

사용자는 챌린지의 진행상황을 볼수있다.

- 주마다 4일참여해야하는 챌린지라면, 월,화,수의 기록을 볼수있어야한다.

### 2️⃣ 랭킹

1. 진행중인 각 챌린지 별, 유저가 얻은 경험치로 정렬해서 보여주기(상위 N명과, 사용자)
2. 참여중인 사용자수를 확인할 수 있다.
3. 전체 경험치 랭킹 보여주기(상위 N명과, 사용자)

### 3️⃣ 챌린지 게시

1. 관리자가 챌린지를 게시할 수 있다.
2. 챌린지에는 주제, 제목, 내용, 기간(정기적(ex매주3일)/일회성(ex달성하기)), 보상을 입력받는다.
    - 챌린지 운영기간을 명시해야한다.
3. 난이도란 챌린지의 세부적인 목표를 분류한것이다. 상중하로 분류된다. 난이도에 해당하는 목표를 작성할 수 있다.
    - (주 n일) / n개 달성

### 4️⃣ 챌린지 참여

1. 숏폼으로 챌린지를 랜덤으로 제공하여 사용자에게 보여준다. 사용자는 챌린지를 선택하여 참여할 수 있다.
2. 챌린지 참여 인증에는 사진과 설명으로 인증한다. (사진은 챌린지의 성격에 따라 다르다)

### 5️⃣ 챌린지 종료

1. 종료기간이 되거나 완료한 챌린지는 종료된다.
2. 챌린지를 완수한 사용자는 추가 보상을 받는다.

### 주제

> 주제는 에코, 봉사, 선행, 나눔, 건강 총 5가지로 분류하여 나타낸다.

### 1️⃣ 에코

환경에 관련된 챌린지를 나타낸다.

- 예를 들어 전기 절약 → 얼마나 절약되었는지/ 몇리터를 아꼈습니다.
- 매연의 감소와 같은 절약

### 2️⃣ 선행

선행에 관련된 챌린지를 나타낸다.

- 예를 들어 쓰레기 줍기, 앞사람에게 인사하기 등등

### 3️⃣ 나눔

나눔에 관련된 챌린지를 나타낸다.

- 예를 들어 나무젓가락 나눔

### 4️⃣ 건강

건강에 관련된 챌린지를 나타낸다.

- 예를 들어 걷기

### 5️⃣ 레벨 시스템

### 01. 스트릭

- 유저의 날짜별 활동을 기록한다. 이 기록에는 챌린지 참가기록, 연속참가일자로 구성된다.
  멋있는 UI로 표현된다.
- 달마다의 스트릭정보를 볼수있다.(페이징)

### 02. 티어

- 티어는 노비-상민-평민-양반-진골-성골-에코로 구성된다
- 티어별 경험치표가 존재한다.
    - 티어별 4단계로 구성된다.
- 티어 순서는 4,3,2,1 순으로 올라간다.

### 6️⃣ 게시글

### 챌린지

리뷰 및 피드백

1. 챌린지의 만족도와 후기를 작성할 수 있다.
2. 만족도는 1,2,3,4,5점으로 줄 수 있다.
3. 만족도는 챌린지의 기록정보에 저장된다. (만족도가 낮은 챌린지는 관리자가 확인하고 제외할 수 있다)
4. 최근 챌린지만족도를 메인화면에서 조회할 수 있다, 챌린지상세페이지에서 리뷰를 조회할 수 있다.

## 나중에 넣을 기능 (V2)

### 1. 문의 게시글

### 2. 챌린지 빙고 넣기

### 3. 엘라스틱 서치로 사용자 기록을 보고 추천서비스

### 4. 기록을 바탕으로 일기를 만들어주고 짠돌이가 칭찬해줘요

### 5. 퀴즈

### 6. 챌린지 신설 요청

- 유저들의 챌린지 요청 게시글을 볼 수 있다.
- 추천기능이 존재하여, 사용자들의 수요를 볼 수 있다.

## 기술 스택
## 핵심 라이브러리
### React
- react: 사용자 인터페이스를 구축하기 위한 JavaScript 라이브러리.
- react-dom: React의 DOM 관련 메서드를 제공.
### 스타일링
- CSS-in-JS 라이브러리:
@emotion/react 및 @emotion/styled: JavaScript로 CSS 스타일을 작성하기 위한 CSS-in-JS 접근 방식을 제공하는 라이브러리.
- styled-components: 실제 CSS를 사용하여 React 컴포넌트를 스타일링할 수 있는 또 다른 인기 있는 CSS-in-JS 라이브러리.
### UI 컴포넌트
Ant Design:
antd: 고품질의 컴포넌트를 제공하는 인기 있는 React UI 프레임워크.
### 애니메이션 및 상호작용
- 애니메이션 및 모션:
framer-motion: React 애플리케이션에서 애니메이션을 생성하기 위한 라이브러리.
react-intersection-observer: 요소의 가시성 변화를 관리하기 위한 Intersection Observer API의 React 구현체.
### 모달 관리
- 모달 관리:
react-modal: React에서 접근 가능한 모달 다이얼로그를 생성하기 위한 라이브러리.
### 라우팅
- 라우팅:
react-router-dom: React 애플리케이션에서 경로 및 내비게이션을 관리하기 위한 라이브러리.
### 상태 관리
- 상태 관리:
zustand: 작고 빠르고 확장 가능한 React 상태 관리 라이브러리.
### HTTP 클라이언트
- HTTP 클라이언트:
- axios: 서버로 요청을 보내기 위한 promise 기반의 HTTP 클라이언트.
### 개발 도구
- 개발 도구:
vite: 차세대 프론트엔드 빌드 도구.
eslint: JavaScript 코드의 패턴을 식별하고 보고하는 도구로, 코드 품질을 보장.
prettier: 의견이 반영된 코드 포매터.
@vitejs/plugin-react: React와 Vite를 통합하기 위한 Vite 플러그인.
### 린팅 및 포맷팅
- ESLint 플러그인:

eslint-config-airbnb: JavaScript, React, JSX 규칙을 포함한 Airbnb의 ESLint 구성.
eslint-config-prettier: Prettier와 충돌할 수 있는 규칙을 비활성화.
eslint-plugin-import: ES6+ import/export 구문을 린트하고, 파일 경로 및 import 이름의 철자 오류를 방지.
eslint-plugin-jsx-a11y: JSX 요소의 접근성 규칙을 위한 정적 AST 검사기.
eslint-plugin-prettier: Prettier를 ESLint 규칙으로 실행.
eslint-plugin-react: React 전용 ESLint 규칙.
eslint-plugin-react-hooks: Hooks의 규칙을 강제하여 일반적인 실수를 방지.
eslint-plugin-react-refresh: 개발 중에 React Refresh와 관련된 규칙을 강제.
TypeScript 정의:

@types/react: React의 TypeScript 정의.
@types/react-dom: React DOM의 TypeScript 정의.
### 유틸리티 라이브러리
- 유틸리티 라이브러리:
inflight: 진행 중인 요청을 관리하기 위한 라이브러리.
react-icons: React 프로젝트에서 인기 있는 아이콘을 포함하기 위한 라이브러리.
swiper: 하드웨어 가속 전환을 사용하는 현대적인 모바일 터치 슬라이더.
### Prettier 플러그인
- Prettier 플러그인:
@trivago/prettier-plugin-sort-imports: import를 정렬하기 위한 Prettier 플러그인.
이 스택은 빌드 도구, 린터, 포매터, 상태 관리 라이브러리, UI 컴포넌트 등을 포함하여 효율적인 개발을 위한 다양한 도구를 제공하며, 잘 구성된 강력한 개발 환경을 보장합니다.

## 사용자 플로우

## Router
## Router 설정

이 프로젝트는 `react-router-dom`의 `createBrowserRouter`를 사용하여 라우팅을 설정합니다. 라우터 설정은 다음과 같습니다:

### 기본 경로 ('/'):
- `NavigateBar` 컴포넌트를 래핑하고 있으며, 이는 모든 하위 경로에서 네비게이션 바를 포함하게 합니다.
- `Outlet`은 하위 경로에서 렌더링될 컴포넌트를 표시합니다.

### 하위 경로:

#### 메인 페이지:
- 경로: `/`
- 컴포넌트: `MainPage`

#### 챌린지 관련 경로:
- 경로: `/challenge`
- 컴포넌트: `MyChallenge`
  - 하위 경로:
    - 챌린지 목록:
      - 경로: `/challenge/list`
      - 컴포넌트: `ChallengeList`
    - 기록된 챌린지 목록:
      - 경로: `/challenge/record-list`
      - 컴포넌트: `ListRecordChallenge`

#### 쇼츠 챌린지:
- 경로: `/shorts`
- 컴포넌트: `ShortsChallenge`

#### 랭킹 페이지:
- 경로: `/rank`
- 컴포넌트: `RankPage`

#### 대시보드:
- 경로: `/dashboard`
- 컴포넌트: `Dashboard`

#### 챌린지 상세 페이지:
- 경로: `/challenge-detail`
- 컴포넌트: `ChallengeDetailPage`

#### 챌린지 기록 페이지:
- 경로: `/challenge-record`
- 컴포넌트: `ChallengeRecordPage`

#### 리뷰 작성 페이지:
- 경로: `/writing-reivew`
- 컴포넌트: `WritingReview`

#### 리뷰 목록 페이지:
- 경로: `/reivew-list`
- 컴포넌트: `ReviewList`

### 로그인 관련 경로:

#### 로그인 페이지:
- 경로: `/login`
- 컴포넌트: `LoginPage`

#### 카카오 리디렉트 페이지:
- 경로: `/login/kakao`
- 컴포넌트: `RedirectPage`
