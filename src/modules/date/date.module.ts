import { Module } from '@nestjs/common';
import { DateController } from './date.controller';

@Module({
  imports: [],
  controllers: [DateController],
  providers: [],
})
export class DateModule {}
