import fetch from "node-fetch";
export = async ([platform, name]: string[], apiKey: string) => {
  return fetch(`https://public-api.tracker.gg/apex/v1/standard/profile/${platform}/${name}`, {
    headers: {
      "TRN-Api-key": apiKey
    }
  }).then(res => res.json());
};