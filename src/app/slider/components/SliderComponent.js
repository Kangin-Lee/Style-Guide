// 📌 Slider 컴포넌트
// shadcn UI의 Slider 컴포넌트를 사용한 예제
"use client";

import { Slider } from "@/components/ui/slider";
import { useState } from "react";

export function SliderComponent() {
  const [value, setValue] = useState([50]); // Slider의 값은 배열 형태로 관리
  return (
    <section className="md:w-1/2 w-full">
      <h2 className="text-lg font-semibold mb-4">Slider</h2>
      <div className="flex gap-4 flex-wrap">
        <Slider value={value} onValueChange={setValue} max={100} step={1} />
      </div>
      <p className="text-sm mt-2">
        {" "}
        현재 값: <span className="font-medium">{value[0]}%</span>
      </p>
    </section>
  );
}
