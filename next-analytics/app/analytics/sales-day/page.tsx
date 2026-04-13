import DataSalesDay from "@/components/analytics/DataSalesDay"
import Heading from "@/components/UI/Heading"
import Pagination from "@/components/UI/Pagination"
import { SalesDaySchema } from "@/src/shemas"
import { isValidPage } from "@/src/utils"
// import Link from "next/link"
import { notFound, redirect } from "next/navigation"

async function getSalesDay(take: number, skip: number){
  const url = `${process.env.API_URL}/analytics/sales-day?take=${take}&skip=${skip}`
  const req = await fetch(url)
  const json = await req.json()
  if(!req.ok) notFound()
  const data = SalesDaySchema.parse(json)
  return {
    salesDay: data.salesDay,
    total: data.total
  }
  
}
type SearchParams = Promise<{ page: string}>
export default  async function page({searchParams}:{searchParams: SearchParams}) {
   const { page } = await searchParams;   
  if (!isValidPage(+page)) redirect("/analytics/sales-day?page=1");
  const dataPerPage = 20;
  const skip = (+page - 1) * dataPerPage;
   const {salesDay, total} = await getSalesDay(dataPerPage, skip);
   const totalPages = Math.ceil(total / dataPerPage);

  return (
    <>
      {/* <Link
        href={"/admin/products/new"}
        className="rounded bg-green-400 font-bold py-2 px-10"
      >
        New Product
      </Link> */}
      <Heading>Sales Day</Heading>

      <DataSalesDay salesDay={salesDay} />
      <Pagination
        page={+page}
        totalPages={totalPages}
        baseUrl="/analytics/sales-day"
      />
    </>
  )
}
