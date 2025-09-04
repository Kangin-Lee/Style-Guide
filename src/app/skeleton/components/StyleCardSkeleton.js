
import CodeBlock from "@/app/components/CodeBlock";
import { Skeleton } from "@/components/ui/skeleton";

export function StyleCardSkeleton() {
  return (
    <div className="flex flex-col md:flex-row bg-white p-4 gap-8 rounded">
      {/* Preview 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Card Skeleton</h2>
        <div className="flex gap-4 flex-wrap items-end">
          {/* sm 사이즈용 Skeleton */}
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[130px] w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[220px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
            <p>sm Skeleton</p>
          </div>

          {/* md 사이즈용 Skeleton */}
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[150px] w-[300px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[300px]" />
              <Skeleton className="h-4 w-[250px]" />
            </div>
            <p>md Skeleton</p>
          </div>

          {/* lg 사이즈용 Skeleton */}
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[200px] w-[400px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[350px]" />
              <Skeleton className="h-4 w-[300px]" />
            </div>
            <p>lg Skeleton</p>
          </div>
        </div>
      </section>

      {/* CodeBlock 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Code</h2>
        <CodeBlock
          code={[
            '<div className="flex flex-col space-y-3">',
            '   <Skeleton className="h-[130px] w-[250px] rounded-xl" /> //크기에 맞게 조절해서 사용 권장',
            '   <div className="space-y-2">',
            '     <Skeleton className="h-4 w-[220px]" />',
            '     <Skeleton className="h-4 w-[200px]" />',
            '   </div>',
            '</div>',
          ].join("\n")}
        />
      </section>
    </div>
  );
}
