import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MenuItemProps {
  icon: LucideIcon;
  title: string;
  color: string;
  bgColor: string;
}

export const MenuItem = ({ icon: Icon, title, color, bgColor }: MenuItemProps) => {
  return (
    <div className="menu-item group" style={{ backgroundColor: bgColor }}>
      <div className="menu-icon" style={{ backgroundColor: color }}>
        <Icon className="w-5 h-5" />
      </div>
      <span className="font-medium">{title}</span>
    </div>
  );
};