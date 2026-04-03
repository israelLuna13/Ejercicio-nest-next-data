import { Module } from '@nestjs/common';
import { SalesController } from './sales.controller';
import { Sales } from './sales';

@Module({
  controllers: [SalesController],
  providers: [Sales]
})
export class SalesModule {}
