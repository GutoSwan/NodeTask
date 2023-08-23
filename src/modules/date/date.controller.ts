import { Controller, Get } from '@nestjs/common';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { sendError } from 'src/common/response-error';
import { sendSuccess } from 'src/common/response-success';

@Controller('date')
export class DateController {
  constructor() {}
  @Get()
  getDate() {
    try {
      const data = new Date();
      const formatoPersonalizado = "dd 'de' MMMM 'de' yyyy, HH:mm";
      const dataFormatada = format(data, formatoPersonalizado, {
        locale: ptBR,
      });
      return sendSuccess(dataFormatada);
    } catch (error) {
      return sendError(error);
    }
  }
}
