import { Body, Controller, Post } from '@nestjs/common';
import * as CryptoJS from 'crypto-js';

@Controller('crypto')
export class CryptoController {
  constructor() {}
  @Post('decrypt')
  decrypt(@Body() data: { text: string }): string {
    const decrypted = CryptoJS.AES.decrypt(data.text, 'chave_publica').toString(
      CryptoJS.enc.Utf8,
    );
    return decrypted;
  }
  @Post('encrypt')
  encrypt(@Body() data: { text: string }): string {
    const encrypted = CryptoJS.AES.encrypt(
      data.text,
      'chave_publica',
    ).toString();
    return encrypted;
  }
}
