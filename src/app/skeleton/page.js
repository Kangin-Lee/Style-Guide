// 📌 Skeleton & Loading Spinner 컴포넌트

// 로딩에 사용될 스켈레톤
/*
    1. Card O
    2. Input O
    4. Table O
    등등...
*/

import CodeBlock from "../components/CodeBlock";
import { StyleCardSkeleton } from "./components/StyleCardSkeleton";
import { StyleInputSkeleton } from "./components/StyleInputSkeleton";
import { StyleLoadingSpinner } from "./components/StyleLoadingSpinner";
import { StyleTableSkeleton } from "./components/StyleTableSkeleton";

export const metadata = {
  title: "Skeleton & Loading Spinner",
  description: "Skeleton & Loading Spinner",
}

export default function StyleSkeleton() {
  return (
    <div className="space-y-12">
      <h1 className="text-2xl font-bold mb-6">
        Skeleton & Loading Spinner Examples
      </h1>
      <div className="w-96">
        <CodeBlock code={"<Skeleton className='h-4 w-[220px]' />"} />
      </div>

      {/* Card Skeleton */}
      <StyleCardSkeleton />

      {/* Input Skeleton */}

      <StyleInputSkeleton />

      {/* Table Skeleton */}
      <StyleTableSkeleton />

      {/* Loading Spinner */}
      <StyleLoadingSpinner />
    </div>
  );
}
