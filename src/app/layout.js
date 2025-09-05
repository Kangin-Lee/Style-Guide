// 📌 Layout 컴포넌트
// StyleGuideLayout 컴포넌트를 보여주는 메인 레이아웃

import "@/style/globals.css";
import StyleGuideLayout from "./components/StyleGuideLayout/StyleGuideLayout";
import ReactQueryProvider from "./components/TanstakQuery/ReactQueryProvider";

export const metadata = {
  title: {
    default: "Kangin UI Library",        // 기본 타이틀
    template: "%s - Kangin UI Library",  // 페이지에서 title 정의 시 자동으로 붙음
  },
  description: 'Kangin Style Guide',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <ReactQueryProvider>
          <StyleGuideLayout variant="white">{children}</StyleGuideLayout>
        </ReactQueryProvider>
        
      </body>
    </html>
  );
}