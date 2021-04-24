import { buildBetParams } from './../index';

describe('should test buildBetParams method', () => {
    test('for handicap parameter', () => {
        const builtParams1 = buildBetParams({
            params: { handicap: 'H' },
            lang: 'en',
        });
        const builtParams2 = buildBetParams({
            params: { handicap: '0:0' },
            lang: 'en',
        });
        const builtParams3 = buildBetParams({
            params: { handicap: '0:1' },
            lang: 'en',
        });
        const builtParams4 = buildBetParams({
            params: { handicap: '1:0' },
            lang: 'en',
        });

        expect(builtParams1).toEqual({});
        expect(builtParams2).toEqual({ handicap: 0 });
        expect(builtParams3).toEqual({ handicap: -1 });
        expect(builtParams4).toEqual({ handicap: 1 });
    });

    test('for player parameter', () => {
        expect(buildBetParams({
            params: { playerID: "sr:player:x" },
            lang: 'en',
            eventStrings: {
                'en': {
                    players: {
                        'sr:player:x': 'X',
                        'sr:player:y': 'Y',
                    }
                }
            }
        })).toEqual({});

        expect(buildBetParams({
            params: { playerID: "sr:player:x" },
            lang: 'en',
            stringsUILang: 'en',
        })).toEqual({});

        expect(buildBetParams({
            params: { playerID: "sr:player:x" },
            lang: 'en',
            stringsUILang: 'en',
            eventStrings: {}
        })).toEqual({ 'playerID': 'sr:player:x' });

        expect(buildBetParams({
            params: { playerID: "sr:player:x" },
            lang: 'en',
            stringsUILang: 'en',
            eventStrings: {
                'en': {}
            }
        })).toEqual({ 'playerID': 'sr:player:x' });

        expect(buildBetParams({
            params: { playerID: "sr:player:x" },
            lang: 'en',
            stringsUILang: 'en',
            eventStrings: {
                'lt': {
                    players: {
                        'sr:player:x': 'X',
                        'sr:player:y': 'Y',
                    }
                }
            }
        })).toEqual({ 'playerID': 'sr:player:x' });

        expect(buildBetParams({
            params: { playerID: "sr:player:x" },
            lang: 'en',
            stringsUILang: 'en',
            eventStrings: {
                'en': {
                    players: {}
                }
            }
        })).toEqual({ 'playerID': 'sr:player:x' });

        expect(buildBetParams({
            params: { playerID: "sr:player:x" },
            lang: 'en',
            stringsUILang: 'en',
            eventStrings: {
                'en': {
                    players: {
                        'sr:player:y': 'Y',
                    }
                }
            }
        })).toEqual({ 'playerID': 'sr:player:x' });

        expect(buildBetParams({
            params: { playerID: "sr:player:x" },
            lang: 'en',
            stringsUILang: 'en',
            eventStrings: {
                'en': {
                    players: {
                        'sr:player:x': 'X',
                        'sr:player:y': 'Y',
                    }
                }
            }
        })).toEqual({ 'playerID': 'X' });

        expect(buildBetParams({
            params: { playerID: "sr:player:x" },
            lang: 'en',
            stringsUILang: 'lt',
            eventStrings: {
                'en': {
                    players: {
                        'sr:player:x': 'X',
                        'sr:player:y': 'Y',
                    }
                },
                'lt': {
                    players: {
                        'sr:player:x': 'X-lt',
                        'sr:player:y': 'Y',
                    }
                }
            }
        })).toEqual({ 'playerID': 'X-lt' });
    });

    test('for EN language', () => {
        expect(buildBetParams({
            params: { handicap: 1 },
            lang: 'en',
        })).toEqual({});

        expect(buildBetParams({
            params: { handicap: 1 },
            lang: 'en',
            ignoreOptionalParams: true
        })).toEqual({ 'handicap': '' });

        expect(buildBetParams({
            params: { half: 1 },
            lang: 'en',
        })).toEqual({ 'half!': '1st' });

        expect(buildBetParams({
            params: { half: 1 },
            lang: 'en',
            ignoreOptionalParams: true
        })).toEqual({ 'half!': '1st' });

        expect(buildBetParams({
            params: { half: 3 },
            lang: 'en',
        })).toEqual({ 'half!': '3rd' });

        expect(buildBetParams({
            params: { half: 3 },
            lang: 'en',
            ignoreOptionalParams: true
        })).toEqual({ 'half!': '3rd' });

        expect(buildBetParams({
            params: null,
            lang: 'en',
        })).toEqual({});
    });

    test('for LT language', () => {
        expect(buildBetParams({
            params: { points: 1 },
            lang: 'lt',
        })).toEqual({});

        expect(buildBetParams({
            params: { half: 1 },
            lang: 'lt',
        })).toEqual({
            'half!': '1-as',
            'half^!': '1-a',
            'half?': '1-ą',
            'half^?': '1-ą',
            'half+': '1-o',
            'half^+': '1-os'
        });

        expect(buildBetParams({
            params: { half: 1 },
            lang: 'lt',
            ignoreOptionalParams: true
        })).toEqual({
            'half!': '1-as',
            'half^!': '1-a',
            'half?': '1-ą',
            'half^?': '1-ą',
            'half+': '1-o',
            'half^+': '1-os'
        });

        expect(buildBetParams({
            params: { half: 3 },
            lang: 'lt',
        })).toEqual({
            'half!': '3-ias',
            'half^!': '3-ia',
            'half?': '3-ią',
            'half^?': '3-ią',
            'half+': '3-io',
            'half^+': '3-ios'
        });

        expect(buildBetParams({
            params: { half: 3 },
            lang: 'lt',
            ignoreOptionalParams: true
        })).toEqual({
            'half!': '3-ias',
            'half^!': '3-ia',
            'half?': '3-ią',
            'half^?': '3-ią',
            'half+': '3-io',
            'half^+': '3-ios'
        });

        expect(buildBetParams({
            params: null,
            lang: 'en',
        })).toEqual({});
    });

    test('for not existing language', () => {
        const builtParams1 = buildBetParams({
            params: { half: 1 },
            lang: 'notExist',
        });
        const builtParams2 = buildBetParams({
            params: { half: 1 },
            lang: 'notExist',
            ignoreOptionalParams: true
        });
        const builtParams3 = buildBetParams({
            params: { half: 1 },
            lang: 'notExist',
        });
        const builtParams4 = buildBetParams({
            params: { half: 1 },
            lang: 'notExist',
            ignoreOptionalParams: true
        });
        const builtParams5 = buildBetParams({
            params: { half: 3 },
            lang: 'notExist',
        });
        const builtParams6 = buildBetParams({
            params: { half: 3 },
            lang: 'notExist',
            ignoreOptionalParams: true
        });
        const builtParams7 = buildBetParams({
            params: null,
            lang: 'en',
        });

        expect(builtParams1).toEqual({ 'half!': '1' });
        expect(builtParams2).toEqual({ 'half!': '1' });
        expect(builtParams3).toEqual({ 'half!': '1' });
        expect(builtParams4).toEqual({ 'half!': '1' });
        expect(builtParams5).toEqual({ 'half!': '3' });
        expect(builtParams6).toEqual({ 'half!': '3' });
        expect(builtParams7).toEqual({});
    });
});