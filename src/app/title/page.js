import CodeBlock from "../components/CodeBlock";
import Title from "./components/Title";


export default function TitlePage() {
  return (
    <div className="space-y-12">
      <h1 className="text-2xl font-bold mb-6">Title Examples</h1>
      <div className="w-96">
        <CodeBlock code={`<Title/>`} />
      </div>

      <div className="flex flex-col md:flex-row bg-white p-4 gap-8 rounded">
        {/* Preview 영역 */}
        <section className="md:w-1/2 w-full">
          <h2 className="text-lg font-semibold mb-4">Title</h2>
          <div className="flex gap-4 flex-wrap">
            <Title
              title="타이틀"
              description={
                <>
                  페이지나 섹션의 주제나 목적을 명확히 전달하는 텍스트 요소로,
                  계층적 구조에 따라 크기(H1~H4 등), 두께, 간격을 일관되게
                  설정해야 합니다.
                  <br />
                  페이지의 첫 인상으로 기능하므로 시각적 위계를 명확히
                  표현합니다.
                </>
              }
            />
          </div>
        </section>

        {/* CodeBlock 영역 */}
        <section className="md:w-1/2 w-full">
          <h2 className="text-lg font-semibold mb-4">Code</h2>
          <CodeBlock
            code={[
              '<h1 className="text-4xl font-bold">타이틀</h1>',
              '<p className="py-4">',
              "     페이지나 섹션의 주제나 목적을 명확히 전달하는 텍스트 요소로, 계층적구조에 따라 크기(H1~H4 등), 두께, 간격을 일관되게 설정해야 합니다.",
              "     페이지의 첫 인상으로 기능하므로 시각적 위계를 명확히 표현합니다.",
              "</p>",
            ].join("\n")}
          />
        </section>
      </div>
    </div>
  );
}
