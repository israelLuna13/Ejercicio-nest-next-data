import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transactions } from './entities/transaction.entity';
import { Customers } from 'src/customers/entities/customer.entity';
import { TransactionsDetails } from 'src/transactions_details/entities/transactions_detail.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Transactions, Customers, TransactionsDetails]),
  ],
  controllers: [TransactionsController],
  providers: [TransactionsService],
})
export class TransactionsModule {}
