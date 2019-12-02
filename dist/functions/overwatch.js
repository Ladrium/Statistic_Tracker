"use strict";
const get_1 = require("../util/get");
module.exports = ([platform, region, battletag]) => {
    return get_1.get(`https://ow-api.com/v1/stats/${platform}/${region}/${battletag}/profile`);
};
