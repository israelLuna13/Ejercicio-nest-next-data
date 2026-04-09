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
import { AnalyticsService } from './analytics.service';
import { CreateAnalyticsDto } from './dto/create-analytics.dto';
import { UpdateAnalyticsDto } from './dto/update-analytics.dto';
import { GetDataQueryDto } from './dto/get-data.dto';

@Controller('analytics')
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Post()
  create(@Body() createAnalyticsDto: CreateAnalyticsDto) {
    return this.analyticsService.create(createAnalyticsDto);
  }

  @Get()
  findAll() {
    return this.analyticsService.findAll();
  }
  @Get('/sales-country')
  findSalesCountry(@Query() query: GetDataQueryDto) {
    const take = query.take ? query.take : 10;
    const skip = query.skip ? query.skip : 0;
    return this.analyticsService.findSalesCountry(take, skip);
  }

  @Get('/sales-day')
  findSalesDay(@Query() query: GetDataQueryDto) {
    const take = query.take ? query.take : 10;
    const skip = query.skip ? query.skip : 0;
    return this.analyticsService.findSalesDay(take, skip);
  }
  @Get('/sales-returned')
  findSalesreturned(@Query() query: GetDataQueryDto) {
    const take = query.take ? query.take : 10;
    const skip = query.skip ? query.skip : 0;
    return this.analyticsService.findSalesReturned(take, skip);
  }

  @Get('/top-customers')
  findTopCustomers(@Query() query: GetDataQueryDto) {
    const take = query.take ? query.take : 10;
    const skip = query.skip ? query.skip : 0;
    return this.analyticsService.findTopCustomers(take, skip);
  }

  @Get('/top-products')
  findTopProducts(@Query() query: GetDataQueryDto) {
    const take = query.take ? query.take : 10;
    const skip = query.skip ? query.skip : 0;
    return this.analyticsService.findTopProducts(take, skip);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.analyticsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAnalyticsDto: UpdateAnalyticsDto,
  ) {
    return this.analyticsService.update(+id, updateAnalyticsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.analyticsService.remove(+id);
  }
}
