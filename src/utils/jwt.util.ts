import jwt from 'jsonwebtoken';

interface ITokenPayload {
  id: number;
  email: string;
  name: string;
}

const signToken = (payload: ITokenPayload) => {
  return jwt.sign(payload, process.env.JWT_SECRET as string);
};

const decodeToken = (token: string) => {
  return jwt.verify(token, process.env.JWT_SECRET as string);
};

export default {
  signToken,
  decodeToken,
};