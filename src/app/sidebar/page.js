// 📌 Sidebar 컴포넌트

import CodeBlock from "../components/CodeBlock";

// 페이지 메타데이터
export const metadata = {
  title: "Sidebar",
  description: "Sidebar",
}

export default function StyleSidebar() {
  return (
    <div className="space-y-12">
      <h1 className="text-2xl font-bold mb-6">Sidebar Examples</h1>
      <div className="w-96">
        <CodeBlock code={`<Sidebar><SidebarContent /></Sidebar>`} />
      </div>

      <div className="flex flex-col md:flex-row bg-white p-4 gap-8">
        {/* CodeBlock 영역 */}
        <section className="md:w-1/2 w-full">
          <h2 className="text-lg font-semibold mb-4">Sidebar Code</h2>
          <CodeBlock
            code={[
              'import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";',
              "",
              "import {",
              "  Sidebar,",
              "  SidebarContent,",
              "  SidebarGroup,",
              "  SidebarGroupContent,",
              "  SidebarGroupLabel,",
              "  SidebarMenu,",
              "  SidebarMenuButton,",
              "  SidebarMenuItem,",
              '} from "@/components/ui/sidebar";',
              "",
              "const items = [",
              '  { title: "Home", url: "#", icon: Home },',
              '  { title: "Inbox", url: "#", icon: Inbox },',
              '  { title: "Calendar", url: "#", icon: Calendar },',
              '  { title: "Search", url: "#", icon: Search },',
              '  { title: "Settings", url: "#", icon: Settings },',
              "];",
              "",
              "export function AppSidebar() {",
              "  return (",
              "    <Sidebar>",
              "      <SidebarContent>",
              "        <SidebarGroup>",
              "          <SidebarGroupLabel>Application</SidebarGroupLabel>",
              "          <SidebarGroupContent>",
              "            <SidebarMenu>",
              "              {items.map((item) => (",
              "                <SidebarMenuItem key={item.title}>",
              "                  <SidebarMenuButton asChild>",
              "                    <a href={item.url}>",
              "                      <item.icon />",
              "                      <span>{item.title}</span>",
              "                    </a>",
              "                  </SidebarMenuButton>",
              "                </SidebarMenuItem>",
              "              ))}",
              "            </SidebarMenu>",
              "          </SidebarGroupContent>",
              "        </SidebarGroup>",
              "      </SidebarContent>",
              "    </Sidebar>",
              "  );",
              "}",
            ].join("\n")}
          />
        </section>
      </div>
    </div>
  );
}
