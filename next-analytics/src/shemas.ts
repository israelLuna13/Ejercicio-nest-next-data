import z from 'zod'
export const SaleDaySchema = z.object({
    day: z.string(),
    total_sale_per_day: z.number(),
})

export const SaleCountrySchema = z.object({
    country: z.string(),
    total_sales_per_country: z.number(),
})

export const SaleReturnedSchema= z.object({
  transaction_id:z.number(),
  quantity_returned: z.string(),
  total_amount_returned:z.number()
})

export const TopCustomerSchema = z.object({
  customer_id:z.number(),
  top_customers:z.number()
})

export const TopProductSchema = z.object({
  product_id:z.number(),
  description:z.string(),
  stockcode:z.string(),
  top_product_money:z.number()
})

//--------------
export const SalesDaySchema= z.object({
  salesDay:z.array(SaleDaySchema),
  total:z.number()
})

export const SalesCountrySchema= z.object({
  salesCountry:z.array(SaleCountrySchema),
  total:z.number()
})

export const SalesReturnedSchema= z.object({
  salesReturned:z.array(SaleReturnedSchema),
  total:z.number()
})
export const TopCustomersSchema= z.object({
  topCustomers:z.array(TopCustomerSchema),
  total:z.number()
})
export const TopProductsSchema= z.object({
  topProducts:z.array(TopProductSchema),
  total:z.number()
})
export type SaleCountry = z.infer<typeof SaleCountrySchema>
export type SaleDay = z.infer<typeof SaleDaySchema>
export type SaleReturned = z.infer<typeof SaleReturnedSchema>
export type TopCustomer = z.infer<typeof TopCustomerSchema>
export type TopPorduct = z.infer<typeof TopProductSchema>

