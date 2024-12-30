import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({})
export class DatabaseModule {
  static async forRoot(): Promise<DynamicModule> {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return {
      module: DatabaseModule,
      imports: [
        TypeOrmModule.forRoot({
          host: process.env.DB_HOST,
          port: 5432,
          username: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME,
          entities: ['dist/resources/**/*.entity.js'],
          synchronize: true,
          keepConnectionAlive: true,
          retryAttempts: 2,
          retryDelay: 1000,
        }),
      ],
    };
  }
}
