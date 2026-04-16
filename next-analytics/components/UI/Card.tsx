// app/components/Card.jsx

import { LucideProps } from "lucide-react";
import Link from "next/link";
import { ForwardRefExoticComponent, RefAttributes } from "react";
type Cardprops = {
  title: string;
  description: string;
  href: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
};
export default function Card({
  title,
  description,
  href,
  icon: Icon,
}: Cardprops) {
  return (
    <Link href={href}>
      <div
        className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 
                      hover:shadow-xl hover:scale-105 transition cursor-pointer"
      >
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 mb-4">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>

        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
      </div>
    </Link>
  );
}
