import { Customers } from 'src/customers/entities/customer.entity';
import { TransactionsDetails } from 'src/transactions_details/entities/transactions_detail.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
@Entity()
export class Transactions {
  @PrimaryGeneratedColumn()
  transaction_id: number;

  @Column({ type: 'varchar' })
  invoiceno: string;

  @Column({ type: 'date' })
  invoicedate: Date;

  @Column({ type: 'text' })
  type: string;

  @ManyToOne(() => Customers, (customer) => customer.transactions)
  @JoinColumn({ name: 'customer_id' })
  customer: Customers;

  @OneToMany(() => TransactionsDetails, (details) => details.transaction)
  details: TransactionsDetails[];
}
