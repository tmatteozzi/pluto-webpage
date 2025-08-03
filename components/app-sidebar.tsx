import React from "react";
import { useState, useEffect } from "react";
import {
  PanelLeftClose,
  PanelLeftOpen,
  MessageSquare,
  History,
  Settings,
  User,
  Plus,
  Search,
  Archive,
  Trash2,
  Table,
} from "lucide-react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  AddSquareIcon,
  Home03Icon,
  Home07Icon,
  Logout02Icon,
  Settings01Icon,
  StarsIcon,
  TableIcon,
  ChartIcon,
  UserIcon,
  WalletIcon,
  Analytics01Icon,
  ArrowDataTransferDiagonalIcon,
} from "@hugeicons/core-free-icons";
import { SidebarMenuItem } from "./ui/sidebar-menu-item";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { SidebarMenuButton } from "./ui/sidebar";
import { Avatar, AvatarFallback } from "./ui/avatar";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { createClient } from "@/lib/supabase/client";
import type { User as SupabaseUser } from "@supabase/supabase-js";
import { usePathname, useRouter } from "next/navigation";
import { COLOR_OPTIONS } from "@/lib/utils/colors";
import SettingsDialog from "./SettingsDialog";
import Image from "next/image";

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, onToggle }) => {
  const [showText, setShowText] = useState(!isCollapsed);
  const [textOpacity, setTextOpacity] = useState(!isCollapsed);
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const router = useRouter();
  const pathname = usePathname();
  const supabase = createClient();
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Sincroniza el estado del dialog con el hash de la URL
  useEffect(() => {
    const checkHash = () => {
      setIsSettingsOpen(window.location.hash === "#settings");
    };
    window.addEventListener("hashchange", checkHash);
    checkHash();
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  const openSettings = () => {
    window.location.hash = "settings";
  };
  const closeSettings = () => {
    // Quita el hash sin recargar la página
    history.pushState(
      "",
      document.title,
      window.location.pathname + window.location.search
    );
    setIsSettingsOpen(false);
  };

  useEffect(() => {
    if (isCollapsed) {
      // Cuando se colapsa, primero hacer fade out del texto, luego ocultarlo
      setTextOpacity(false);
      const timer = setTimeout(() => {
        setShowText(false);
      }, 200); // Esperar a que termine la transición de opacidad
      return () => clearTimeout(timer);
    } else {
      // Cuando se expande, mostrar el texto primero, luego hacer fade in
      setShowText(true);
      const timer = setTimeout(() => {
        setTextOpacity(true);
      }, 150); // La mitad de la duración de la transición de width
      return () => clearTimeout(timer);
    }
  }, [isCollapsed]);

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };

    getUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event: any, session: any) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, [supabase.auth]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  };

  const getColorClass = (color: string) => {
    const colorOption = COLOR_OPTIONS.find((c) => c.value === color);
    return colorOption?.bg || "bg-blue-500";
  };

  // Configuración de los elementos del menú
  const menuItems = [
    {
      icon: Home03Icon,
      label: "Home",
      href: "/dashboard",
      isActive: pathname === "/dashboard",
    },
    {
      icon: Analytics01Icon,
      label: "Dashboard",
      href: "/dashboard/dashboard",
      isActive: pathname === "/dashboard/dashboard",
    },
    {
      icon: ArrowDataTransferDiagonalIcon,
      label: "Movimientos",
      href: "/dashboard/movements",
      isActive: pathname === "/dashboard/movements",
    },
    {
      icon: UserIcon,
      label: "Profile",
      href: "/dashboard/profile",
      isActive: pathname === "/dashboard/profile",
    },
  ];

  return (
    <div
      className={`bg-background text-white h-screen flex flex-col transition-all duration-300 ease-in-out  ${
        isCollapsed ? "w-[53.5px]" : "w-64"
      } flex-shrink-0 border-r border-border ${isCollapsed ? "hover:cursor-ew-resize cursor-pointer" : ""}`}
      onClick={(e) => {
        if (isCollapsed) {
          // Solo expandir si el click NO es en un botón
          const isButton = (e.target as HTMLElement).closest("button");
          if (!isButton) {
            onToggle();
          }
        }
      }}
      // Evita que el click en el botón de toggle propague y dispare dos veces
      onMouseDown={(e) => {
        if (isCollapsed && (e.target as HTMLElement).closest("button")) {
          e.stopPropagation();
        }
      }}
    >
      {/* Header */}
      <div className="p-2 border-b border-border">
        <div className="flex items-center justify-between">
          <button className="p-2 rounded-lg hover:bg-muted transition-colors duration-200">
            <Image
              src="/pluto-logo.png"
              alt="Pluto"
              width={150}
              height={150}
              className="w-[20px] h-[20px]"
            />
          </button>
          {!isCollapsed && (
            <button
              onClick={onToggle}
              className="p-2 rounded-lg hover:bg-muted transition-colors duration-200"
              title={isCollapsed ? "Expandir sidebar" : "Contraer sidebar"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={20}
                height={20}
                className="text-muted-foreground"
                fill={"none"}
              >
                <path
                  d="M2 12C2 8.31087 2 6.4663 2.81382 5.15877C3.1149 4.67502 3.48891 4.25427 3.91891 3.91554C5.08116 3 6.72077 3 10 3H14C17.2792 3 18.9188 3 20.0811 3.91554C20.5111 4.25427 20.8851 4.67502 21.1862 5.15877C22 6.4663 22 8.31087 22 12C22 15.6891 22 17.5337 21.1862 18.8412C20.8851 19.325 20.5111 19.7457 20.0811 20.0845C18.9188 21 17.2792 21 14 21H10C6.72077 21 5.08116 21 3.91891 20.0845C3.48891 19.7457 3.1149 19.325 2.81382 18.8412C2 17.5337 2 15.6891 2 12Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                ></path>
                <path
                  d="M9.5 3L9.5 21"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M5 7H6M5 10H6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Main Menu Items */}
      <div className="flex-1 p-2">
        {menuItems.map((item, index) => (
          <SidebarMenuItem
            key={index}
            icon={item.icon}
            label={item.label}
            href={item.href}
            isCollapsed={isCollapsed}
            showText={showText}
            textOpacity={textOpacity}
            isActive={item.isActive}
          />
        ))}
      </div>

      {/* Bottom Items */}
      <div className="p-2 border-t border-border space-y-1">
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="focus:outline-none">
            <button className="cursor-pointer w-full flex items-center gap-2 p-2 rounded-lg transition-all duration-200 hover:bg-muted">
              <Avatar className="h-6 w-6">
                <AvatarFallback className="text-xs text-foreground">
                  {user?.email?.charAt(0).toUpperCase() || "U"}
                </AvatarFallback>
              </Avatar>
              {showText && (
                <div
                  className={`flex flex-col text-left transition-opacity duration-200 ${textOpacity ? "opacity-100" : "opacity-0"}`}
                >
                  <span className="truncate text-sm text-foreground">
                    {user?.user_metadata.name || "Matias Monzalvo"}
                  </span>
                  <span className="truncate text-xs text-muted-foreground">
                    Free Plan
                  </span>
                </div>
              )}
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="top" className="w-56">
            <DropdownMenuItem asChild>
              <button onClick={openSettings} className="w-full">
                <HugeiconsIcon
                  icon={StarsIcon}
                  size={20}
                  color="var(--foreground)"
                />
                Upgrade plan
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <button onClick={openSettings} className="w-full">
                <HugeiconsIcon
                  icon={Settings01Icon}
                  size={20}
                  color="var(--foreground)"
                />
                Settings
              </button>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <button onClick={handleSignOut} className="w-full">
                <HugeiconsIcon
                  icon={Logout02Icon}
                  size={20}
                  color="var(--foreground)"
                />
                Log out
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <SettingsDialog
        open={isSettingsOpen}
        onOpenChange={(open) => (open ? openSettings() : closeSettings())}
      />
    </div>
  );
};
