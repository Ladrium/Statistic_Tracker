"use strict";
const get_1 = require("../util/get");
module.exports = ([platform, platformUserIdentifier], apiKey) => {
    return get_1.get(`https://public-api.tracker.gg/v2/csgo/standard/profile/${platform}/${platformUserIdentifier}`, {
        headers: {
            "TRN-Api-key": apiKey
        }
    });
};
