import { get } from "../util/get";
export = ([platform, name]: string[], apiKey: string) => {
  return get(`https://public-api.tracker.gg/apex/v1/standard/profile/${platform}/${name}`, {
    headers: {
      "TRN-Api-key": apiKey
    }
  });
};