import { get } from "../util/get";
export = ([platform, platformUserIdentifier]: string[], apiKey: string) => {
  return get(`https://public-api.tracker.gg/v2/csgo/standard/profile/${platform}/${platformUserIdentifier}`, {
    headers: {
      "TRN-Api-key": apiKey
    }
  });
};