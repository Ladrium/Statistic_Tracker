import fetch from "node-fetch";
export = async ([platform, platformUserIdentifier]: string[], apiKey: string) => {
  return fetch(`https://public-api.tracker.gg/v2/csgo/standard/profile/${platform}/${platformUserIdentifier}`, {
    headers: {
      "TRN-Api-key": apiKey
    }
  }).then(res => res.json());
};