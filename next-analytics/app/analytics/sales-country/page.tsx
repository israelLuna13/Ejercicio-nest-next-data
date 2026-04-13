import { SalesCountrySchema } from "@/src/shemas"
import notFound from "../not-found"
import { isValidPage } from "@/src/utils"
import { redirect } from "next/navigation"
import Heading from "@/components/UI/Heading"
import DataSalesCountry from "@/components/analytics/DataSalesCountry"
import Pagination from "@/components/UI/Pagination"

async function getSalesCountry(take:number, skip:number){
    const url = `${process.env.API_URL}/analytics/sales-country?take=${take}&skip=${skip}`
    const req= await fetch(url)
    const json = await req.json()
    if(!req.ok) notFound()
    const data = SalesCountrySchema.parse(json)


    return {
        salesCountry:data.salesCountry,
        total:data.total
    }
}
type SearchParams = Promise<{ page: string}>
export default async function page({searchParams}:{searchParams: SearchParams}) {

       const { page } = await searchParams;   
      if (!isValidPage(+page)) redirect("/analytics/sales-country?page=1");
      const dataPerPage = 10;
      const skip = (+page - 1) * dataPerPage;
       const  {salesCountry,total} = await getSalesCountry(dataPerPage, skip);
       const totalPages = Math.ceil(total / dataPerPage);
    
    
    
  return (
    <>
      <Heading>Sales Country</Heading>
      <DataSalesCountry salesCountry={salesCountry}/>
      <Pagination page={+page} totalPages={totalPages} baseUrl="/analytics/sales-country"/>
    </>
  )
}
