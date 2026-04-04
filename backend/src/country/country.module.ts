import { Module } from '@nestjs/common';
import { CountryService } from './country.service';
import { CountryController } from './country.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Country } from './entities/country.entity';
import { Customers } from 'src/customers/entities/customer.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Country, Customers])],
  controllers: [CountryController],
  providers: [CountryService],
})
export class CountryModule {}
