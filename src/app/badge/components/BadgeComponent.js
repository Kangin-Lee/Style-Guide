// 📌 BadgeComponent 컴포넌트
// shadcn UI의 Badge 컴포넌트를 사용한 예제

import { Badge } from "@/components/ui/badge";

export default function BadgeComponent({ variant, text }) {
  return (
    <Badge variant={variant}>{text}</Badge>
  );
}
