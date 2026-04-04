import { Column, Entity, PrimaryColumn } from 'typeorm';
@Entity()
export class SalesPerCountry {
  @PrimaryColumn()
  country: string;

  @Column({ type: 'decimal' })
  total_sales_per_country: number;
}
