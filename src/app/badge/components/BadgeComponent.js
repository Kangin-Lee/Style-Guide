import { Badge } from "@/components/ui/badge";

export default function BadgeComponent({ variant, text }) {
  return (
    <Badge variant={variant}>{text}</Badge>
  );
}
