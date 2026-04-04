import { PartialType } from '@nestjs/mapped-types';
import { CreateTransactionsDetailDto } from './create-transactions_detail.dto';

export class UpdateTransactionsDetailDto extends PartialType(CreateTransactionsDetailDto) {}
