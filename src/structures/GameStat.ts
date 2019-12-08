import getStat from "../functions";
export = class {
  apiKey: string;
  public constructor(apiKey: string) {
    this.apiKey = apiKey;
  }
  public getStats(query: string[], game: string) {
    if (!game) throw Error("No game provided");
    game = game.toLowerCase();
    if (!["apex", "fortnite", "overwatch", "csgo"].includes(game)) throw Error("Non valid game");
    if (["apex", "fortnite", "csgo"].includes(game) && !this.apiKey) throw Error("No/Invalid api key");
    return getStat[game as "fortnite" | "apex" | "overwatch" | "csgo"](query, this.apiKey!);
  }
}