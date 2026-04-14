import DataProducts from "@/components/data/DataProducts"
import Heading from "@/components/UI/Heading"
import Pagination from "@/components/UI/Pagination"
import { ProductsSchema } from "@/src/shemas"
import { isValidPage } from "@/src/utils"
import { notFound, redirect } from "next/navigation"

async function getProducts(take: number, skip: number){
  const url = `${process.env.API_URL}/products?take=${take}&skip=${skip}`
  const req = await fetch(url)
  const json = await req.json()
  if(!req.ok) notFound()
  const data = ProductsSchema.parse(json)
  return {
    products: data.products,
    total: data.total
  }
  
}
type SearchParams = Promise<{ page: string}>

export default async function page({searchParams}:{searchParams: SearchParams}) {
     const { page } = await searchParams;   
          if (!isValidPage(+page)) redirect("/data/products?page=1");
          const dataPerPage = 200;
          const skip = (+page - 1) * dataPerPage;
           const {products, total} = await getProducts(dataPerPage, skip);
           const totalPages = Math.ceil(total / dataPerPage);
  return (
    <>
        <Heading>Products</Heading>
       
             <DataProducts products={products} />
             <Pagination
               page={+page}
               totalPages={totalPages}
               baseUrl="/data/products"
             />
         
       </>
  )
}
