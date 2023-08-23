import { Module } from '@nestjs/common';
import { CryptoController } from './crypto.controller';

@Module({
  imports: [],
  controllers: [CryptoController],
  providers: [],
})
export class CryptoModule {}
