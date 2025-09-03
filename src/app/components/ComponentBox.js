// 📌 ComponentBox 컴포넌트
// 개별 컴포넌트 박스 (이미지, 제목, 설명)

import Image from "next/image";
import Link from "next/link";

export default function ComponentBox({ img, href, title, description }) {
  return (
    <div className="my-3">
      <Link href={href}>
        <Image
          src={img || "/components/button.png"} // public/default.png 이미지 사용
          alt="component image"
          width={290}
          height={288}
          className="xs:w-full object-cover transition-all duration-400 ease-in-out hover:-translate-y-1 hover:shadow-lg rounded border border-gray-200"
        />
      </Link>
      <div>
        <h1 className="text-2xl font-bold mt-3 mb-2">{title}</h1>
        <p className="text-sm text-[var(--color-font-gray)]">{description}</p>
      </div>
    </div>
  );
}
