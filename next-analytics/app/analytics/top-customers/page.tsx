import DataTopCustomers from "@/components/analytics/DataTopCustomers"
import Pagination from "@/components/UI/Pagination"
import { TopCustomersSchema } from "@/src/shemas"
import { isValidPage } from "@/src/utils"
import { Heading } from "lucide-react"
import { notFound, redirect } from "next/navigation"

async function getTopCustomers(take: number, skip: number){
  const url = `${process.env.API_URL}/analytics/top-customers?take=${take}&skip=${skip}`
  const req = await fetch(url)
  const json = await req.json()
  if(!req.ok) notFound()
  const data = TopCustomersSchema.parse(json)
  return {
    topCustomers: data.topCustomers,
    total: data.total
  }
  
}
type SearchParams = Promise<{ page: string}>

export default async function page({searchParams}:{searchParams: SearchParams}) {
    const { page } = await searchParams;   
      if (!isValidPage(+page)) redirect("/analytics/top-customers?page=1");
      const dataPerPage = 20;
      const skip = (+page - 1) * dataPerPage;
       const {topCustomers, total} = await getTopCustomers(dataPerPage, skip);
       const totalPages = Math.ceil(total / dataPerPage);
  return (
    <>
       <Heading>Sales Day</Heading>
    
          <DataTopCustomers topCustomers={topCustomers} />
          <Pagination
            page={+page}
            totalPages={totalPages}
            baseUrl="/analytics/top-customers"
          />
      
    </>
  )
}
