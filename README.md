## Statistic Tracker
This module is made to get statistics from different games, we currently support: Apex Legends, Cs:Go, Fortnite and Overwatch.
## Usage
You can find your Api Key [Here](https://tracker.gg/developers/apps)
```js
const GameStat = require("statistic_tracker");
const game = new GameStat("fortnite", "apiKey")
(async () => console.log(await game.getStats(["pc", "Ninja"]))();
```
## Methods

```js
const game = new GameStat("fortnite");
game.changeGame("csgo");
```
```js
new GameStat("csgo").getStats(["platform", "platformUserIdentifier"]);
new GameStat("apex").getStats(["platform", "name"]);
new GameStat("overwatch").getStats(["platform", "region", "battletag"]);
```