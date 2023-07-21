import { PrismaClient } from '@prisma/client';

const userClient = new PrismaClient().user;

const signUp = (name: string, email: string, password: string) => {
  return userClient.create({
    data: {
      name,
      email,
      password,
    }
  });
};

const login = (email: string) => {
  return userClient.findUnique({
    where: {
      email,
    }
  });
};

const validate = (id: number, email: string) => {
  return userClient.findUnique({
    where: {
      id,
      email,
    }
  });
};

const getUserData = (id: number, email: string) => {
  return userClient.findUnique({
    where: {
      id,
      email,
    },
    select: {
      id: true,
      name: true,
      email: true,
    }
  });
};

export default {
  signUp,
  login,
  validate,
  getUserData,
};