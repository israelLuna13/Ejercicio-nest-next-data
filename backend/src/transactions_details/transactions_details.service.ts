import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTransactionsDetailDto } from './dto/create-transactions_detail.dto';
import { UpdateTransactionsDetailDto } from './dto/update-transactions_detail.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TransactionsDetails } from './entities/transactions_detail.entity';
import { FindManyOptions, Repository } from 'typeorm';

@Injectable()
export class TransactionsDetailsService {
  constructor(
    @InjectRepository(TransactionsDetails)
    private readonly transactionDetailssRepo: Repository<TransactionsDetails>,
  ) {}
  create(createTransactionsDetailDto: CreateTransactionsDetailDto) {
    return 'This action adds a new transactionsDetail';
  }

  async findAll(take: number, skip: number) {
    const options: FindManyOptions<TransactionsDetails> = {
      relations: {
        transaction: true,
      },
      take,
      skip,
    };
    const [transactions_details, total] =
      await this.transactionDetailssRepo.findAndCount(options);

    if (total === 0) {
      throw new NotFoundException('Transaction Not Found');
    }
    return { transactions_details, total };
  }

  findOne(id: number) {
    return `This action returns a #${id} transactionsDetail`;
  }

  update(id: number, updateTransactionsDetailDto: UpdateTransactionsDetailDto) {
    return `This action updates a #${id} transactionsDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} transactionsDetail`;
  }
}
