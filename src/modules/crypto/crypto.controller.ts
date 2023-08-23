import { Body, Controller, Post } from '@nestjs/common';
import * as CryptoJS from 'crypto-js';
import { sendError } from 'src/common/response-error';
import { sendSuccess } from 'src/common/response-success';

@Controller('crypto')
export class CryptoController {
  constructor() {}
  @Post('decrypt')
  decrypt(@Body() data: { text: string }) {
    try {
      const decrypted = CryptoJS.AES.decrypt(
        data.text,
        'chave_publica',
      ).toString(CryptoJS.enc.Utf8);
      return sendSuccess(decrypted);
    } catch (error) {
      return sendError(error);
    }
  }
  @Post('encrypt')
  encrypt(@Body() data: { text: string }) {
    try {
      const { text } = data;
      const encrypted = CryptoJS.AES.encrypt(text, 'chave_publica').toString();
      return sendSuccess(encrypted);
    } catch (error) {
      return sendError(error);
    }
  }
}
