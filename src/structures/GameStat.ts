import getStat from "../functions";
export = class {
  game: string;
  apiKey: string;
  public constructor(game: string, apiKey: string) {
    this.game = game;
    this.apiKey = apiKey;
  }
  public getStats(query: any) {
    if (!this.game) throw Error("No game provided");
    this.game = this.game.toLowerCase();
    if (!["apex", "fortnite", "overwatch", "csgo"].includes(this.game)) throw Error("Non valid game");
    if (["apex", "fortnite", "csgo"].includes(this.game) && !this.apiKey) throw Error("No/Invalid api key");
    return getStat[this.game as "fortnite" | "apex" | "overwatch" | "csgo"](query, this.apiKey!);
  }
  public changeGame(newGame: string) {
    if (!["apex", "fortnite", "overwatch", "csgo"].includes(newGame.toLowerCase())) throw Error("Non valid game");
    this.game = newGame.toLowerCase();
    return this;
  }
}