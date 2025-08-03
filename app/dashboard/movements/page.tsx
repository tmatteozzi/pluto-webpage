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
} from "@hugeicons/core-free-icons";
import { ChevronDown, Wallet } from "lucide-react";

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
      <div className="w-full mx-auto space-y-4  bg-card rounded-2xl p-4">
        <div className="flex items-center gap-2 text-sm font-medium tracking-normal">
          <HugeiconsIcon
            icon={PieChart04Icon}
            size={20}
            color={"var(--foreground)"}
            fill={"none"}
          />
          Transacciones
        </div>
        {/* Barra de filtros */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="bg-card flex items-center gap-2 text-sm border-border text-neutral-400"
            >
              Período
              <ChevronDown className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              className="bg-card flex items-center gap-2 text-sm border-border text-neutral-400"
            >
              Operaciones
              <ChevronDown className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              className="bg-card flex items-center gap-2 text-sm border-border text-neutral-400"
            >
              Estados
              <ChevronDown className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              className="bg-card flex items-center gap-2 text-sm border-border text-neutral-400"
            >
              Medios de pago
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Lista de transacciones */}
        <div className="space-y-6">
          {Object.entries(groupedTransactions).map(([date, transactions]) => (
            <div key={date} className="space-y-3">
              {/* Header de fecha */}
              <h3 className="text-lg font-medium text-foreground">{date}</h3>

              {/* Transacciones del día */}
              <div className="space-y-2">
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
