import { CreateAnalyticsDto } from './dto/create-analytics.dto';
import { UpdateAnalyticsDto } from './dto/update-analytics.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SalesPerCountry } from './entities/sales-per-country.entity';
import { Repository } from 'typeorm';
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
  async findSalesCountry() {
    const salesCountry = await this.salesCountryRepo.find({ take: 10 });
    if (salesCountry.length === 0) {
      throw new NotFoundException('There are not data');
    }
    return salesCountry;
  }

  async findSalesDay() {
    const salesDay = await this.salesDayRepo.find({ take: 10 });
    if (salesDay.length === 0) {
      throw new NotFoundException('There are not data');
    }
    return salesDay;
  }
  async findSalesReturned() {
    const salesReturned = await this.salesReturnedRepo.find({ take: 10 });
    if (salesReturned.length === 0) {
      throw new NotFoundException('There are not data');
    }
    return salesReturned;
  }

  async findTopCustomers() {
    const topCustomers = await this.topCustomersRepo.find({ take: 10 });
    if (topCustomers.length === 0) {
      throw new NotFoundException('There are not data');
    }
    return topCustomers;
  }

  async findTopProducts() {
    const topProducts = await this.topProductsRepo.find({ take: 10 });
    if (topProducts.length === 0) {
      throw new NotFoundException('There are not data');
    }
    return topProducts;
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
