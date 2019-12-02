import { get } from "../util/get";
export = ([platform, user]: string[], apiKey: string) => {
  return get(`https://api.fortnitetracker.com/v1/profile/${platform}/${user}`, {
    headers: {
      "TRN-Api-key": apiKey
    }
  });
};
