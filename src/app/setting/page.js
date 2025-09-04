// 📌 Setting 페이지

import CodeBlock from "../components/CodeBlock";

// 페이지 메타데이터
export const metadata = {
  title: "Setting - IOPS UI Library",
  description: "IOPS Style Guide - Setting",
}

export default function TechStack() {
  return (
    <div className="space-y-12">
      <h1 className="text-2xl font-bold mb-6">Project Setting</h1>

      {/* Tech Stack */}
      <section className="bg-white p-4">
        <h2 className="text-lg font-semibold mb-4">Tech Stack</h2>
        <div className="flex gap-4 flex-wrap flex-col">
          <p>
            <b>Language:</b> JavaScript
          </p>
          <p>
            <b>Framework:</b> Next.js v15.3.2
          </p>
          <p>
            <b>Styling:</b> Tailwind CSS v4 + Shadcn UI
          </p>
          <p>
            <b>State Management:</b> Tanstack Query + Zustand v5.0.5
          </p>
          <p>
            <b>Form Validation:</b> Zod + React Hook Form + date-fns
          </p>
          <p>
            <b>Data Grid:</b> Tanstack Table
          </p>
          <p>
            <b>Editor:</b> Tiptap
          </p>
          <p>
            <b>Auth:</b> NextAuth.js
          </p>
          <p>
            <b>Chart:</b> Recharts
          </p>
          <p>
            <b>Calendar:</b> React Big Calendar
          </p>
          <p>
            <b>Icon:</b> Lucide React
          </p>
          <p>
            <b>Tolling:</b> ESLint + Prettier
          </p>
        </div>
      </section>

      {/* Development Environment */}
      <section className="bg-white p-4">
        <h2 className="text-lg font-semibold mb-4">Development Environment</h2>
        <div className="flex gap-4 flex-wrap flex-col">
          <p>
            <b>Node.js:</b> {">= 20.x (권장 22.x)"}
          </p>
          <p>
            <b>Next.js:</b> ^15.2.x
          </p>
          <p>
            <b>React:</b> React: ^19.x
          </p>
          <p>
            <b>npm:</b> npm: {">= 10.x"}{" "}
          </p>
          <p>
            <b>TailwindCSS:</b> ^4.1.8
          </p>
        </div>
      </section>

      {/* Naming Convention */}
      <section className="bg-white p-4">
        <h2 className="text-lg font-semibold mb-4">Naming Convention</h2>
        <div className="flex gap-4 flex-wrap flex-col">
          <p>
            <b>폴더:</b> 카멜 케이스 (menuDev, menuStatistics)
          </p>
          <p>
            <b>컴포넌트 파일:</b> 파스칼 케이스 (MyGrid.js, DetailPanel.js)
          </p>
          <p>
            <b>훅 파일:</b> use 접두사 + 카멜케이스 (useUserStore.js,
            useCsStatus.js)
          </p>
          <p>
            <b>API 파일:</b> 소문자 + 카멜케이스 (fetchApi.js)
          </p>
          <p>
            <b>Enum / Schema 파일:</b> 소문자 + 카멜케이스 (statusEnum.js,
            zodSchema.js)
          </p>
          <p>
            <b>Enum 객체명:</b> 대문자 + SNAKE_CASE (TAB_TYPES, STATUS_ENUM)
          </p>
          <p>
            <b>Provider:</b> 파스칼 케이스 (ReactQueryProvider.js,
            ThemeProvider.js)
          </p>
          <p>
            <b>CSS:</b> 모듈 CSS 시 .module.css 접미사 사용 (modal.module.css)
          </p>
        </div>
      </section>

      {/* Development execution */}
      <section className="bg-white p-4">
        <h2 className="text-lg font-semibold mb-4">Development Execution</h2>
        <div className="flex gap-4 flex-wrap flex-col w-sm">
          <CodeBlock code={`npm install`} />
          <CodeBlock code={`npm run dev`} />
        </div>
      </section>

            {/* Build & Release */}
      <section className="bg-white p-4">
        <h2 className="text-lg font-semibold mb-4">Build & Release</h2>
        <div className="flex gap-4 flex-wrap flex-col w-sm">
          <CodeBlock code={`npm run build`} />
          <CodeBlock code={`npm run start`} />
        </div>
      </section>
    </div>
  );
}
