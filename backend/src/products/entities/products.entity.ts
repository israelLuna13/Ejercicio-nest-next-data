import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Products {
  @PrimaryGeneratedColumn()
  product_id: number;

  @Column({ type: 'varchar', length: 15 })
  stockcode: string;

  @Column({ type: 'varchar', length: 60 })
  description: string;
}
