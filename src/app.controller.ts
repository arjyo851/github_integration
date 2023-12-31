import { Controller, Get, Res } from '@nestjs/common';
import { createReadStream } from 'fs';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHtml(@Res() res: any): void {
    const file_path: string = this.appService.getHtmlPath();
    const file = createReadStream(file_path);
    file.pipe(res);
  }
}
