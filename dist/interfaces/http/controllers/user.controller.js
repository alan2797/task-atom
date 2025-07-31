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
exports.UserController = void 0;
const response_helper_1 = require("../utils/response.helper");
class UserController {
    constructor(userUseCase) {
        this.userUseCase = userUseCase;
        this.exists = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const exists = yield this.userUseCase.existeUsuario(req.params.email, res);
                return (0, response_helper_1.sendResponse)(res, 200, "Usuario existe", exists);
            }
            catch (err) {
                res.status(500).json({ error: err.message });
            }
        });
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.body);
                const user = yield this.userUseCase.crearUsuario(req.body);
                return (0, response_helper_1.sendResponse)(res, 200, "Usuario creado con exito", user);
            }
            catch (err) {
                res.status(500).json({ error: err.message });
            }
        });
    }
}
exports.UserController = UserController;
