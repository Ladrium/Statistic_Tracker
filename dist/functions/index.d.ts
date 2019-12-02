declare const _default: {
    fortnite: ([platform, user]: string[], apiKey: string | undefined) => Promise<any>;
    apex: ([platform, name]: string[], apiKey: string) => Promise<any>;
    csgo: ([platform, platformUserIdentifier]: string[], apiKey: string) => Promise<any>;
    overwatch: ([platform, region, battletag]: string[]) => Promise<any>;
};
export = _default;
