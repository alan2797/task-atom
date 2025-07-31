"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const response_helper_1 = require("../utils/response.helper");
const validate = (schema) => (req, res, next) => {
    try {
        schema.parse({
            body: req.body,
            query: req.query,
            params: req.params,
        });
        next();
    }
    catch (err) {
        return (0, response_helper_1.sendResponse)(res, 400, "Error de validación", err.errors);
    }
};
exports.validate = validate;
