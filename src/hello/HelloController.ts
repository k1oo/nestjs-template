import { Controller, Get } from '@nestjs/common';

@Controller('/hello')
export class HelloController {
  constructor() {}

  @Get('/hello')
  async hello() {
    return 'Hello, world';
  }
}
