import { Module } from '@nestjs/common';
import { TransactionsDetailsService } from './transactions_details.service';
import { TransactionsDetailsController } from './transactions_details.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from 'src/products/entities/products.entity';
import { Transactions } from 'src/transactions/entities/transaction.entity';
import { TransactionsDetails } from './entities/transactions_detail.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Products, Transactions, TransactionsDetails]),
  ],
  controllers: [TransactionsDetailsController],
  providers: [TransactionsDetailsService],
})
export class TransactionsDetailsModule {}
