"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { createClient } from "@/lib/supabase/client";
import { User } from "@supabase/supabase-js";

interface WalletContextType {
  balance: number | null;
  loading: boolean;
  refreshBalance: () => Promise<void>;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error("useWallet debe usarse dentro de un WalletProvider");
  }
  return context;
};

interface WalletProviderProps {
  children: ReactNode;
  user: User | null;
}

export const WalletProvider: React.FC<WalletProviderProps> = ({
  children,
  user,
}) => {
  const [balance, setBalance] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const supabase = createClient();

  const fetchBalance = async () => {
    if (!user) return;
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("wallets")
        .select("balance")
        .eq("user_id", user.id)
        .single();
      if (error) throw error;
      setBalance(data?.balance ?? 0);
    } catch (e) {
      console.error("Error fetching balance:", e);
      setBalance(0);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      fetchBalance();
    } else {
      setBalance(null);
    }
  }, [user, fetchBalance]);

  return (
    <WalletContext.Provider
      value={{ balance, loading, refreshBalance: fetchBalance }}
    >
      {children}
    </WalletContext.Provider>
  );
};
