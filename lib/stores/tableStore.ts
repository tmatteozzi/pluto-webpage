"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { TableData, TableFormData, Column, Row } from "@/lib/types/table";

interface TableStore {
  tables: TableData[];
  addTable: (formData: TableFormData) => string;
  updateTable: (id: string, updatedTable: TableData) => void;
  deleteTable: (id: string) => void;
  getTable: (id: string) => TableData | undefined;
}

const tableTemplates = [
  {
    id: "project-management",
    name: "Gestión de Proyectos",
    description: "Para seguimiento de proyectos, tareas y equipos",
    category: "projects",
    columns: [
      { name: "Proyecto", type: "text" },
      {
        name: "Estado",
        type: "select",
        options: ["Planificación", "En Progreso", "Completado", "En Pausa"],
      },
      { name: "Responsable", type: "text" },
      { name: "Fecha Inicio", type: "date" },
      { name: "Fecha Fin", type: "date" },
      { name: "Progreso", type: "number" },
      {
        name: "Prioridad",
        type: "select",
        options: ["Baja", "Media", "Alta", "Urgente"],
      },
      { name: "Presupuesto", type: "number" },
    ],
  },
  {
    id: "inventory",
    name: "Control de Inventario",
    description: "Para gestionar productos, stock y proveedores",
    category: "inventory",
    columns: [
      { name: "Producto", type: "text" },
      { name: "Código SKU", type: "text" },
      {
        name: "Categoría",
        type: "select",
        options: ["Electrónicos", "Ropa", "Hogar", "Otros"],
      },
      { name: "Stock Actual", type: "number" },
      { name: "Stock Mínimo", type: "number" },
      { name: "Precio", type: "number" },
      { name: "Proveedor", type: "text" },
      { name: "Fecha Ingreso", type: "date" },
      {
        name: "Estado",
        type: "select",
        options: ["Disponible", "Agotado", "Descontinuado"],
      },
    ],
  },
  {
    id: "customer-management",
    name: "Gestión de Clientes",
    description: "Para administrar información de clientes y contactos",
    category: "customers",
    columns: [
      { name: "Nombre", type: "text" },
      { name: "Email", type: "text" },
      { name: "Teléfono", type: "text" },
      { name: "Empresa", type: "text" },
      { name: "Cargo", type: "text" },
      { name: "Fecha Registro", type: "date" },
      {
        name: "Estado",
        type: "select",
        options: ["Activo", "Inactivo", "Prospecto"],
      },
      { name: "Última Interacción", type: "date" },
    ],
  },
  {
    id: "sales-tracking",
    name: "Seguimiento de Ventas",
    description: "Para registrar ventas, oportunidades y resultados",
    category: "sales",
    columns: [
      { name: "Oportunidad", type: "text" },
      { name: "Cliente", type: "text" },
      { name: "Valor", type: "number" },
      { name: "Probabilidad", type: "number" },
      {
        name: "Etapa",
        type: "select",
        options: [
          "Prospecto",
          "Calificado",
          "Propuesta",
          "Negociación",
          "Cerrado",
        ],
      },
      { name: "Fecha Cierre", type: "date" },
      { name: "Vendedor", type: "text" },
      { name: "Producto/Servicio", type: "text" },
    ],
  },
  {
    id: "expense-tracking",
    name: "Control de Gastos",
    description: "Para llevar registro de gastos y presupuestos",
    category: "expenses",
    columns: [
      { name: "Concepto", type: "text" },
      {
        name: "Categoría",
        type: "select",
        options: ["Oficina", "Marketing", "Viajes", "Equipamiento", "Otros"],
      },
      { name: "Monto", type: "number" },
      { name: "Fecha", type: "date" },
      {
        name: "Método Pago",
        type: "select",
        options: ["Efectivo", "Tarjeta", "Transferencia", "Cheque"],
      },
      { name: "Proveedor", type: "text" },
      {
        name: "Estado",
        type: "select",
        options: ["Pendiente", "Pagado", "Vencido"],
      },
      { name: "Aprobado por", type: "text" },
    ],
  },
  {
    id: "task-management",
    name: "Gestión de Tareas",
    description: "Para organizar tareas, asignaciones y deadlines",
    category: "other",
    columns: [
      { name: "Tarea", type: "text" },
      { name: "Descripción", type: "text" },
      { name: "Asignado a", type: "text" },
      {
        name: "Prioridad",
        type: "select",
        options: ["Baja", "Media", "Alta", "Crítica"],
      },
      {
        name: "Estado",
        type: "select",
        options: ["Pendiente", "En Progreso", "Revisión", "Completada"],
      },
      { name: "Fecha Inicio", type: "date" },
      { name: "Fecha Vencimiento", type: "date" },
      { name: "Progreso", type: "number" },
    ],
  },
  {
    id: "default",
    name: "Tabla Vacía",
    description:
      "Comienza con una tabla básica y personaliza según tus necesidades",
    category: "other",
    columns: [
      { name: "ID", type: "text" },
      { name: "Nombre", type: "text" },
      { name: "Descripción", type: "text" },
      { name: "Fecha", type: "date" },
      { name: "Activo", type: "status" },
    ],
  },
];

export const useTableStore = create<TableStore>()(
  persist(
    (set, get) => ({
      tables: [],

      addTable: (formData: TableFormData) => {
        const template = tableTemplates.find((t) => t.id === formData.template);
        const tableId = Date.now().toString();

        const columns: Column[] =
          template?.columns.map((col, index) => ({
            id: `col_${index}`,
            name: col.name,
            type: col.type as Column["type"],
            required: false,
            options: col.options
              ? col.options.map((opt) => ({ value: opt, color: "#3b82f6" }))
              : undefined,
          })) || [];

        const newTable: TableData = {
          id: tableId,
          title: formData.name,
          description: formData.description,
          category: formData.category,
          color: formData.color,
          columns,
          rows: [],
          createdAt: new Date().toISOString().split("T")[0],
          lastModified: new Date().toISOString().split("T")[0],
        };

        set((state) => ({
          tables: [...state.tables, newTable],
        }));

        return tableId;
      },

      updateTable: (id: string, updatedTable: TableData) => {
        set((state) => ({
          tables: state.tables.map((table) =>
            table.id === id ? updatedTable : table
          ),
        }));
      },

      deleteTable: (id: string) => {
        set((state) => ({
          tables: state.tables.filter((table) => table.id !== id),
        }));
      },

      getTable: (id: string) => {
        return get().tables.find((table) => table.id === id);
      },
    }),
    {
      name: "table-storage",
    }
  )
);
