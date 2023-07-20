"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cors = exports.authMiddleware = void 0;
var auth_middleware_1 = require("./auth.middleware");
Object.defineProperty(exports, "authMiddleware", { enumerable: true, get: function () { return __importDefault(auth_middleware_1).default; } });
var cors_middleware_1 = require("./cors.middleware");
Object.defineProperty(exports, "cors", { enumerable: true, get: function () { return __importDefault(cors_middleware_1).default; } });
