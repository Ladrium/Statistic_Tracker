"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const functions_1 = __importDefault(require("../functions"));
module.exports = class {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    getStats(query, game) {
        if (!game)
            throw Error("No game provided");
        game = game.toLowerCase();
        if (!["apex", "fortnite", "overwatch", "csgo"].includes(game))
            throw Error("Non valid game");
        if (["apex", "fortnite", "csgo"].includes(game) && !this.apiKey)
            throw Error("No/Invalid api key");
        return functions_1.default[game](query, this.apiKey);
    }
};
