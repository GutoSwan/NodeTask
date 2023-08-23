import { Module } from '@nestjs/common';
import { DateModule } from './modules/date/date.module';
import { ExchangeRatesModule } from './modules/exchange-rates/exchange-rates.module';
import { CryptoModule } from './modules/crypto/crypto.module';

@Module({
  imports: [DateModule, ExchangeRatesModule, CryptoModule],
})
export class AppModule {
  constructor() {}
}
