"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authMiddleware = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body);
        if (error) {
            res.status(400).json({ error: error.message });
            return;
        }
        next();
    };
};
exports.default = authMiddleware;
