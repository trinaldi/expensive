import { SeederOptions } from 'typeorm-extension';
import { config } from 'dotenv';
import { DataSourceOptions } from 'typeorm';

config();

export const dataSourceOptions: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ['dist/resources/**/*.entity.js'],
  synchronize: true,
  seeds: ['dist/db/seeds/**/*.js'],
};
