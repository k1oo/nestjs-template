import { Module } from '@nestjs/common';
import { getMySqlRealTypeOrmModule } from '../lib/entity/getMySqlRealTypeOrmModule';

@Module({
  imports: [getMySqlRealTypeOrmModule()],
})
export class AppModule {}
