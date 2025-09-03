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