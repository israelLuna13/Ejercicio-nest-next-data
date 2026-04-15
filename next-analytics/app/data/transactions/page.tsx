import DataTransactions from "@/components/data/DataTransactions"
import Heading from "@/components/UI/Heading"
import Pagination from "@/components/UI/Pagination"
import { TransactionsSchema } from "@/src/shemas"
import { isValidPage } from "@/src/utils"
import { notFound, redirect } from "next/navigation"

async function getTransactions(take: number, skip: number){
  const url = `${process.env.API_URL}/transactions?take=${take}&skip=${skip}`
  const req = await fetch(url)
  const json = await req.json()
  
  if(!req.ok) notFound()
  const data = TransactionsSchema.parse(json)
  return {
    transactions: data.transactions,
    total: data.total
  }
  
}
type SearchParams = Promise<{ page: string}>

export default async function page({searchParams}:{searchParams: SearchParams}) {
     const { page } = await searchParams;   
          if (!isValidPage(+page)) redirect("/data/transactions?page=1");
          const dataPerPage = 200;
          const skip = (+page - 1) * dataPerPage;
           const {transactions, total} = await getTransactions(dataPerPage, skip);
           const totalPages = Math.ceil(total / dataPerPage);
           
  return (
    <>
        <Heading>Customers</Heading>
       
             <DataTransactions transactions={transactions} />
             <Pagination
               page={+page}
               totalPages={totalPages}
               baseUrl="/data/transactions"
             />
         
       </>
  )
}
