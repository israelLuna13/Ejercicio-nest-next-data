import { Customers } from 'src/customers/entities/customer.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
@Entity()
export class Country {
  @PrimaryGeneratedColumn()
  country_id: number;

  @Column({ type: 'varchar', length: 30 })
  country: string;

  @OneToMany(() => Customers, (customer) => customer.country)
  customers: Customers[];
}
