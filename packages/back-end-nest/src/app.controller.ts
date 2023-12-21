import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':test')
  getHello(@Param() params): string {
    console.log(params);

    return params.test;
  }

  @Get('test2')
  findAll(): string {
    return 'This action returns all cats';
  }
}
