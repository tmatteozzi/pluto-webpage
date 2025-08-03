"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  WalletIcon,
  ShoppingBagIcon,
  CreditCardIcon,
  BankIcon,
  PieChart04Icon,
  ArrowDataTransferDiagonalIcon,
} from "@hugeicons/core-free-icons";
import { ChevronDown, Wallet } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Datos de ejemplo para las transacciones
const mockTransactions = [
  {
    id: 1,
    date: "2 de agosto",
    time: "20:58 hs",
    name: "Coto",
    type: "Pago en tienda física",
    amount: -26346.0,
    logo: "🛒", // Emoji como placeholder para el logo
    logoColor: "bg-red-500",
  },
  {
    id: 2,
    date: "2 de agosto",
    time: "00:41 hs",
    name: "Corporacion D&D S.r.l. -",
    type: "Transferencia enviada",
    amount: -13998.0,
    logo: "🏢",
    logoColor: "bg-gray-600",
  },
  {
    id: 3,
    date: "1 de agosto",
    time: "15:30 hs",
    name: "Manuel Mouzo Sa -",
    type: "Transferencia enviada",
    amount: -5000.0,
    logo: "💳",
    logoColor: "bg-green-500",
  },
  {
    id: 4,
    date: "1 de agosto",
    time: "12:15 hs",
    name: "Los Marianos Srl",
    type: "Pago en tienda física",
    amount: -8500.0,
    logo: "🛍️",
    logoColor: "bg-gray-500",
  },
  {
    id: 5,
    date: "29 de julio",
    time: "18:20 hs",
    name: "Jianping Liu",
    type: "Transferencia enviada",
    amount: -12000.0,
    logo: "👤",
    logoColor: "bg-blue-500",
  },
  {
    id: 6,
    date: "28 de julio",
    time: "09:45 hs",
    name: "Supermercado Central",
    type: "Pago en tienda física",
    amount: -7500.0,
    logo: "🛒",
    logoColor: "bg-orange-500",
  },
  {
    id: 7,
    date: "24 de julio",
    time: "14:30 hs",
    name: "Banco Galicia",
    type: "Transferencia enviada",
    amount: -25000.0,
    logo: "🏦",
    logoColor: "bg-blue-600",
  },
];

// Agrupar transacciones por fecha
const groupTransactionsByDate = (transactions: typeof mockTransactions) => {
  const grouped: { [key: string]: typeof mockTransactions } = {};
  transactions.forEach((transaction) => {
    if (!grouped[transaction.date]) {
      grouped[transaction.date] = [];
    }
    grouped[transaction.date].push(transaction);
  });
  return grouped;
};

export default function MovementsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("Últimos 30 días");
  const [selectedOperations, setSelectedOperations] = useState("Todas");
  const [selectedStatuses, setSelectedStatuses] = useState("Todos");
  const [selectedPaymentMethods, setSelectedPaymentMethods] = useState("Todos");

  const groupedTransactions = groupTransactionsByDate(mockTransactions);

  return (
    <div className="min-h-screen p-4 pt-15 bg-background overflow-y-auto table-scroll">
      <div className="w-full mx-auto space-y-4 bg-card rounded-2xl p-4">
        <div className="flex items-center gap-2 text-sm font-medium tracking-normal">
          <HugeiconsIcon
            icon={ArrowDataTransferDiagonalIcon}
            size={20}
            color={"var(--foreground)"}
            fill={"none"}
          />
          Transacciones
        </div>

        {/* Barra de filtros */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="bg-card flex items-center gap-2 text-sm border-border text-neutral-400 rounded-2xl px-3 py-1"
                >
                  {selectedPeriod}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card w-full px-3 pr-8">
                <DropdownMenuItem onClick={() => setSelectedPeriod("Hoy")}>
                  Hoy
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setSelectedPeriod("Últimos 7 días")}
                >
                  Últimos 7 días
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setSelectedPeriod("Últimos 30 días")}
                >
                  Últimos 30 días
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setSelectedPeriod("Últimos 90 días")}
                >
                  Últimos 90 días
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedPeriod("Este año")}>
                  Este año
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setSelectedPeriod("Personalizado")}
                >
                  Personalizado
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="bg-card flex items-center gap-2 text-sm border-border text-neutral-400 rounded-2xl px-3 py-1"
                >
                  {selectedOperations}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem
                  onClick={() => setSelectedOperations("Todas")}
                >
                  Todas
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setSelectedOperations("Pagos")}
                >
                  Pagos
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setSelectedOperations("Transferencias")}
                >
                  Transferencias
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setSelectedOperations("Depósitos")}
                >
                  Depósitos
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setSelectedOperations("Retiros")}
                >
                  Retiros
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setSelectedOperations("Compras")}
                >
                  Compras
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="bg-card flex items-center gap-2 text-sm border-border text-neutral-400 rounded-2xl px-3 py-1"
                >
                  {selectedStatuses}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setSelectedStatuses("Todos")}>
                  Todos
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setSelectedStatuses("Completadas")}
                >
                  Completadas
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setSelectedStatuses("Pendientes")}
                >
                  Pendientes
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setSelectedStatuses("Fallidas")}
                >
                  Fallidas
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setSelectedStatuses("Canceladas")}
                >
                  Canceladas
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="bg-card flex items-center gap-2 text-sm border-border text-neutral-400 rounded-2xl px-3 py-1"
                >
                  {selectedPaymentMethods}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem
                  onClick={() => setSelectedPaymentMethods("Todos")}
                >
                  Todos
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() =>
                    setSelectedPaymentMethods("Tarjeta de crédito")
                  }
                >
                  Tarjeta de crédito
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setSelectedPaymentMethods("Tarjeta de débito")}
                >
                  Tarjeta de débito
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() =>
                    setSelectedPaymentMethods("Transferencia bancaria")
                  }
                >
                  Transferencia bancaria
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setSelectedPaymentMethods("Efectivo")}
                >
                  Efectivo
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setSelectedPaymentMethods("Billetera digital")}
                >
                  Billetera digital
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Lista de transacciones */}
        <div className="space-y-6">
          {Object.entries(groupedTransactions).map(([date, transactions]) => (
            <div key={date} className="space-y-1">
              {/* Header de fecha */}
              <h3 className="text-lg font-medium text-foreground">{date}</h3>

              {/* Transacciones del día */}
              <div className="">
                {transactions.map((transaction) => (
                  <div
                    key={transaction.id}
                    className="bg-card rounded-2xl py-4 flex items-center justify-between"
                  >
                    {/* Lado izquierdo - Detalles de la transacción */}
                    <div className="flex items-center gap-4 flex-1">
                      {/* Logo/Icono */}
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-lg bg-foreground`}
                      >
                        {transaction.logo}
                      </div>

                      {/* Información de la transacción */}
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">
                          {transaction.name}
                        </h4>
                        <p className="text-sm text-neutral-400">
                          {transaction.type}
                        </p>
                        <div className="flex items-center gap-1 mt-1">
                          <Wallet className="h-3 w-3 text-blue-500" />
                          <span className="text-xs text-blue-500">
                            Dinero disponible
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Lado derecho - Monto y hora */}
                    <div className="text-right">
                      <p className="text-lg font-semibold text-red-500">
                        - ${" "}
                        {transaction.amount.toLocaleString("es-AR", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </p>
                      <p className="text-sm text-neutral-400">
                        {transaction.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
