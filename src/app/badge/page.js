
import CodeBlock from "../components/CodeBlock";
import BadgeComponent from "./components/BadgeComponent";

export default function StyleBadge() {
  return (
    <div className="space-y-12">
      <h1 className="text-2xl font-bold mb-6">Badge Examples</h1>
      <div className="w-96">
        <CodeBlock code={`<Badge variant="default">primary</Badge>`} />
      </div>

      <div className="flex flex-col md:flex-row bg-white p-4 gap-8 rounded">
        {/* Preview 영역 */}
        <section className="md:w-1/2 w-full">
          <h2 className="text-lg font-semibold mb-4">Color Badge</h2>
          <div className="flex gap-4 flex-wrap">
            <BadgeComponent variant="default" text="primary" />
            <BadgeComponent variant="secondary" text="secondary" />
            <BadgeComponent variant="success" text="success" />
            <BadgeComponent variant="warning" text="warning" />
            <BadgeComponent variant="info" text="info" />
            <BadgeComponent variant="yellow" text="yellow" />
            <BadgeComponent variant="disable" text="disable" />
          </div>
        </section>

        {/* CodeBlock 영역 */}
        <section className="md:w-1/2 w-full">
          <h2 className="text-lg font-semibold mb-4">Code</h2>
          <CodeBlock
            code={[
              '<Badge variant="default">primary</Badge>',
              '<Badge variant="secondary">secondary</Badge>',
              '<Badge variant="success">success</Badge>',
              '<Badge variant="warning">warning</Badge>',
              '<Badge variant="info">info</Badge>',
              '<Badge variant="yellow">yellow</Badge>',
              '<Badge variant="disable">disable</Badge>',
            ].join("\n")}
          />
        </section>
      </div>
    </div>
  );
}
