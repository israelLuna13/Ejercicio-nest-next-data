import { Column, Entity, PrimaryColumn } from 'typeorm';
@Entity()
export class SalesPerDay {
  @PrimaryColumn()
  day: Date;

  @Column({ type: 'decimal' })
  total_sale_per_day: number;
}
