"use client";

import type React from "react";
import { useState } from "react";
import { Sidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { DropdownMenu, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

interface DashboardWrapperProps {
  children: React.ReactNode;
}

export function DashboardWrapper({ children }: DashboardWrapperProps) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <SidebarProvider>
        <Sidebar isCollapsed={isSidebarCollapsed} onToggle={toggleSidebar} />
        <SidebarInset className="flex-1 min-w-0 overflow-hidden">
          <header className="absolute top-0 left-0 w-full flex h-13 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 bg-gradient-to-b from-background to-background/0">
            <div className="flex items-center gap-2 px-2">
              <DropdownMenu>
                <DropdownMenuTrigger className="hover:bg-muted rounded-md p-2">
                  <div className="flex items-center gap-2">
                    <span>Pluto</span>
                    <ChevronDown className="w-4 h-4 mt-0.5 text-muted-foreground" />
                  </div>
                </DropdownMenuTrigger>
              </DropdownMenu>
            </div>
          </header>
          {children}
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
