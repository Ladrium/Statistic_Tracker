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
const node_fetch_1 = __importDefault(require("node-fetch"));
module.exports = ([platform, user], apiKey) => __awaiter(void 0, void 0, void 0, function* () {
    if (!apiKey)
        throw Error("No apiKey found!");
    return node_fetch_1.default(`https://api.fortnitetracker.com/v1/profile/${platform}/${user}`, {
        headers: {
            "TRN-Api-key": apiKey
        }
    }).then(res => res.json());
});
