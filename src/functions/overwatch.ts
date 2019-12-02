import fetch from "node-fetch";
export = async ([platform, region, battletag]: string[]) => {
  return await (await fetch(`https://ow-api.com/v1/stats/${platform}/${region}/${battletag}/profile`)).json()
};