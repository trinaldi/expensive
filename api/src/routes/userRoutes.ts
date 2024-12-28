import { Router } from 'express';
import { createUser, findUserByEmail } from '../controllers/userController';

const router = Router();

router.post('/user', createUser);

router.get('/users/:email', findUserByEmail);

export default router;

