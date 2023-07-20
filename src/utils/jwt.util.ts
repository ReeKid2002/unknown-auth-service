import jwt from 'jsonwebtoken';

interface ITokenPayload {
  id: number;
  email: string;
  name: string;
}

const signToken = (payload: ITokenPayload) => {
  return jwt.sign(payload, 'mysecret123'); // TODO: REMOVE STRING AS SECRET
};

const decodeToken = (token: string) => {
  return jwt.verify(token, 'mysecret123'); // TODO: REMOVE STRING AS SECRET
};

export default {
  signToken,
  decodeToken,
};