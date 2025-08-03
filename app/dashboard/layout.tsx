import type React from "react";
import { createServerClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { DashboardWrapper } from "@/components/DashboardWrapper";
import { WalletProvider } from "@/app/contexts/WalletContext";

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

  return (
    <WalletProvider user={user}>
      <DashboardWrapper>{children}</DashboardWrapper>
    </WalletProvider>
  );
}
