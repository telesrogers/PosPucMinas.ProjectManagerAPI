import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({ summary: 'Ignorar - Hello World para testes apenas' })
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
//TODO: Delete this file
