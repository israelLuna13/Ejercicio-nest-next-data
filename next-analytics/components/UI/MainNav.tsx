"use server"
export default async function MainNav() {
    
  return (
    <header className="px-10 py-5 bg-gray-700 flex flex-col md:flex-row justify-between ">
      <div className="flex justify-center">
      </div>

      <nav className="flex flex-col md:flex-row gap-2 items-center mt-5 md:mt-0 py-2">
          {/* <Link
            href={`/`}
            
          >
            Liink
          </Link> */}
      </nav>
      {/* <Link
        href={"/admin/sales/"}
        className=" bg-green-500 font-bold my-3 px-10 py-2"
      >
        Panel Administrator
      </Link> */}
    </header>
  );
}