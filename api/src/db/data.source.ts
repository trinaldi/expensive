import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';

config();

export const dbdatasource: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ['dist/resources/**/*.entity.js'],
  synchronize: true,
  migrations: ['dist/db/migrations/*.js'],
  migrationsTableName: 'migrations',
};

const dataSource = new DataSource(dbdatasource);
export default dataSource;
