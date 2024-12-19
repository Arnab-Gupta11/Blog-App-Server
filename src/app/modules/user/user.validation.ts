import { z } from 'zod';
import { userRole } from './user.constant';

const createUserValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        required_error: 'Name is required',
      })
      .min(1, 'Name cannot be empty'),
    email: z
      .string({
        required_error: 'Email is required',
      })
      .email('Invalid email format'),
    role: z
      .enum(userRole as [string, ...string[]], {
        required_error: 'Role is required',
      })
      .optional(),
    password: z
      .string({
        required_error: 'Password is required',
      })
      .min(6, 'Password must be at least 6 characters long'),
    isBlocked: z.boolean().optional(),
  }),
});

export const UserValidations = {
  createUserValidationSchema,
};
