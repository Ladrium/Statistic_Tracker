"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const fortnite_1 = __importDefault(require("./fortnite"));
const apex_1 = __importDefault(require("./apex"));
const csgo_1 = __importDefault(require("./csgo"));
const overwatch_1 = __importDefault(require("./overwatch"));
module.exports = {
    fortnite: fortnite_1.default,
    apex: apex_1.default,
    csgo: csgo_1.default,
    overwatch: overwatch_1.default
};
