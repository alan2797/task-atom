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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUseCase = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class UserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    existeUsuario(email, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(email);
            const user = yield this.userRepository.findByEmail(email);
            if (!user) {
                return 404;
            }
            const payload = { id: user.id, correo: user.correo };
            const token = jsonwebtoken_1.default.sign(payload, process.env.JWT_SECRET, {
                expiresIn: "15m",
            });
            return token;
        });
    }
    crearUsuario(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.create(data);
            const payload = { id: user.id, correo: user.correo };
            const token = jsonwebtoken_1.default.sign(payload, process.env.JWT_SECRET, {
                expiresIn: "15m",
            });
            return token;
        });
    }
}
exports.UserUseCase = UserUseCase;
