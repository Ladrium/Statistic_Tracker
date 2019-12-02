declare const _default: {
    new (game: string, apiKey: string): {
        game: string;
        apiKey: string;
        getStats(query: string[]): {
            data: null;
            error: null;
        };
        changeGame(newGame: string): any;
    };
};
export = _default;
