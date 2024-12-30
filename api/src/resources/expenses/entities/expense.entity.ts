import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity('expenses')
export class Expense {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('decimal', { precision: 10, scale: 2 })
  amount: number;

  @Column()
  description: string;

  @Column()
  date: Date;

  @ManyToOne(() => User, (user) => user.expenses, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: User;
}
