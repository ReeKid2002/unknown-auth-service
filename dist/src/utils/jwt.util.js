"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const signToken = (payload) => {
    return jsonwebtoken_1.default.sign(payload, 'mysecret123'); // TODO: REMOVE STRING AS SECRET
};
const decodeToken = (token) => {
    return jsonwebtoken_1.default.verify(token, 'mysecret123'); // TODO: REMOVE STRING AS SECRET
};
exports.default = {
    signToken,
    decodeToken,
};
