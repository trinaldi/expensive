import { Request, Response } from 'express';
import { UserService } from '../services/userService';

const userService = new UserService();

export const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = userService.validatePassword(email, password);

    res.status(200).json({ message: 'login successful', user: user });
  } catch (e: any) {
    res.status(401).json({ message: e.message});
  }
};
