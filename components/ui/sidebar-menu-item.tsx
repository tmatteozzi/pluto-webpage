import React from "react";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";

// Tipo para los iconos de Hugeicons
type HugeiconsIconType = React.ComponentProps<typeof HugeiconsIcon>["icon"];

interface SidebarMenuItemProps {
  icon: HugeiconsIconType;
  label: string;
  href: string;
  isCollapsed: boolean;
  showText: boolean;
  textOpacity: boolean;
  isActive?: boolean;
}

export const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({
  icon,
  label,
  href,
  isCollapsed,
  showText,
  textOpacity,
  isActive = false,
}) => {
  return (
    <Link
      className={`cursor-pointer w-full flex items-center gap-2 p-2 rounded-lg transition-all duration-200 group hover:bg-card ${
        isActive ? "bg-card" : ""
      }`}
      title={isCollapsed ? label : ""}
      href={href}
    >
      <span className="flex items-center justify-center text-foreground">
        <HugeiconsIcon
          icon={icon}
          size={20}
          color={"var(--foreground)"}
          fill={"none"}
        />
      </span>
      {showText && (
        <span
          className={`text-sm text-foreground font-medium truncate whitespace-nowrap transition-opacity duration-200 ${
            textOpacity ? "opacity-100" : "opacity-0"
          }`}
        >
          <span style={{ minWidth: "max-content" }}>{label}</span>
        </span>
      )}
    </Link>
  );
};
