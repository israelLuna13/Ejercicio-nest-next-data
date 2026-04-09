// app/page.jsx

import Card from "@/components/UI/Card";
import { Globe, Package, Users } from "lucide-react";

export default function Home() {
  const sections = [
    {
      title: "Productos",
      description: "Gestiona los productos",
      href: "/productos",
      icon: Package,
    },
    {
      title: "Países",
      description: "Ver países",
      href: "/paises",
      icon: Globe,
    },
    {
      title: "Usuarios",
      description: "Administrar usuarios",
      href: "/usuarios",
      icon: Users,
    },
        {
      title: "Transacciones",
      description: "",
      href: "/transactions",
      icon: Users,
    },
        {
      title: "Details transactions",
      description: "Administrar usuarios",
      href: "/details-transactions",
      icon: Users,
    },
        {
      title: "Sales per day",
      description: "Ventas por dia",
      href: "/analytics/sales-day",
      icon: Users,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Panel principal</h1>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {sections.map((section) => (
          <Card key={section.title} {...section} />
        ))}
      </div>
    </div>
  );
}