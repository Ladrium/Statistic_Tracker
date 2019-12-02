import fetch from "node-fetch";
export = async([platform, user]: string[], apiKey: string | undefined) => {
  if (!apiKey) throw Error("No apiKey found!");

  return (await fetch(`https://api.fortnitetracker.com/v1/profile/${platform}/${user}`, {
    headers: {
      "TRN-Api-key": apiKey
    }
  })).json();
};
