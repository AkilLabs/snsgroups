import { LucideIcon } from "lucide-react";

interface MenuItemProps {
  icon: LucideIcon;
  title: string;
  color: string;
  bgColor: string;
  desc: string;
  link: string;
}

export const MenuItem = ({ icon: Icon, title, color, bgColor, desc ,link}: MenuItemProps) => {
  return (
                 
      <div className="flex group relative w-30 items-center cursor-pointer "    onClick={() => window.open(link, '_blank')}>
      {/* Icon Section */}
      <div
        className="rounded-full p-3 flex items-center justify-center shadow-md"
        style={{ backgroundColor: color }}
      >
        <Icon className="w-6 h-6 text-white" />
      </div>

      {/* Content Section */}
      <div 
        className="group absolute ml-14  w-fit p-3 rounded-full items-center justify-center text-center transition-colors duration-300"
        style={{ background: bgColor }}
      >

        <span className="font-medium">{title}</span>
    
        {/* Container that will expand on hover */}
        <div className="overflow-hidden transition-all duration-300 max-h-0 group-hover:max-h-40 group-hover:p-2">
          <p className="text-sm">{desc}</p>
        </div>
      </div>
    </div>
  );
};
