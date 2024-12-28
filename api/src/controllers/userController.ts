import { Request, Response } from 'express';
import { UserService } from '../services/userService';

const userService = new UserService();

export const createUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    const newUser = await userService.createUser(name, email, password);
    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    const e = error as Error;
    res.status(500).json({ message: 'Error creating user', error: e.message });
  }
};

export const findUserByEmail: any = async (req: Request, res: Response) => {
  const { email } = req.params;

  try {
    const user = await userService.findUserByEmail(email);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    const e = error as Error;
    res.status(500).json({ message: 'Error finding user', error: e.message });
  }
};
