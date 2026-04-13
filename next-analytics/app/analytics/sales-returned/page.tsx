import DataSaleReturned from "@/components/analytics/DataSalesReturned"
import Pagination from "@/components/UI/Pagination"
import { SalesReturnedSchema } from "@/src/shemas"
import { isValidPage } from "@/src/utils"
import { Heading } from "lucide-react"
import { notFound, redirect } from "next/navigation"

async function getSalesReturned(take: number, skip: number){
  const url = `${process.env.API_URL}/analytics/sales-returned?take=${take}&skip=${skip}`
  const req = await fetch(url)
  const json = await req.json()
  if(!req.ok) notFound()
  const data = SalesReturnedSchema.parse(json)
  return {
    salesReturned: data.salesReturned,
    total: data.total
  }
  
}
type SearchParams = Promise<{ page: string}>
export default async function page({searchParams}:{searchParams: SearchParams}) {
    const { page } = await searchParams;   
      if (!isValidPage(+page)) redirect("/analytics/sales-returned?page=1");
      const dataPerPage = 200;
      const skip = (+page - 1) * dataPerPage;
       const {salesReturned, total} = await getSalesReturned(dataPerPage, skip);
       const totalPages = Math.ceil(total / dataPerPage);
  return (
    <>
    <Heading>Sales returned</Heading>
    
          <DataSaleReturned salesReturned={salesReturned} />
          <Pagination
            page={+page}
            totalPages={totalPages}
            baseUrl="/analytics/sales-returned"
          />
      
    </>
  )
}
