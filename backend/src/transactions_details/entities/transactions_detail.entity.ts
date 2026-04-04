import { Transactions } from 'src/transactions/entities/transaction.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
@Entity()
export class TransactionsDetails {
  @PrimaryGeneratedColumn()
  transaction__details_id: number;

  @Column({ type: 'int' })
  quantity: number;

  @Column({ type: 'float' })
  unitprice: number;

  @Column()
  transaction_id: number;

  @ManyToOne(() => Transactions, (transaction) => transaction.details)
  @JoinColumn({ name: 'transaction_id' })
  transaction: Transactions;
}
