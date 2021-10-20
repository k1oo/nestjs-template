import { Controller, Get } from '@nestjs/common';

@Controller('/hello')
export class HelloController {
  constructor() {}

  @Get('/')
  async hello() {
    return 'Hello, world';
  }
}
