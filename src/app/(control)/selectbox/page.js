
// 📌 Selectbox 페이지
// - Selectbox 컴포넌트 사용 예시 및 코드 블록을 포함합니다.

import CodeBlock from "@/app/components/CodeBlock";
import MultiSelectField from "./components/MultiSelectField";
import { SelectField } from "./components/SelectField";

// 페이지 메타데이터
export const metadata = {
  title: "Selectbox",
  description: "Selectbox",
}

export default function ControlSelectbox() {
  return (
    <div className="space-y-12">
      <h1 className="text-2xl font-bold mb-6">Selectbox Examples</h1>
      <div className="w-fit">
        <CodeBlock
          code={`<Select value={field.value} onValueChange={field.onChange}>...</Select>`}
        />
        <p className="text-red-500 text-sm mt-2">* 유효성 검사는 코드 확인</p>
      </div>

      <div className="flex flex-col md:flex-row bg-white p-4 gap-8">
        {/* Preview 영역 */}
        <section className="md:w-1/2 w-full">
          <h2 className="text-lg font-semibold mb-4">Selectbox</h2>
          <div className="flex gap-4 flex-wrap">
            <SelectField />
          </div>
        </section>

        {/* CodeBlock 영역 */}
        <section className="md:w-1/2 w-full">
          <h2 className="text-lg font-semibold mb-4">Code</h2>
          <CodeBlock
            code={[
              "<Select value={field.value} onValueChange={field.onChange}>",
              '  <SelectTrigger className="w-[200px]">',
              '    <SelectValue placeholder="선택하세요" />',
              "  </SelectTrigger>",
              "  <SelectContent>",
              '    <SelectItem value="sd">SD부</SelectItem>',
              '    <SelectItem value="ia">AI부</SelectItem>',
              '    <SelectItem value="dp">DP부</SelectItem>',
              "  </SelectContent>",
              "</Select>",
            ].join("\n")}
          />
        </section>
      </div>

      <div className="flex flex-col md:flex-row bg-white p-4 gap-8">
        {/* Preview 영역 */}
        <section className="md:w-1/2 w-full">
          <h2 className="text-lg font-semibold mb-4">MultiSelectbox</h2>
          <div className="flex gap-4 flex-wrap">
            <MultiSelectField />
          </div>
        </section>

        {/* CodeBlock 영역 */}
        <section className="md:w-1/2 w-full">
          <h2 className="text-lg font-semibold mb-4">Code</h2>
          <CodeBlock
            code={[
              "<Popover open={open} onOpenChange={setOpen}>",
              "  <PopoverTrigger asChild>",
              '    <Button type="button">+ 태그 추가</Button>',
              "  </PopoverTrigger>",
              '  <div className="flex items-center">',
              "    <Button",
              '      type="button"',
              "      onClick={clearSelected}",
              '      variant="outlineDefault"',
              "    >",
              "      <CircleMinus />",
              "      선택 초기화",
              "    </Button>",
              "  </div>",
              '  <PopoverContent className="w-full p-0">',
              "    <Command>",
              "      <CommandInput",
              '        placeholder="태그 검색 또는 입력"',
              "        value={field.value}",
              "        onValueChange={field.onChange}",
              "        onKeyDown={(e) => {",
              '          if (e.key === "Enter") {',
              "            e.preventDefault();",
              "            handleAddCustom(field.value);",
              "          }",
              "        }}",
              "      />",
              "      <CommandList>",
              "        {options.filter((item) =>",
              "          item.invoice.toLowerCase().includes(field.value.toLowerCase())",
              "        ).length === 0 ? (",
              "          <CommandEmpty>",
              "            선택할 수 있는 태그가 없습니다.",
              "          </CommandEmpty>",
              "        ) : (",
              "          options",
              "            .filter(",
              "              (item) =>",
              "                item.invoice.toLowerCase().includes(field.value.toLowerCase()) &&",
              "                !selected.includes(item.invoice)",
              "            )",
              "            .map((item) => (",
              "              <CommandItem",
              "                key={item.id}",
              "                onSelect={() => handleSelect(item.invoice)}",
              "              >",
              "                {item.invoice}",
              "              </CommandItem>",
              "            ))",
              "        )}",
              "      </CommandList>",
              "    </Command>",
              "  </PopoverContent>",
              "</Popover>",
            ].join("\n")}
          />
        </section>
      </div>
    </div>
  );
}
