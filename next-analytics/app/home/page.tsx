// app/page.jsx

import Card from "@/components/UI/Card";
import { Globe, Package, Users, Store } from "lucide-react";

export default function Home() {
  const sections = [
    {
      title: "Products",
      description: "All products",
      href: "/data/products",
      icon: Package,
    },
    {
      title: "Countrys",
      description: "All Countrys",
      href: "/data/country",
      icon: Globe,
    },
    {
      title: "Customers",
      description: "All Customers",
      href: "/data/customers",
      icon: Users,
    },
        {
      title: "Transactions",
      description: "",
      href: "/data/transactions",
      icon: Users,
    },
        {
      title: "Details transactions",
      description: "",
      href: "/data/transactions-details",
      icon: Users,
    },
        {
      title: "Sales per day",
      description: "Ventas por dia",
      href: "/analytics/sales-day",
      icon: Store,
    },
       {
      title: "Sales Country",
      description: "",
      href: "/analytics/sales-country",
      icon: Users,
    },
       {
      title: "Sales returned",
      description: "",
      href: "/analytics/sales-returned",
      icon: Store,
    },
     {
      title: "Top customers",
      description: "Ventas por dia",
      href: "/analytics/top-customers",
      icon: Store,
    },
      {
      title: "Top Products",
      description: "",
      href: "/analytics/top-products",
      icon: Store,
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