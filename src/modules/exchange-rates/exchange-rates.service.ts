import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ExchangeRatesService {
  private apiKey = '50ea96fecfe04e199efe0b762fa608a6';
  private baseUrl = 'https://openexchangerates.org/api/latest.json';

  async getExchangeRates(): Promise<{ [key: string]: number }> {
    const response = await axios.get(this.baseUrl, {
      params: {
        app_id: this.apiKey,
      },
    });

    return response.data.rates;
  }
}
