"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const userClient = new client_1.PrismaClient().user;
const signUp = (name, email, password) => {
    return userClient.create({
        data: {
            name,
            email,
            password,
        }
    });
};
const login = (email) => {
    return userClient.findUnique({
        where: {
            email,
        }
    });
};
const validate = (id, email) => {
    return userClient.findUnique({
        where: {
            id,
            email,
        }
    });
};
const getUserData = (id, email) => {
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
exports.default = {
    signUp,
    login,
    validate,
    getUserData,
};
