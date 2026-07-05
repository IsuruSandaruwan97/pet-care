import { Icon } from "./Icon";

type IconBadgeProps = {
  className?: string;
  icon: string;
};

export function IconBadge({ className = "hp-icon-badge", icon }: IconBadgeProps) {
  return (
    <span className={className}>
      <Icon name={icon} />
    </span>
  );
}
