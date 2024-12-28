import { DataSource } from 'typeorm';
import { User } from '../models/User';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost', // You can set this in your .env file
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'expensive',
  synchronize: true, // This auto-creates DB schema, set to false in production
  logging: true, // Set to false in production
  entities: [User], // Add all your entities here
  migrations: [],
  subscribers: [],
});

