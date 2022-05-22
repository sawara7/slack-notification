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
exports.SlackNotifier = void 0;
const axios_1 = __importDefault(require("axios"));
class SlackNotifier {
    constructor(path) {
        this.path = path;
    }
    sendMessage(message) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = 'failed';
            try {
                result = yield axios_1.default.post(this.path, JSON.stringify({
                    text: message
                }));
            }
            catch (e) {
                if (e instanceof Error) {
                    result = e.message;
                }
            }
            return result;
        });
    }
}
exports.SlackNotifier = SlackNotifier;
