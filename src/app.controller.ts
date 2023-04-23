import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('root')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('next')
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('world')
  getWorld(): string {
    return this.appService.getHello();
  }
}
