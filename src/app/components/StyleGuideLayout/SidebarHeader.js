// 📌 SidebarHeader 컴포넌트
// 헤더에 로고와 드롭다운 메뉴, 사이드바 토글 버튼 포함

import Image from "next/image";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Link from "next/link";
import { useState } from "react";

export function SidebarHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative bg-white flex items-center justify-between px-4 py-3 border-b border-[var(--color-border)]">
      <Link href="/">
        <Image
          src="/logo/IOPS_Logo.png"
          alt="아이옵스 로고"
          width={100}
          height={40}
          priority
        />
      </Link>

      {/* 마우스 진입/이탈 범위를 드롭다운까지 포함하는 wrapper로 확장 */}
      <div
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div className="px-4 py-2 cursor-pointer font-bold text-xl text-[var(--color-primary)]">
          IOPS UI Library v1
        </div>

        {/* 드롭다운 영역도 이제 이벤트 범위 안에 포함됨 */}
        <div
          className={`absolute left-0 top-full w-screen bg-white shadow-lg overflow-hidden
          transition-all duration-300 ease-in-out
          ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <ul className="p-4 space-y-2 text-black">
            <li className="hover:bg-gray-100 w-fit hover:text-black p-2 rounded">
              메뉴 1
            </li>
            <li className="hover:bg-gray-100 w-fit hover:text-black p-2 rounded">
              메뉴 2
            </li>
            <li className="hover:bg-gray-100 w-fit hover:text-black p-2 rounded">
              메뉴 3
            </li>
          </ul>
        </div>
      </div>

      <SidebarTrigger />
    </div>
  );
}
