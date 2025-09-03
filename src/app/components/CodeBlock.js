// 📌 CodeBlock 컴포넌트
// 코드 블록을 보여주고 복사 기능 포함

"use client";

import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CodeBlock({ code, language = "jsx" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded overflow-hidden text-sm font-mono">
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          padding: "1rem",
          background: "#1e1e1e",
          borderRadius: "0.375rem",
        }}
      >
        {code}
      </SyntaxHighlighter>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 text-xs bg-gray-700 text-white hover:bg-gray-600 px-3 py-1 rounded border border-gray-500 transition"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}
