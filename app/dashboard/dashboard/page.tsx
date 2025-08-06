"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  MoneyBag02Icon,
  PieChart04Icon,
  TransparencyIcon,
} from "@hugeicons/core-free-icons";
import { TrendingUp, TrendingDown } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="min-h-screen p-2 pt-15 bg-background">
      <div className="w-full mx-auto space-y-2">
        {/* Primera fila - Racha y Ahorros */}
        <div className="flex flex-col lg:flex-row gap-2">
          {/* Tarjeta de Racha */}
          <Card className="bg-card text-white border-0 shadow-lg rounded-2xl w-1/3 relative">
            <CardHeader className="p-4">
              <CardTitle className="flex items-center gap-2 text-sm font-medium tracking-normal">
                <HugeiconsIcon
                  icon={TransparencyIcon}
                  size={20}
                  color={"var(--foreground)"}
                  fill={"none"}
                />
                Transacciones
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4 pb-4">
              <p className="text-sm text-neutral-400 mb-4">
                En los últimos 30 días tienes{" "}
                <span className="text-foreground font-semibold">0</span>{" "}
                transacciones y{" "}
                <span className="text-foreground font-semibold">0 días</span> de
                racha máxima.
              </p>

              {/* Barra de progreso de 30 días */}
              <div className="flex gap-1 mb-2">
                {Array.from({ length: 30 }).map((_, index) => (
                  <div
                    key={index}
                    className="flex-1 h-2 bg-neutral-700 rounded-sm"
                  />
                ))}
              </div>

              <div className="flex justify-between text-xs text-neutral-400">
                <span>Hace 30 días</span>
                <span>Hoy</span>
              </div>
            </CardContent>
          </Card>

          {/* Tarjeta de Ahorros */}
          <Card className="bg-card text-white border-0 shadow-lg rounded-2xl w-2/3">
            <CardHeader className="p-4">
              <CardTitle className="flex items-center gap-2 text-sm font-medium tracking-normal">
                <HugeiconsIcon
                  icon={MoneyBag02Icon}
                  size={20}
                  color={"var(--foreground)"}
                  fill={"none"}
                />
                Ahorros
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4 pb-4">
              {/* Barra de progreso de ahorros */}
              <div className="relative mb-4">
                <div className="flex justify-between text-xs text-neutral-400 mb-1">
                  <span>0%</span>
                  <span>20%</span>
                  <span>100%</span>
                </div>
                <div className="h-3 bg-neutral-700 rounded-full overflow-hidden">
                  <div className="h-full bg-foreground w-1/6"></div>
                  <div className="h-full bg-foreground w-1/3 ml-1"></div>
                </div>
              </div>

              <div className="flex justify-between text-sm">
                <div>
                  <p className="text-neutral-400">Ahorros e inversiones</p>
                  <p className="font-semibold">US$ 0,00</p>
                </div>
                <div>
                  <p className="text-neutral-400">Ingresos</p>
                  <p className="font-semibold">US$ 0,00</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sección de Evolución de Finanzas */}
        <Card className="bg-card text-white border-0 shadow-lg rounded-2xl">
          <CardHeader className="p-4">
            <CardTitle className="flex items-center gap-2 text-sm font-medium tracking-normal">
              <HugeiconsIcon
                icon={PieChart04Icon}
                size={20}
                color={"var(--foreground)"}
                fill={"none"}
              />
              Balance
            </CardTitle>
          </CardHeader>
          <CardContent className="px-4 pb-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Tarjeta de Ingresos */}
              <div className="space-y-3 bg-muted p-4 rounded">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium">Ingresos</h3>
                  <TrendingUp className="h-4 w-4 text-green-400" />
                </div>
                <p className="text-2xl font-bold text-green-400">$ 0,00</p>
                <div className="h-32 bg-neutral-800 rounded-lg flex items-end justify-center">
                  {/* Aquí iría el gráfico de ingresos */}
                </div>
                <div className="h-0.5 bg-green-400 rounded"></div>
                <p className="text-xs text-neutral-400">Mar 25 - Ago 25</p>
              </div>

              {/* Tarjeta de Gastos */}
              <div className="space-y-3 bg-muted p-4 rounded">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium">Gastos</h3>
                  <TrendingDown className="h-4 w-4 text-red-400" />
                </div>
                <p className="text-2xl font-bold text-red-400">$ 0,00</p>
                <div className="h-32 bg-neutral-800 rounded-lg flex items-end justify-center">
                  {/* Aquí iría el gráfico de gastos */}
                </div>
                <div className="h-0.5 bg-red-400 rounded"></div>
                <p className="text-xs text-neutral-400">Mar 25 - Ago 25</p>
              </div>

              {/* Tarjeta de Balance */}
              <div className="space-y-3 bg-muted p-4 rounded">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium">Balance</h3>
                  <TrendingUp className="h-4 w-4 text-green-400" />
                </div>
                <p className="text-2xl font-bold text-green-400">$ 0,00</p>
                <div className="h-32 bg-neutral-800 rounded-lg flex items-end justify-center">
                  {/* Aquí iría el gráfico de balance */}
                </div>
                <div className="h-0.5 bg-green-400 rounded"></div>
                <p className="text-xs text-neutral-400">Mar 25 - Ago 25</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
