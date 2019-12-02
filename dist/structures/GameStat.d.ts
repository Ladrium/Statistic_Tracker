declare const _default: {
    new (game: string, apiKey: string): {
        game?: string | undefined;
        apiKey?: string | undefined;
        getStats(query: any): Promise<any>;
        changeGame(newGame: string): any;
    };
};
export = _default;
