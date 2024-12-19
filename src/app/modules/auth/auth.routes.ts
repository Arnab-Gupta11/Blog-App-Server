import { Router } from 'express';
import { AuthControllers } from './auth.controller';

const router = Router();

router.route('/register').post(AuthControllers.registerUser);

export const AuthRoutes = router;
