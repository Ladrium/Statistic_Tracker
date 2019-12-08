## Statistic Tracker
This module is made to get statistics from different games, we currently support: Apex Legends, Cs:Go, Fortnite and Overwatch.
## Usage
You can find your Api Key [Here](https://tracker.gg/developers/apps)
```js
const GameStat = require("statistic_tracker");
const game = new GameStat("apiKey")
```
## Methods

```js
game.getStats(query, game);
```
## Example
```js
const game = new GameStat("xxx-xxx-xxx-xxx");
const { data, error } = game.getStats(["pc", "Ninja"], "fortnite");
if(!data || error) console.log("Couldn't find that player!");
else console.log(data);
```