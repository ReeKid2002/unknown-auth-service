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
exports.default = {
    signUp,
    login,
    validate,
};
