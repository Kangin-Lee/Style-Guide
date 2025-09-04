// 📌 State/Interaction Icon 컴포넌트

import CodeBlock from "@/app/components/CodeBlock";
import {
  Check,
  CheckCircle,
  AlertTriangle,
  AlertCircle,
  Info,
  HelpCircle,
  XCircle,
  Ban,
  Star,
  Heart,
} from "lucide-react";

export function StateInteractionIcons() {
  return (
    <div>
      <div className="flex flex-col md:flex-row bg-white p-4 gap-8">
        {/* Preview 영역 */}
        <section className="md:w-1/2 w-full">
          <h2 className="text-lg font-semibold mb-4">StateInteraction Icon</h2>
          <div className="flex gap-4 flex-col flex-wrap">
            <div className="flex gap-4">
              <Check />
              <CheckCircle />
              <AlertTriangle />
              <AlertCircle />
              <Info />
            </div>
            <div className="flex gap-4">
              <HelpCircle />
              <XCircle />
              <Ban />
              <Star />
              <Heart />
            </div>
          </div>
        </section>

        {/* CodeBlock 영역 */}
        <section className="md:w-1/2 w-full">
          <h2 className="text-lg font-semibold mb-4">Code</h2>
          <CodeBlock
            code={[
              "<Check />  <CheckCircle />  <AlertTriangle />  <AlertCircle />  <Info />",
              "<HelpCircle />  <XCircle />  <Ban />  <Star />  <Heart /> ",
            ].join("\n")}
          />
        </section>
      </div>
    </div>
  );
}
