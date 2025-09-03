"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import { SidebarHeader } from "./SidebarHeader";
import StyleGuideSidebar from "./StyleGuideSidebar";
import { Toaster } from "sonner";
import { usePathname } from "next/navigation";
import StyleGuideFooter from "./StyleGuideFooter";



export default function StyleGuideLayout({ children }) {
  const pathname = usePathname();

  // 흰색 배경이 필요한 경로 정의
  const whiteBgPaths = ["/"];
  const isWhite = whiteBgPaths.includes(pathname);

  const bgClass = isWhite ? "bg-white" : "bg-gray-100";

  return (
    <div>
      <SidebarProvider>
        <div className="w-full h-full">
          {/* 고정 헤더 */}
          <header className="fixed top-0 left-0 right-0 z-50 h-17">
            <SidebarHeader />
          </header>

          {/* 본문 영역: 사이드바 + 콘텐츠 */}
          <div className="flex flex-1 pt-17 overflow-hidden">
            {/* Sidebar */}
            <StyleGuideSidebar />

            {/* Main content */}
            <main className={`flex-1 w-full h-full ${bgClass}`}>
              <div className="flex flex-col h-full">
                {/* 내용 영역 (스크롤 가능) */}
                <div className="flex-1 xs:p-4 sm:p-4 md:p-8 md:px-16" style={{ minHeight: "calc(100vh - 70px - 32px)" }}>
                  {children}
                </div>

                {/* 푸터 */}
                <footer>
                  <StyleGuideFooter />
                </footer>
              </div>
            </main>
          </div>
        </div>
      </SidebarProvider>

      <Toaster />
      </div>
  );
}
