"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = (url, options) => {
    let data = null;
    let error = null;
    fetch(url, options)
        .then(res => res.json())
        .then(json => data = json)
        .catch(error => error = error);
    return { data, error };
};
