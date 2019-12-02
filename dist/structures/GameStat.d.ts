declare const _default: {
    new (game: string, apiKey: string): {
        game: string;
        apiKey: string;
        getStats(query: any): Promise<any>;
        changeGame(newGame: string): any;
    };
};
export = _default;
