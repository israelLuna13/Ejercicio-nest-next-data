import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { TransactionsDetailsService } from './transactions_details.service';
import { CreateTransactionsDetailDto } from './dto/create-transactions_detail.dto';
import { UpdateTransactionsDetailDto } from './dto/update-transactions_detail.dto';
import { GetTransactionsDetailsQueryDto } from './dto/get-transaction-details.dto';

@Controller('transactions-details')
export class TransactionsDetailsController {
  constructor(
    private readonly transactionsDetailsService: TransactionsDetailsService,
  ) {}

  @Post()
  create(@Body() createTransactionsDetailDto: CreateTransactionsDetailDto) {
    return this.transactionsDetailsService.create(createTransactionsDetailDto);
  }

  @Get()
  findAll(@Query() query: GetTransactionsDetailsQueryDto) {
    const take = query.take ? query.take : 10;
    const skip = query.skip ? query.skip : 0;
    return this.transactionsDetailsService.findAll(take, skip);
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transactionsDetailsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTransactionsDetailDto: UpdateTransactionsDetailDto,
  ) {
    return this.transactionsDetailsService.update(
      +id,
      updateTransactionsDetailDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transactionsDetailsService.remove(+id);
  }
}
