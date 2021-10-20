import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export function getMySqlRealTypeOrmModule() {
  return TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3308,
    username: 'test',
    password: 'test',
    database: 'test',
    entities: [path.join(__dirname, 'src/domain/**/*.entity.js')],
    autoLoadEntities: true,
    synchronize: true,
    logging: true,
    namingStrategy: new SnakeNamingStrategy(),
  });
}
