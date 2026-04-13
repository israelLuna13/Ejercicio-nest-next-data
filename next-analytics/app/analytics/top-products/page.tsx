import DataTopProducts from "@/components/analytics/DataTopProducts"
import Heading from "@/components/UI/Heading"
import Pagination from "@/components/UI/Pagination"
import { TopProductsSchema } from "@/src/shemas"
import { isValidPage } from "@/src/utils"
import { notFound, redirect } from "next/navigation"

async function getTopProducts(take: number, skip: number){
  const url = `${process.env.API_URL}/analytics/top-products?take=${take}&skip=${skip}`
  const req = await fetch(url)
  const json = await req.json()
  if(!req.ok) notFound()
  const data = TopProductsSchema.parse(json)
  return {
    topProducts: data.topProducts,
    total: data.total
  }
  
}
type SearchParams = Promise<{ page: string}>

export default async function page({searchParams}:{searchParams: SearchParams}) {
    const { page } = await searchParams;   
      if (!isValidPage(+page)) redirect("/analytics/top-products?page=1");
      const dataPerPage = 200;
      const skip = (+page - 1) * dataPerPage;
       const {topProducts, total} = await getTopProducts(dataPerPage, skip);
       const totalPages = Math.ceil(total / dataPerPage);
  return (
    <>
     <Heading>Sales Day</Heading>
    
          <DataTopProducts topProducts={topProducts} />
          <Pagination
            page={+page}
            totalPages={totalPages}
            baseUrl="/analytics/top-products"
          />
      
    </>
  )
}
