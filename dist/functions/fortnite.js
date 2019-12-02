"use strict";
const get_1 = require("../util/get");
module.exports = ([platform, user], apiKey) => {
    return get_1.get(`https://api.fortnitetracker.com/v1/profile/${platform}/${user}`, {
        headers: {
            "TRN-Api-key": apiKey
        }
    });
};
