// 📌 Content Icon 컴포넌트

import CodeBlock from "@/app/components/CodeBlock";
import {
  File,
  FileText,
  Folder,
  FolderOpen,
  Image,
  Camera,
  Code,
  Table,
  Calendar,
  Clock,
  Link,
  ExternalLink,
} from "lucide-react";

export function ContentIcons() {
  return (
    <div>
      <div className="flex flex-col md:flex-row bg-white p-4 gap-8">
        {/* Preview 영역 */}
        <section className="md:w-1/2 w-full">
          <h2 className="text-lg font-semibold mb-4">Content Icon</h2>
          <div className="flex gap-4 flex-col flex-wrap">
            <div className="flex gap-4">
              <File />
              <FileText />
              <Folder />
              <FolderOpen />
              <Image />
            </div>
            <div className="flex gap-4">
              <Camera />
              <Code />
              <Table />
              <Calendar />
              <Clock />
            </div>
            <div className="flex gap-4">
              <Link />
              <ExternalLink />
            </div>
          </div>
        </section>

        {/* CodeBlock 영역 */}
        <section className="md:w-1/2 w-full">
          <h2 className="text-lg font-semibold mb-4">Code</h2>
          <CodeBlock
            code={[
              "<File />  <FileText />  <Folder />  <FolderOpen />  <Image />",
              "<Camera />  <Code />  <Table />  <Calendar />  <Clock /> ",
              "<Link />  <ExternalLink /> ",
            ].join("\n")}
          />
        </section>
      </div>
    </div>
  );
}
