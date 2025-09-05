// 📌 StyleGuide 컴포넌트
// 스타일 가이드 메인 페이지, 컴포넌트 검색 기능 포함

'use client';

import { Input } from "@/components/ui/input";
import ComponentBox from "./ComponentBox";
import { useState } from "react";
import { items } from "./data/styleGuideItems";

export default function StyleGuide() {
      const [searchText, setSearchText] = useState("");

  const filteredItems = items.filter((item) =>
    (item.title + item.description)
      .toLowerCase()
      .includes(searchText.toLowerCase())
  );

  return (
    <div className="">
      <div>
        <h1 className="lg:text-5xl font-black text-4xl">COMPONENTS</h1>
        <p className="text-[var(--color-font-gray)] lg:w-2xl my-5 xs:text-sm lg:text-base">
          컴포넌트는 각 기능을 구성하는 요소들의 조합입니다. 컴포넌트 스타일
          가이드라인은 관련 부서 간의 원활한 소통을 위해 컴포넌트의 명칭을
          통일하고 구조, 용도, 종류, 패턴을 정의하는 것을 목적으로 합니다.
        </p>
        <hr className="mb-6" />
      </div>
      <div className="mb-6 flex justify-end">
        <Input
          type="text"
          placeholder="컴포넌트 검색"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-96 border border-zinc-300 bg-white"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-[20px]">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <ComponentBox
              key={item.id}
              img={item.img}
              href={item.href}
              title={item.title}
              description={item.description}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            검색 결과가 없습니다.
          </p>
        )}
      </div>
    </div>
  );
}
