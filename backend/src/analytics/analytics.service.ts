import { CreateAnalyticsDto } from './dto/create-analytics.dto';
import { UpdateAnalyticsDto } from './dto/update-analytics.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SalesPerCountry } from './entities/sales-per-country.entity';
import { FindManyOptions, Repository } from 'typeorm';
import { SalesPerDay } from './entities/sales-per-day.entity';
import { SalesReturned } from './entities/sales-returned.entity';
import { TopCustomers } from './entities/top-customers.entity';
import { TopProductsIncome } from './entities/top-products-income.entity';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class AnalyticsService {
  constructor(
    @InjectRepository(SalesPerCountry)
    private readonly salesCountryRepo: Repository<SalesPerCountry>,
    @InjectRepository(SalesPerDay)
    private readonly salesDayRepo: Repository<SalesPerDay>,
    @InjectRepository(SalesReturned)
    private readonly salesReturnedRepo: Repository<SalesReturned>,
    @InjectRepository(TopCustomers)
    private readonly topCustomersRepo: Repository<TopCustomers>,
    @InjectRepository(TopProductsIncome)
    private readonly topProductsRepo: Repository<TopProductsIncome>,
  ) {}
  create(createAnalyticsDto: CreateAnalyticsDto) {
    return 'This action adds a new analytics';
  }

  findAll() {
    return `This action returns all analytics`;
  }
  async findSalesCountry(take: number, skip: number) {
    const options: FindManyOptions<SalesPerCountry> = {
      take,
      skip,
    };
    const [salesCountry, total] =
      await this.salesCountryRepo.findAndCount(options);
    if (total === 0) {
      throw new NotFoundException('There are not data');
    }
    return { salesCountry, total };
  }

  async findSalesDay(take: number, skip: number) {
    const options: FindManyOptions<SalesPerDay> = {
      take,
      skip,
    };
    const [salesDay, total] = await this.salesDayRepo.findAndCount(options);
    if (total === 0) {
      throw new NotFoundException('There are not data');
    }
    return { salesDay, total };
  }
  async findSalesReturned(take: number, skip: number) {
    const options: FindManyOptions<SalesReturned> = {
      take,
      skip,
    };
    const [salesReturned, total] =
      await this.salesReturnedRepo.findAndCount(options);
    if (total === 0) {
      throw new NotFoundException('There are not data');
    }
    return { salesReturned, total };
  }

  async findTopCustomers(take: number, skip: number) {
    const options: FindManyOptions<TopCustomers> = {
      take,
      skip,
    };
    const [topCustomers, total] =
      await this.topCustomersRepo.findAndCount(options);
    if (total === 0) {
      throw new NotFoundException('There are not data');
    }
    return { topCustomers, total };
  }

  async findTopProducts(take: number, skip: number) {
    const options: FindManyOptions<TopProductsIncome> = {
      take,
      skip,
    };
    const [topProducts, total] =
      await this.topProductsRepo.findAndCount(options);
    if (total === 0) {
      throw new NotFoundException('There are not data');
    }
    return { topProducts, total };
  }

  findOne(id: number) {
    return `This action returns a #${id} analytics`;
  }

  update(id: number, updateAnalyticsDto: UpdateAnalyticsDto) {
    return `This action updates a #${id} analytics`;
  }

  remove(id: number) {
    return `This action removes a #${id} analytics`;
  }
}
