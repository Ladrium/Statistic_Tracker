import fetch from "node-fetch";
export = async ([platform, region, battletag]: string[]) => {
  return fetch(`https://ow-api.com/v1/stats/${platform}/${region}/${battletag}/profile`).then(res => res.json());
};