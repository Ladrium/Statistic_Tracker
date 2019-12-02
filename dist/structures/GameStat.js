"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const functions_1 = __importDefault(require("../functions"));
module.exports = class {
    constructor(game, apiKey) {
        this.game = game;
    }
    getStats(query) {
        if (!this.game)
            throw Error("No game provided");
        this.game = this.game.toLowerCase();
        if (!["apex", "fortnite", "overwatch", "csgo"].includes(this.game))
            throw Error("Non valid game");
        if (["apex", "fortnite", "csgo"].includes(this.game) && !this.apiKey)
            throw Error("No/Invalid api key");
        return functions_1.default[this.game](query, this.apiKey);
    }
    changeGame(newGame) {
        if (!["apex", "fortnite", "overwatch", "csgo"].includes(newGame.toLowerCase()))
            throw Error("Non valid game");
        this.game = newGame.toLowerCase();
        return this;
    }
};
