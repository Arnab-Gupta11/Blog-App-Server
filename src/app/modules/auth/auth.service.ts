import { config } from '../../config';
import AppError from '../../errors/AppError';
import { IUser } from '../user/user.interface';
import { User } from '../user/user.model';
import { TLoginUser } from './auth.interface';
import { createToken } from './auth.utils';

//Register User
const registerUserIntoDB = async (payload: IUser) => {
  const result = await User.create(payload);
  return result;
};

//Login User
const loginUser = async (payload: TLoginUser) => {
  // checking if the user is exist
  const user = await User.isUserExistsByEmail(payload.email);

  if (!user) {
    throw new AppError(401, 'Invalid credentials');
  }

  // checking if the user is blocked

  const userStatus = user?.isBlocked;

  if (userStatus === true) {
    throw new AppError(403, 'This user is blocked ! !');
  }

  //checking if the password is correct

  if (!(await User.isPasswordMatched(payload?.password, user?.password)))
    throw new AppError(401, 'Invalid credentials');

  //create token and sent to the  client

  const jwtPayload = {
    _id: user._id,
    userEmail: user.email,
    role: user.role,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );

  return {
    accessToken,
  };
};
export const AuthServices = {
  registerUserIntoDB,
  loginUser,
};
