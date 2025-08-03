import type React from "react";
import { createServerClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { DashboardWrapper } from "@/components/DashboardWrapper";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createServerClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    redirect("/login");
  }

  return <DashboardWrapper>{children}</DashboardWrapper>;
}
