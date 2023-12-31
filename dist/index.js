"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const middleware_1 = require("./src/middleware");
const routes_1 = require("./src/routes");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(middleware_1.cors);
app.use('/api/auth', routes_1.authRoute);
const PORT = process.env.PORT || 5050;
app.get('/ping', (req, res) => {
    res.status(200).json({ message: 'pong' });
});
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
