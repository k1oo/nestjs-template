import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sample } from './Sample.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sample])],
  exports: [TypeOrmModule],
})
export class SampleEntityModule {}
