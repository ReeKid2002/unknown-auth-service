import { PrismaClient } from '@prisma/client';

const userClient = new PrismaClient().user;

const signUp = async (name: string, email: string, password: string) => {
  return userClient.create({
    data: {
      name,
      email,
      password,
    }
  });
};

const login = async (email: string) => {
  return userClient.findUnique({
    where: {
      email,
    }
  });
};

export default {
  signUp,
  login,
};