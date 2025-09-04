// 📌 Layout 컴포넌트
// StyleGuideLayout 컴포넌트를 보여주는 메인 레이아웃

import "@/style/globals.css";
import StyleGuideLayout from "./components/StyleGuideLayout/StyleGuideLayout";
import ReactQueryProvider from "./components/TanstakQuery/ReactQueryProvider";

export const metadata = {
  title: 'IOPS UI Library',
  description: 'IOPS Style Guide',
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