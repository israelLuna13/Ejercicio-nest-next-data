
import AnalyticNav from "@/components/UI/AnalyticNav";
import "../globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
 <>
    <AnalyticNav/>
        <div className="lg:min-h-screen container mx-auto mt-10 px-10 lg:px-0">
          <div className="bg-white shadow w-full  mx-auto p-10 my-10 lg:w-3/5" >
            {children}
          </div>
        </div>
 </>
  );
}
