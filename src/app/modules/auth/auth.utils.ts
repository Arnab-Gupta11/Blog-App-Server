import { TJwtPawload } from './auth.interface';
import jwt from 'jsonwebtoken';
export const createToken = (
  jwtPayload: TJwtPawload,
  secret: string,
  expiresIn: string,
) => {
  return jwt.sign(jwtPayload, secret, { expiresIn });
};
