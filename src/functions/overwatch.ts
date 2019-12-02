import { get } from "../util/get";
export = ([platform, region, battletag]: string[]) => {
  return get(`https://ow-api.com/v1/stats/${platform}/${region}/${battletag}/profile`);
};