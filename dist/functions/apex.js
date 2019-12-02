"use strict";
const get_1 = require("../util/get");
module.exports = ([platform, name], apiKey) => {
    return get_1.get(`https://public-api.tracker.gg/apex/v1/standard/profile/${platform}/${name}`, {
        headers: {
            "TRN-Api-key": apiKey
        }
    });
};
