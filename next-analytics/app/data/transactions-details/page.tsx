import DataTransactionsDetails from "@/components/data/DataTransactionsDetails"
import Heading from "@/components/UI/Heading"
import Pagination from "@/components/UI/Pagination"
import { TransactionsDetailsSchema } from "@/src/shemas"
import { isValidPage } from "@/src/utils"
import { notFound, redirect } from "next/navigation"

async function getTransactionsDetails(take: number, skip: number){
  const url = `${process.env.API_URL}/transactions-details?take=${take}&skip=${skip}`
  const req = await fetch(url)
  const json = await req.json()
  
  if(!req.ok) notFound()
  const data = TransactionsDetailsSchema.parse(json)
  return {
    transactions_details: data.transactions_details,
    total: data.total
  }
  
}
type SearchParams = Promise<{ page: string}>

export default async function page({searchParams}:{searchParams: SearchParams}) {
     const { page } = await searchParams;   
          if (!isValidPage(+page)) redirect("/data/transactions-details?page=1");
          const dataPerPage = 200;
          const skip = (+page - 1) * dataPerPage;
           const {transactions_details, total} = await getTransactionsDetails(dataPerPage, skip);
           const totalPages = Math.ceil(total / dataPerPage);
           
  return (
    <>
        <Heading>Customers</Heading>
       
             <DataTransactionsDetails transactions_details={transactions_details} />
             <Pagination
               page={+page}
               totalPages={totalPages}
               baseUrl="/data/transactions-details"
             />
         
       </>
  )
}
