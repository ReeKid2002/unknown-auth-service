"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authBodyMiddleware = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body);
        if (error) {
            res.status(400).json({ error: error.message });
            return;
        }
        next();
    };
};
const authParamsMiddleware = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.params);
        if (error) {
            res.status(400).json({ error: error.message });
            return;
        }
        next();
    };
};
exports.default = {
    authBodyMiddleware,
    authParamsMiddleware,
};
