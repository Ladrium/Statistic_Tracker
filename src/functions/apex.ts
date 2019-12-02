import fetch from "node-fetch";
export = async ([platform, name]: string[], apiKey: string) => {
  return await (await fetch(`https://public-api.tracker.gg/apex/v1/standard/profile/${platform}/${name}`, {
    headers: {
      "TRN-Api-key": apiKey
    }
  })).json()
};