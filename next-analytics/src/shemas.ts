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
export const ProductSchema = z.object({
  product_id:z.number(),
  description:z.string(),
  stockcode:z.string(),
})
export const CountrySchema = z.object({
  country_id:z.number(),
  country:z.string()
})

export const CustomerSchema = z.object({
  customer_id:z.number(),
  customerid:z.number(),
  country_id:z.number(),
  country:z.object({
     country_id:z.number(),
  country:z.string()
  })
})

export const TransactionSchema = z.object({
  transaction_id: z.number(),
  invoiceno: z.string(),
  invoicedate: z.string(),
  type: z.string(),
  customer:z.object ({
    customer_id: z.number(),
    customerid: z.number(),
    country_id: z.number(),
  }),
});

export const TransactionDetailsSchema = z.object({
  transaction__details_id: z.number(),
  quantity: z.number(),
  unitprice: z.number(),
  transaction_id: z.number(),
  transaction: z.object({
    transaction_id: z.number(),
    invoiceno: z.string(),
    invoicedate: z.string(),
    type: z.string(),
  }),
});

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

export const ProductsSchema= z.object({
  products:z.array(ProductSchema),
  total:z.number()
})
export const CountrysSchema= z.object({
  countrys:z.array(CountrySchema),
  total:z.number()
})
export const CustomersSchema= z.object({
  customers:z.array(CustomerSchema),
  total:z.number()
})
export const TransactionsSchema= z.object({
  transactions:z.array(TransactionSchema),
  total:z.number()
})

export const TransactionsDetailsSchema= z.object({
  transactions_details:z.array(TransactionDetailsSchema),
  total:z.number()
})

export type SaleCountry = z.infer<typeof SaleCountrySchema>
export type SaleDay = z.infer<typeof SaleDaySchema>
export type SaleReturned = z.infer<typeof SaleReturnedSchema>
export type TopCustomer = z.infer<typeof TopCustomerSchema>
export type TopPorduct = z.infer<typeof TopProductSchema>
export type Product = z.infer<typeof ProductSchema>
export type Country = z.infer<typeof CountrySchema>
export type Customer = z.infer<typeof CustomerSchema>
export type Transaction = z.infer<typeof TransactionSchema>
export type TransactionDetail = z.infer<typeof TransactionDetailsSchema>






