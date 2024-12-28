import express from 'express';
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';
import { AppDataSource } from './config/typeorm.config'; // Adjust path if needed

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
    // Your server setup goes here (e.g., start the express server)
  })
  .catch((error) => {
    console.error('Error during Data Source initialization:', error);
  });

const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api', userRoutes);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

