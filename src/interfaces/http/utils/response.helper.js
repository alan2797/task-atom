"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendResponse = sendResponse;
function sendResponse(res, status, message, data) {
    const response = {
        status,
        message,
        data,
    };
    return res.status(status).json(response);
}
