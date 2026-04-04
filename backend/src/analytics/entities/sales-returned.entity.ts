import { Column, Entity, PrimaryColumn } from 'typeorm';
@Entity()
export class SalesReturned {
  @PrimaryColumn()
  transaction_id: number;

  @Column({ type: 'int' })
  quantity_returned: number;

  @Column({ type: 'float' })
  total_amount_returned: number;
}
