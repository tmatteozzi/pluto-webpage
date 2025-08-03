"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Wallet,
  Plus,
  Send,
  Download,
  CreditCard,
  TrendingUp,
  MessageCircle,
} from "lucide-react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowDataTransferDiagonalIcon,
  EnergyIcon,
  MoneyReceiveSquareIcon,
  Wallet05Icon,
} from "@hugeicons/core-free-icons";
import { useWallet } from "@/app/contexts/WalletContext";
import Link from "next/link";

export default function Dashboard() {
  const { balance, loading } = useWallet();
  const [chatMessage, setChatMessage] = useState("");

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      // Aquí se implementaría la lógica para enviar el mensaje a la IA
      console.log("Mensaje enviado:", chatMessage);
      setChatMessage("");
    }
  };

  // Mostrar loading mientras se carga el balance
  const displayBalance = loading ? "Cargando..." : (balance ?? 0);

  return (
    <div className="min-h-screen p-2">
      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 divide-x">
          {/* Sección de Wallet - Izquierda */}
          <div className="space-y-2 pt-13 pr-2 overflow-y-auto h-screen table-scroll">
            {/* Tarjeta de Saldo */}
            <Card className="bg-card text-white border-0 shadow-lg rounded-2xl">
              <CardHeader className="p-4">
                <CardTitle className="flex items-center gap-2 text-sm font-medium tracking-normal">
                  <HugeiconsIcon
                    icon={Wallet05Icon}
                    size={20}
                    color={"var(--foreground)"}
                    fill={"none"}
                  />
                  Saldo Actual
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4">
                <div className="text-4xl font-bold mb-2">
                  {loading ? (
                    <span className="text-2xl">Cargando...</span>
                  ) : (
                    `$${displayBalance.toLocaleString("es-ES", {
                      minimumFractionDigits: 2,
                    })}`
                  )}
                </div>
                <Badge variant="secondary" className="bg-white/20 text-white">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +2.5% este mes
                </Badge>
              </CardContent>
              <CardFooter className="px-4 mb-0 pb-4 gap-2">
                <Link
                  href="/dashboard/fund"
                  className="max-w-[300px] w-full bg-foreground  rounded-full py-2 flex items-center justify-center gap-2"
                >
                  <HugeiconsIcon
                    icon={MoneyReceiveSquareIcon}
                    size={20}
                    color={"var(--background)"}
                    fill={"none"}
                  />
                  <span className="text-sm font-medium text-background">
                    Ingresar dinero
                  </span>
                </Link>
                <Link
                  href="/dashboard/transfer"
                  className="max-w-[300px] w-full border border-border  rounded-full py-2 flex items-center justify-center gap-2"
                >
                  <HugeiconsIcon
                    icon={MoneyReceiveSquareIcon}
                    size={20}
                    color={"var(--foreground)"}
                    fill={"none"}
                  />
                  <span className="text-sm font-medium text-foreground">
                    Transferir dinero
                  </span>
                </Link>
              </CardFooter>
            </Card>

            {/* Acciones Básicas */}
            <Card className="bg-card text-white border-0 shadow-lg rounded-2xl">
              <CardHeader className="p-4">
                <CardTitle className="flex items-center gap-2 text-sm font-medium tracking-normal">
                  <HugeiconsIcon
                    icon={EnergyIcon}
                    size={20}
                    color={"var(--foreground)"}
                    fill={"none"}
                  />
                  Mis Acciones
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4">
                <div className="flex flex-col items-center w-full py-2 space-y-2">
                  <div className="flex items-center justify-center">
                    <HugeiconsIcon
                      icon={EnergyIcon}
                      size={46}
                      color={"var(--foreground)"}
                      fill={"none"}
                    />
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <p className="text-2xl font-medium">No tienes acciones</p>
                    <p className="text-sm text-neutral-400 max-w-[400px] text-center">
                      Crea tu primera acción personalizada para automatizar
                      tareas frecuentes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Historial de Transacciones */}
            <Card className="bg-card text-white border-0 shadow-lg rounded-2xl">
              <CardHeader className="p-4">
                <CardTitle className="flex items-center gap-2 text-sm font-medium tracking-normal">
                  <HugeiconsIcon
                    icon={ArrowDataTransferDiagonalIcon}
                    size={20}
                    color={"var(--foreground)"}
                    fill={"none"}
                  />
                  Movimientos
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4">
                <div className="flex flex-col items-center w-full py-2 space-y-2">
                  <div className="flex items-center justify-center">
                    <HugeiconsIcon
                      icon={ArrowDataTransferDiagonalIcon}
                      size={46}
                      color={"var(--foreground)"}
                      fill={"none"}
                    />
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <p className="text-2xl font-medium">
                      No tienes movimientos
                    </p>
                    <p className="text-sm text-neutral-400 max-w-[400px] text-center">
                      Cuando hagas una transacción, se mostrarán aquí.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chat con IA - Derecha */}
          <div className="space-y-0 relative flex flex-col w-full h-screen">
            <div className="w-full relative flex-1 flex items-center justify-center flex-col space-y-8">
              <div className="w-28 h-28 bg-foreground rounded-full -mt-12"></div>
              <div className="flex flex-col items-center gap-2 w-full space-y-4 px-10">
                <h1 className="text-4xl font-medium">
                  Let's work on your finances
                </h1>
                <div className="w-full">
                  <textarea
                    className="w-full h-32 bg-card rounded-3xl p-4 resize-none"
                    placeholder="Ask Pluto for your money"
                  />
                </div>
              </div>
            </div>
            <span className="absolute bottom-0 left-0 w-full text-center text-sm text-neutral-400 mb-6">
              AI-generated, for reference only
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
