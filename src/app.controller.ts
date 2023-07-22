import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): any {
    return {
      hi: 'bro',
    };
  }

  @Get('/cats')
  findAll(): string {
    return 'Nest js';
  }
}
