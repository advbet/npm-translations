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

        expect(builtParams1).toEqual({ 'handicap!': 'H' });
        expect(builtParams2).toEqual({ 'handicap!': '0:0', handicap: 0 });
        expect(builtParams3).toEqual({ 'handicap!': '0:1', handicap: -1 });
        expect(builtParams4).toEqual({ 'handicap!': '1:0', handicap: 1 });
    });

    test('for player parameter', () => {
        const builtParams1 = buildBetParams({
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
        });
        const builtParams2 = buildBetParams({
            params: { playerID: "sr:player:x" },
            lang: 'en',
            stringsUILang: 'en',
        });
        const builtParams3 = buildBetParams({
            params: { playerID: "sr:player:x" },
            lang: 'en',
            stringsUILang: 'en',
            eventStrings: {}
        });
        const builtParams4 = buildBetParams({
            params: { playerID: "sr:player:x" },
            lang: 'en',
            stringsUILang: 'en',
            eventStrings: {
                'en': {}
            }
        });
        const builtParams5 = buildBetParams({
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
        });
        const builtParams6 = buildBetParams({
            params: { playerID: "sr:player:x" },
            lang: 'en',
            stringsUILang: 'en',
            eventStrings: {
                'en': {
                    players: {}
                }
            }
        });
        const builtParams7 = buildBetParams({
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
        });
        const builtParams8 = buildBetParams({
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
        });
        const builtParams9 = buildBetParams({
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
        });

        expect(builtParams1).toEqual({ 'playerID!': 'sr:player:x' });
        expect(builtParams2).toEqual({ 'playerID!': 'sr:player:x' });
        expect(builtParams3).toEqual({ 'playerID': 'sr:player:x', 'playerID!': 'sr:player:x' });
        expect(builtParams4).toEqual({ 'playerID': 'sr:player:x', 'playerID!': 'sr:player:x' });
        expect(builtParams5).toEqual({ 'playerID': 'sr:player:x', 'playerID!': 'sr:player:x' });
        expect(builtParams6).toEqual({ 'playerID': 'sr:player:x', 'playerID!': 'sr:player:x' });
        expect(builtParams7).toEqual({ 'playerID': 'sr:player:x', 'playerID!': 'sr:player:x' });
        expect(builtParams8).toEqual({ 'playerID': 'X', 'playerID!': 'X' });
        expect(builtParams9).toEqual({ 'playerID': 'X-lt', 'playerID!': 'X-lt' });
    });

    test('for EN language', () => {
        const builtParams1 = buildBetParams({
            params: { points: 1 },
            lang: 'en',
        });
        const builtParams2 = buildBetParams({
            params: { points: 1 },
            lang: 'en',
            ignoreOptionalParams: true
        });
        const builtParams3 = buildBetParams({
            params: { half: 1 },
            lang: 'en',
        });
        const builtParams4 = buildBetParams({
            params: { half: 1 },
            lang: 'en',
            ignoreOptionalParams: true
        });
        const builtParams5 = buildBetParams({
            params: { half: 3 },
            lang: 'en',
        });
        const builtParams6 = buildBetParams({
            params: { half: 3 },
            lang: 'en',
            ignoreOptionalParams: true
        });
        const builtParams7 = buildBetParams({
            params: null,
            lang: 'en',
        });

        expect(builtParams1).toEqual({ 'points!': '1' });
        expect(builtParams2).toEqual({ 'points': '', 'points!': '1' });
        expect(builtParams3).toEqual({ 'half!': '1st' });
        expect(builtParams4).toEqual({ 'half!': '1st' });
        expect(builtParams5).toEqual({ 'half!': '3rd' });
        expect(builtParams6).toEqual({ 'half!': '3rd' });
        expect(builtParams7).toEqual({});
    });

    test('for LT language', () => {
        const builtParams1 = buildBetParams({
            params: { points: 1 },
            lang: 'lt',
        });
        const builtParams2 = buildBetParams({
            params: { points: 1 },
            lang: 'lt',
            ignoreOptionalParams: true
        });
        const builtParams3 = buildBetParams({
            params: { half: 1 },
            lang: 'lt',
        });
        const builtParams4 = buildBetParams({
            params: { half: 1 },
            lang: 'lt',
            ignoreOptionalParams: true
        });
        const builtParams5 = buildBetParams({
            params: { half: 3 },
            lang: 'lt',
        });
        const builtParams6 = buildBetParams({
            params: { half: 3 },
            lang: 'lt',
            ignoreOptionalParams: true
        });
        const builtParams7 = buildBetParams({
            params: null,
            lang: 'en',
        });

        expect(builtParams1).toEqual({
            'points^!': '1',
            'points?': '1',
            'points^?': '1',
            'points+': '1',
            'points^+': '1',
        });
        expect(builtParams2).toEqual({
            'points': '',
            'points^!': '1',
            'points?': '1',
            'points^?': '1',
            'points+': '1',
            'points^+': '1',
        });
        expect(builtParams3).toEqual({
            'half^!': '1-a',
            'half?': '1-ą',
            'half^?': '1-ą',
            'half+': '1-o',
            'half^+': '1-os'
        });
        expect(builtParams4).toEqual({
            'half^!': '1-a',
            'half?': '1-ą',
            'half^?': '1-ą',
            'half+': '1-o',
            'half^+': '1-os'
        });
        expect(builtParams5).toEqual({
            'half^!': '3-ia',
            'half?': '3-ią',
            'half^?': '3-ią',
            'half+': '3-io',
            'half^+': '3-ios'
        });
        expect(builtParams6).toEqual({
            'half^!': '3-ia',
            'half?': '3-ią',
            'half^?': '3-ią',
            'half+': '3-io',
            'half^+': '3-ios'
        });
        expect(builtParams7).toEqual({});
    });

    test('for not existing language', () => {
        const builtParams1 = buildBetParams({
            params: { points: 1 },
            lang: 'notExist',
        });
        const builtParams2 = buildBetParams({
            params: { points: 1 },
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

        expect(builtParams1).toEqual({ 'points!': '1' });
        expect(builtParams2).toEqual({ 'points!': '1' });
        expect(builtParams3).toEqual({ 'half!': '1' });
        expect(builtParams4).toEqual({ 'half!': '1' });
        expect(builtParams5).toEqual({ 'half!': '3' });
        expect(builtParams6).toEqual({ 'half!': '3' });
        expect(builtParams7).toEqual({});
    });
});