// 📌 StyleGuideSidebar 컴포넌트
// 사이드바 메뉴 아이템 컴포넌트

"use client";

import {
  Badge,
  Bolt,
  Bone,
  BookOpenText,
  Calendar1,
  CalendarDays,
  ChartArea,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  CircleArrowRight,
  CircleCheck,
  FileUp,
  Grid3X3,
  Heading,
  Joystick,
  LayoutDashboard,
  ListCollapse,
  LogOut,
  Logs,
  Mail,
  MessageCircleWarning,
  Radio,
  Search,
  Settings,
  Settings2,
  Square,
  SquareAsterisk,
  SquareMousePointer,
  Table,
  Text,
  TextCursorInput,
  ToggleRight,
  Type,
  User,
  UserRoundCog,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { usePathname } from "next/navigation";
import Link from "next/link";

const items = [
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

const formInput = [
  { title: "Input", url: "/form/input", icon: TextCursorInput },
  { title: "TextArea", url: "/form/textarea", icon: Text },
  { title: "OTP", url: "/form/otp", icon: SquareAsterisk },
  { title: "Editor", url: "/form/editor", icon: Bolt },
];

const control = [
  {
    title: "Checkbox",
    url: "/control/checkbox",
    icon: CircleCheck,
  },
  { title: "RadioGroup", url: "/control/radiogroup", icon: Radio },
  {
    title: "Selectbox",
    url: "/control/selectbox",
    icon: SquareMousePointer,
  },
  { title: "Toggle", url: "/control/toggle", icon: ToggleRight },
];

export default function StyleGuideSidebar() {
  const pathname = usePathname();

  const settingOpen = pathname.startsWith("/setting");
  return (
    <Sidebar className={'pt-17'}>
      {/* 헤더 높이만큼 띄움 */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User /> 홍길동님
                  <ChevronDown className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-52">
                <DropdownMenuItem>
                  <span className="flex items-center gap-2">
                    <UserRoundCog /> 계정보기
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span className="flex items-center gap-2">
                    <Mail /> 개인메일
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span className="flex items-center gap-2">
                    <LogOut /> 로그아웃
                  </span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const isActive = pathname.startsWith(item.url);

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className={cn(
                        isActive && "bg-[var(--color-primary)] text-white" // ✅ active 스타일
                      )}
                    >
                      <Link href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>

            {/* 컨트롤----------------------------- */}
            <SidebarMenuItem>
              <Collapsible asChild className="group/collapsible">
                <div>
                  {/* 단일 wrapper 엘리먼트로 감싸기 */}
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip="form">
                      <Type />
                      <span>Form</span>

                      {/* 조건 아이콘 */}
                      <ChevronUp className="ml-auto hidden group-data-[state=open]/collapsible:block" />
                      <ChevronDown className="ml-auto hidden group-data-[state=closed]/collapsible:block" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {formInput.map((item) => {
                        const isActive = pathname.startsWith(item.url);

                        return (
                          <SidebarMenuSubItem key={item.title}>
                            <SidebarMenuSubButton
                              asChild
                              className={cn(
                                isActive &&
                                  "bg-[var(--color-primary)] text-white" // ✅ active 스타일
                              )}
                            >
                              <Link href={item.url}>
                                <item.icon />
                                <span>{item.title}</span>
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        );
                      })}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </div>
              </Collapsible>
            </SidebarMenuItem>
            {/* 컨트롤----------------------------- */}

            {/* 컨트롤----------------------------- */}
            <SidebarMenuItem>
              <Collapsible asChild className="group/collapsible">
                <div>
                  {/* 단일 wrapper 엘리먼트로 감싸기 */}
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip="control">
                      <Joystick />
                      <span>Control</span>

                      {/* 조건 아이콘 */}
                      <ChevronUp className="ml-auto hidden group-data-[state=open]/collapsible:block" />
                      <ChevronDown className="ml-auto hidden group-data-[state=closed]/collapsible:block" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {control.map((item) => {
                        const isActive = pathname.startsWith(item.url);

                        return (
                          <SidebarMenuSubItem key={item.title}>
                            <SidebarMenuSubButton
                              asChild
                              className={cn(
                                isActive &&
                                  "bg-[var(--color-primary)] text-white" // ✅ active 스타일
                              )}
                            >
                              <Link href={item.url}>
                                <item.icon
                                  className={cn(isActive && "text-white")}
                                />
                                <span>{item.title}</span>
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        );
                      })}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </div>
              </Collapsible>
            </SidebarMenuItem>
            {/* 컨트롤----------------------------- */}
          </SidebarGroupContent>
        </SidebarGroup>

        {/* 프로젝트 세팅----------------------------- */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  // className={cn(
                  //   isActive && "bg-[var(--color-primary)] text-white" // ✅ active 스타일
                  // )}
                >
                  <Link href="style-guide/setting/tech-stack">
                    <Settings />
                    <span>Project Setting</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {/* 프로젝트 세팅----------------------------- */}
      </SidebarContent>
    </Sidebar>
  );
}
