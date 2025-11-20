import { Badge } from "./ui/badge";

interface SkillBadgeProps {
  name: string;
  color: "fuchsia" | "peach" | "rose";
}

export function SkillBadge({ name, color }: SkillBadgeProps) {
  const colorClasses = {
    fuchsia: "bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/30 hover:bg-fuchsia-500/20",
    peach: "bg-orange-400/10 text-orange-300 border-orange-400/30 hover:bg-orange-400/20",
    rose: "bg-rose-500/10 text-rose-300 border-rose-500/30 hover:bg-rose-500/20"
  };

  return (
    <Badge 
      variant="outline" 
      className={`${colorClasses[color]} transition-colors cursor-default`}
    >
      {name}
    </Badge>
  );
}
