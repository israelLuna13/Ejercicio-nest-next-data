import DataCountrys from "@/components/data/DataCountrys"
import Heading from "@/components/UI/Heading"
import Pagination from "@/components/UI/Pagination"
import { CountrysSchema } from "@/src/shemas"
import { isValidPage } from "@/src/utils"
import { notFound, redirect } from "next/navigation"

async function getCountry(take: number, skip: number){
  const url = `${process.env.API_URL}/country?take=${take}&skip=${skip}`
  const req = await fetch(url)
  const json = await req.json()
  if(!req.ok) notFound()
  const data = CountrysSchema.parse(json)
  return {
    countrys: data.countrys,
    total: data.total
  }
  
}
type SearchParams = Promise<{ page: string}>

export default async function page({searchParams}:{searchParams: SearchParams}) {
     const { page } = await searchParams;   
          if (!isValidPage(+page)) redirect("/data/country?page=1");
          const dataPerPage = 10;
          const skip = (+page - 1) * dataPerPage;
           const {countrys, total} = await getCountry(dataPerPage, skip);
           const totalPages = Math.ceil(total / dataPerPage);
  return (
    <>
        <Heading>Country</Heading>
       
             <DataCountrys countrys={countrys} />
             <Pagination
               page={+page}
               totalPages={totalPages}
               baseUrl="/data/country"
             />
         
       </>
  )
}
