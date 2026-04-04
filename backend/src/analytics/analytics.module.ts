import { Module } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { AnalyticsController } from './analytics.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalesPerCountry } from './entities/sales-per-country.entity';
import { SalesPerDay } from './entities/sales-per-day.entity';
import { SalesReturned } from './entities/sales-returned.entity';
import { TopCustomers } from './entities/top-customers.entity';
import { TopProductsIncome } from './entities/top-products-income.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      SalesPerCountry,
      SalesPerDay,
      SalesReturned,
      TopCustomers,
      TopProductsIncome,
    ]),
  ],
  controllers: [AnalyticsController],
  providers: [AnalyticsService],
})
export class AnalyticsModule {}
