import { Controller, Get, Header, Query, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('getHello')
  @Header('Cache-Control', 'no-store')
  getHello(@Query() query: any): object {
    const { test } = query;
    return { data: test + 'get' };
  }

  @Post('findAll')
  findAll(@Body() body: any): object {
    const { test } = body;
    return {
      data: test + 'post',
    };
  }
}
