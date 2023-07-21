"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../services");
const utils_1 = require("../utils");
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password } = req.body;
        const hashedPassword = yield utils_1.passwordUtil.generateHash(password);
        const newUser = yield services_1.authService.signUp(name, email, hashedPassword);
        const payload = yield utils_1.jwtUtil.signToken({ id: newUser.id, email, name });
        res.status(201).json({
            message: 'User created successfully',
            payload,
        });
    }
    catch (error) {
        if (error instanceof Error)
            res.status(500).json({ error: error.message });
    }
});
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield services_1.authService.login(email);
        if (!user) {
            res.status(401).json({ message: 'User not found' });
            return;
        }
        const isPasswordValid = yield utils_1.passwordUtil.compareHash(password, user.password);
        if (!isPasswordValid) {
            res.status(401).json({ message: 'Invalid password' });
            return;
        }
        const payload = yield utils_1.jwtUtil.signToken({ id: user.id, email, name: user.name });
        res.status(200).json({
            message: 'User logged in successfully',
            payload,
        });
    }
    catch (error) {
        if (error instanceof Error)
            res.status(500).json({ error: error.message });
    }
});
const validateToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { token } = req.body;
        const payload = yield utils_1.jwtUtil.decodeToken(token);
        if (!payload) {
            res.status(401).json({ message: 'Invalid token' });
            return;
        }
        const user = yield services_1.authService.validate(payload.id, payload.email);
        if (!user) {
            res.status(401).json({ message: 'Invalid token' });
            return;
        }
        const newToken = yield utils_1.jwtUtil.signToken({ id: user.id, email: user.email, name: user.name });
        res.status(200).json({
            message: 'Token validated successfully',
            payload: newToken,
        });
    }
    catch (error) {
        if (error instanceof Error)
            res.status(500).json({ error: error.message });
    }
});
const getUserData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { token } = req.params;
        console.log(token);
        const decodedToken = utils_1.jwtUtil.decodeToken(token);
        if (!decodedToken) {
            res.status(401).json({ message: 'Invalid token' });
            return;
        }
        const user = yield services_1.authService.getUserData(decodedToken.id, decodedToken.email);
        if (!user) {
            res.status(401).json({ message: 'Invalid token' });
            return;
        }
        res.status(200).json({
            message: 'User data retrieved successfully',
            payload: user,
        });
    }
    catch (error) {
        if (error instanceof Error)
            res.status(500).json({ error: error.message });
    }
});
exports.default = {
    signUp,
    login,
    validateToken,
    getUserData,
};
