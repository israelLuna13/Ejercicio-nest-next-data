import Link from "next/link";

export default function AnalyticNav() {
  return (
    <header className="px-10 py-5 bg-gray-700 flex justify-between">
      <div className="flex gap-5 text-white">
        logo
      </div>

      <div className="flex gap-2 items-center">
        <Link
          href={"/admin/products"}
          className="rounded text-white font-bold p-2"
        >
          --
        </Link>

        <Link
          href={"/admin/sales"}
          className="rounded text-white font-bold p-2"
        >
          --
        </Link>

        <Link href={"/"} className="rounded bg-green-400 font-bold py-2 px-10">
          --
        </Link>
      </div>
    </header>
  );
}
