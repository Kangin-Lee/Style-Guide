// 사이드바 메뉴 데이터

import { Badge, Bone, BookOpenText, Calendar1, CalendarDays, ChartArea, ChevronRight, CircleArrowRight, FileUp, Grid3X3, Heading, LayoutDashboard, ListCollapse, Logs, MessageCircleWarning, Search, Settings2, Square, Table, Text } from "lucide-react";

export const items = [
  { title: "Text", url: "/text", icon: Text },
  { title: "Button", url: "/button", icon: CircleArrowRight },
  { title: "Badge", url: "/badge", icon: Badge },
  // { title: "Form", url: "/form", icon: Type },
  { title: "Table", url: "/table", icon: Table },
  { title: "Tabs", url: "/tabs", icon: Logs },
  { title: "Accordion", url: "/accordion", icon: ListCollapse },
  { title: "Card", url: "/card", icon: Square },
  { title: "Breadcrumb", url: "/breadcrumb", icon: ChevronRight },
  { title: "Calendar", url: "/calendar", icon: CalendarDays },
  { title: "DatePicker", url: "/datepicker", icon: Calendar1 },
  {
    title: "Feedback",
    url: "/feedback",
    icon: MessageCircleWarning,
  },
  { title: "Chart", url: "/chart", icon: ChartArea },
  { title: "Skeleton", url: "/skeleton", icon: Bone },
  { title: "Slider", url: "/slider", icon: Settings2 },
  { title: "FileUpload", url: "/fileupload", icon: FileUp },
  { title: "Icon", url: "/icon", icon: Search },
  { title: "Title", url: "/title", icon: Heading },
  { title: "Layout", url: "/layout", icon: LayoutDashboard },
  { title: "Grid", url: "/grid", icon: Grid3X3 },
  { title: "Pagination", url: "/pagination", icon: BookOpenText },
];