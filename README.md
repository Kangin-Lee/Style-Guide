# 🎨 IOPS Web Style Guide
이 프로젝트는 브랜드 UI/UX 일관성을 유지하기 위해 만든 웹 스타일 가이드이다.  
Next.js 기반으로 구축되었으며, 디자이너와 개발자가 공통으로 참고할 수 있는 UI 컴포넌트와 스타일 규칙을 제공한다.  

# ✨ 기술 스택
언어 - JS
프레임워크 - NEXT.JS (v15.3.2)
CSS 라이브러리 - TailwindCSS (v4)
컴포넌트 라이브러리 - Shadcn UI
비동기 상태관리 라이브러리 - Tanstack Query(=React Query)
상태관리 라이브러리 - Zustand (v5.0.5)
차트 라이브러리 - Recharts
폼 관리 - React Hook Form + Zod
그리드 - Tanstack Table(=React Table)
에디터 - Tiptap (커스텀해야됨), CKEditor는 Next와 조합이 좋지 않음.
툴링 - ESLint, Prettier

# 📖 프로젝트 구조
해당 프로젝트의 폴더 구조는 다음과 같습니다:
```
📁 프로젝트 루트/
├── 📁 src/                          # 소스 코드 디렉토리
│   ├── 📁 app/                      # Next.js App Router
│   │   ├── layout.js                # 루트 레이아웃
│   │   ├── globals.css              # 글로벌 CSS
│   │   ├── page.js                  # 홈페이지
│   │   ├── 📁 components/           # 공통 컴포넌트
│   │   │   ├── StyleGuide.js        # 스타일가이드 메인
│   │   │   ├── ComponentBox.js      # 컴포넌트 박스
│   │   │   ├── CodeBlock.js         # 코드 블록
│   │   │   ├── 📁 StyleGuideLayout/ # 레이아웃 컴포넌트
│   │   │   │   ├── StyleGuideLayout.js
│   │   │   │   ├── SidebarHeader.js
│   │   │   │   ├── StyleGuideSidebar.js
│   │   │   │   ├── StyleGuideFooter.js
│   │   │   │   └── 📁 data/         # 사이드바 메뉴 데이터
│   │   │   │       ├── items.js
│   │   │   │       ├── control.js
│   │   │   │       ├── formInput.js
│   │   │   │       └── formSelect.js
│   │   │   └── 📁 TanstakQuery/     # React Query 설정
│   │   │       └── ReactQueryProvider.js
│   │   ├── 📁 (control)/            # 컨트롤 컴포넌트 그룹
│   │   │   └── 📁 selectbox/
│   │   │       └── 📁 components/
│   │   │           └── MultiSelectField.js
│   │   ├── 📁 (form)/               # 폼 컴포넌트 그룹
│   │   │   ├── 📁 input/
│   │   │   └── 📁 editor/
│   │   ├── 📁 [페이지명]/           # 각 컴포넌트 페이지들
│   │   │   ├── page.js              # 페이지 컴포넌트
│   │   │   └── 📁 components/       # 해당 페이지 전용 컴포넌트들
│   │   │       └── [컴포넌트명].js
│   │   │
│   │   └── 📁 페이지 목록:          # 위 구조를 따르는 페이지들
│   │       ├── text/, button/, badge/, table/, tabs/
│   │       ├── accordion/, card/, breadcrumb/, calendar/
│   │       ├── datepicker/, feedback/, checkbox/, radiogroup/
│   │       ├── toggle/, chart/, icon/, skeleton/, sidebar/
│   │       ├── slider/, pagination/, grid/, fileupload/
│   │       └── setting/
│   │
│   ├── 📁 components/               # Shadcn UI 컴포넌트
│   │   └── 📁 ui/                   # UI 컴포넌트들
│   │       ├── sidebar.jsx, input.jsx, calendar.jsx
│   │       └── ... (기타 UI 컴포넌트들)
│   ├── 📁 style/                    # 스타일 파일들
│   │   └── globals.css
│   ├── 📁 lib/                      # 유틸리티 함수들
│   │   └── utils.js
│   ├── 📁 hooks/                    # 커스텀 훅들
│   └── 📁 mock/                     # Mock 데이터
│       └── user.json
├── 📁 public/                       # 정적 파일들
├── package.json, next.config.mjs, tailwind.config.js
├── postcss.config.mjs, jsconfig.json, components.json
└── eslint.config.mjs, .gitignore, README.md
```

# ⚙ 개발 환경
Node.js: >= 20.x (권장 22.x)
Next.js: ^15.2.x
React: ^19.x
npm: >= 10.x
TailwindCSS: ^3.4.x

# ⚙️ 개발 실행
npm install
npm run dev

# 📦 빌드 & 배포
npm run build
npm run start

# 🟣 추천 VSCode 플러그인
Tailwind CSS IntelliSense
ESLint
Prettier
GitLens
React Developer Tools