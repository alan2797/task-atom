"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserRouter = void 0;
const express_1 = require("express");
const createUserRouter = (controller) => {
    const router = (0, express_1.Router)();
    router.get("/exists/:email", controller.exists);
    router.post("/", controller.create);
    return router;
};
exports.createUserRouter = createUserRouter;
