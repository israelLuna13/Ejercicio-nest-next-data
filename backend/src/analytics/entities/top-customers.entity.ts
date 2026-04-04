import { Column, Entity, PrimaryColumn } from 'typeorm';
@Entity()
export class TopCustomers{
  @PrimaryColumn()
  customer_id: number;

  @Column({ type: 'decimal' })
  top_customers: number;
}
