import { Router } from 'express';
import { AuthControllers } from './auth.controller';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidations } from '../user/user.validation';
import { AuthValidation } from './auth.validation';

const router = Router();

router
  .route('/register')
  .post(
    validateRequest(UserValidations.createUserValidationSchema),
    AuthControllers.registerUser,
  );
router.post(
  '/login',
  validateRequest(AuthValidation.loginValidationSchema),
  AuthControllers.loginUser,
);
export const AuthRoutes = router;
