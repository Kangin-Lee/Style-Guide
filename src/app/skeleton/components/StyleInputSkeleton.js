// 📌 Input Skeleton 컴포넌트

import CodeBlock from "@/app/components/CodeBlock";
import { Skeleton } from "@/components/ui/skeleton";

export function StyleInputSkeleton() {
  return (
    <div className="flex flex-col md:flex-row bg-white p-4 gap-8 rounded">
      {/* Preview 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Input Skeleton</h2>
        <div className="flex gap-4 flex-wrap items-end">
          <div className="flex gap-6 flex-wrap">
            {/* sm 사이즈용 Skeleton */}
            <div className="flex flex-col space-y-3">
              <Skeleton className="h-9 w-72 rounded-md" />
              <p>sm Skeleton</p>
            </div>

            {/* md 사이즈용 Skeleton */}
            <div className="flex flex-col space-y-3">
              <Skeleton className="h-9 w-96 rounded-md" />

              <p>md Skeleton</p>
            </div>

            {/* lg 사이즈용 Skeleton */}
            <div className="flex flex-col space-y-3">
              <Skeleton className="h-9 w-[450px] rounded-md" />

              <p>lg Skeleton</p>
            </div>
          </div>
        </div>
      </section>

      {/* CodeBlock 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Code</h2>
        <CodeBlock
          code={[
            '<Skeleton className="h-9 w-72 rounded-md" />',
            '<Skeleton className="h-9 w-96 rounded-md" />',
            '<Skeleton className="h-9 w-[450px] rounded-md" />',
          ].join("\n")}
        />
      </section>
    </div>
  );
}
