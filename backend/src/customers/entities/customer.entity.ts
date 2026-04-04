import { Country } from 'src/country/entities/country.entity';
import { Transactions } from 'src/transactions/entities/transaction.entity';
import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
@Entity()
export class Customers {
  @PrimaryGeneratedColumn()
  customer_id: number;

  @Column()
  customerid: number;

  @Column()
  country_id: number;

  @ManyToOne(() => Country, (country) => country.customers)
  @JoinColumn({ name: 'country_id' }) // conecta con la FK real
  country: Country;

  @OneToMany(() => Transactions, (transaction) => transaction.customer)
  transactions: Transactions[];
}
