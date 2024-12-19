import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { AuthServices } from './auth.service';
import sendResponse from '../../utils/sendResponse';

const registerUser = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthServices.registerUserIntoDB(req.body);
  const { _id, name, email } = result;
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'User registered successfully',
    data: { _id, name, email },
  });
});
export const AuthControllers = {
  registerUser,
};
