import { Column, Entity, PrimaryColumn } from 'typeorm';
@Entity()
export class TopProductsIncome {
  @PrimaryColumn()
  product_id: number;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'text' })
  stockcode: string;

  @Column({ type: 'decimal' })
  top_product_money: number;
}
