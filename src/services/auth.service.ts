import { PrismaClient } from "@prisma/client";

const userClient = new PrismaClient().user;

const signUp = async (name: string, email: string, password: string) => {
  return userClient.create({
    data: {
      name,
      email,
      password,
    }
  })
};

export default {
  signUp,
};