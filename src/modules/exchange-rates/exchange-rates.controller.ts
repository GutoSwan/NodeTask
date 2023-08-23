import { Controller, Get, Query, BadRequestException } from '@nestjs/common';
import { ExchangeRatesService } from './exchange-rates.service';
import { sendSuccess } from 'src/common/response-success';
import { sendError } from 'src/common/response-error';

@Controller('exchange-rates')
export class ExchangeRatesController {
  constructor(private readonly exchangeRatesService: ExchangeRatesService) {}

  @Get('dolar')
  async getDolar(@Query('reais') reais: number) {
    try {
      if (!reais || isNaN(reais)) {
        throw new BadRequestException('Invalid input');
      }

      const exchangeRates = await this.exchangeRatesService.getExchangeRates();
      const convertedValue = (exchangeRates.BRL * reais).toLocaleString(
        'pt-BR',
        {
          style: 'currency',
          currency: 'BRL',
        },
      );
      return sendSuccess(convertedValue);
    } catch (error) {
      return sendError(error);
    }
  }

  @Get('euro')
  async getEuro(@Query('reais') reais: number) {
    try {
      if (!reais || isNaN(reais)) {
        throw new BadRequestException('Invalid input');
      }

      const exchangeRates = await this.exchangeRatesService.getExchangeRates();
      const convertedValue = (
        (exchangeRates.BRL / exchangeRates.EUR) *
        reais
      ).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      });
      return sendSuccess(convertedValue);
    } catch (error) {
      return sendError(error);
    }
  }
}
