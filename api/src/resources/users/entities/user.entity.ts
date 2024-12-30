import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Expense } from '../../expenses/entities/expense.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'email' })
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Expense, (expense) => expense.user)
  expenses: Expense[];
}
