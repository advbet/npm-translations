import { getTeamsAndParams } from './../index';

describe('should test getTeamsAndParams method', () => {
    test('for teams', () => {
        const { teams: teams1 } = getTeamsAndParams({
            event: {},
            betParams: {},
            selection: ''
        });
        const { teams: teams2 } = getTeamsAndParams({
            event: {
                awayTeam: 'A'
            },
            betParams: {},
            selection: ''
        });
        const { teams: teams3 } = getTeamsAndParams({
            event: {
                awayTeam: 'A',
                homeTeam: 'H',
                strings: {
                    'en': {
                        awayTeam: 'A',
                        homeTeam: 'H',
                    }
                }
            },
            betParams: {},
            selection: ''
        });
        const { teams: teams4 } = getTeamsAndParams({
            event: {
                awayTeam: 'A',
                homeTeam: 'H',
                strings: {
                    'en': {
                        awayTeam: 'A-s',
                        homeTeam: 'H-s',
                    }
                },
                dynamicData: {
                    strings: {
                        'en': {
                            awayTeam: 'A-d',
                            homeTeam: 'H-d',
                        }
                    }
                }
            },
            stringsUILang: 'en',
            betParams: {},
            selection: ''
        });
        const { teams: teams5 } = getTeamsAndParams({
            event: {
                strings: {}
            },
            stringsUILang: 'en',
            betParams: {},
            selection: ''
        });
        const { teams: teams6 } = getTeamsAndParams({
            event: {
                strings: {
                    'en': {}
                }
            },
            stringsUILang: 'en',
            betParams: {},
            selection: ''
        });
        const { teams: teams7 } = getTeamsAndParams({
            event: {
                strings: {
                    'lt': {
                        awayTeam: 'A',
                        homeTeam: 'H',
                    }
                }
            },
            stringsUILang: 'en',
            betParams: {},
            selection: ''
        });
        const { teams: teams8 } = getTeamsAndParams({
            event: {
                strings: {
                    'en': {
                        awayTeam: 'A-s',
                        homeTeam: 'H-s',
                    }
                }
            },
            stringsUILang: 'en',
            betParams: {},
            selection: ''
        });
        const { teams: teams9 } = getTeamsAndParams({
            event: {
                dynamicData: {
                    strings: {}
                }
            },
            stringsUILang: 'en',
            betParams: {},
            selection: ''
        });
        const { teams: teams10 } = getTeamsAndParams({
            event: {
                dynamicData: {
                    strings: {
                        'en': {}
                    }
                }
            },
            stringsUILang: 'en',
            betParams: {},
            selection: ''
        });
        const { teams: teams11 } = getTeamsAndParams({
            event: {
                dynamicData: {
                    strings: {
                        'lt': {
                            awayTeam: 'A-d',
                            homeTeam: 'H-d',
                        }
                    }
                }
            },
            stringsUILang: 'en',
            betParams: {},
            selection: ''
        });
        const { teams: teams12 } = getTeamsAndParams({
            event: {
                dynamicData: {
                    strings: {
                        'en': {
                            awayTeam: 'A-d',
                            homeTeam: 'H-d',
                        }
                    }
                }
            },
            stringsUILang: 'en',
            betParams: {},
            selection: ''
        });

        expect(teams1).toEqual({ awayTeam: undefined, homeTeam: undefined });
        expect(teams2).toEqual({ awayTeam: 'A', homeTeam: undefined });
        expect(teams3).toEqual({ awayTeam: 'A', homeTeam: 'H' });
        expect(teams4).toEqual({ awayTeam: 'A', homeTeam: 'H' });
        expect(teams5).toEqual({ awayTeam: undefined, homeTeam: undefined });
        expect(teams6).toEqual({ awayTeam: undefined, homeTeam: undefined });
        expect(teams7).toEqual({ awayTeam: undefined, homeTeam: undefined });
        expect(teams8).toEqual({ awayTeam: 'A-s', homeTeam: 'H-s' });
        expect(teams9).toEqual({ awayTeam: undefined, homeTeam: undefined });
        expect(teams10).toEqual({ awayTeam: undefined, homeTeam: undefined });
        expect(teams11).toEqual({ awayTeam: undefined, homeTeam: undefined });
        expect(teams12).toEqual({ awayTeam: 'A-d', homeTeam: 'H-d' });
    });

    test('for handicap params', () => {
        const { params: params1 } = getTeamsAndParams({
            betParams: { handicap: 'H' },
            selection: 'away'
        });
        const { params: params2 } = getTeamsAndParams({
            betParams: { handicap: '0:1' },
            selection: 'away'
        });
        const { params: params3 } = getTeamsAndParams({
            betParams: { handicap: '0:1' },
            selection: 'home'
        });
        const { params: params4 } = getTeamsAndParams({
            betParams: { handicap: '0:1' },
            selection: 'draw'
        });
        const { params: params5 } = getTeamsAndParams({
            betParams: { handicap: '1:0' },
            selection: 'away'
        });
        const { params: params6 } = getTeamsAndParams({
            betParams: { handicap: '1:0' },
            selection: 'home'
        });
        const { params: params7 } = getTeamsAndParams({
            betParams: { handicap: '1:0' },
            selection: 'draw'
        });
        const { params: params8 } = getTeamsAndParams({
            betParams: { handicap: '0:0' },
            selection: 'away'
        });
        const { params: params9 } = getTeamsAndParams({
            betParams: { handicap: '0:0' },
            selection: 'home'
        });
        const { params: params10 } = getTeamsAndParams({
            betParams: { handicap: '0:0' },
            selection: 'draw'
        });

        expect(params1.handicap).toBe('H');
        expect(params2.handicap).toBe('(+1)');
        expect(params3.handicap).toBe('(-1)');
        expect(params4.handicap).toBe('(-1)');
        expect(params5.handicap).toBe('(-1)');
        expect(params6.handicap).toBe('(+1)');
        expect(params7.handicap).toBe('(+1)');
        expect(params8.handicap).toBe('(0)');
        expect(params9.handicap).toBe('(0)');
        expect(params10.handicap).toBe('(0)');
    });

    test('for params', () => {
        const { params: params1 } = getTeamsAndParams({
            betParams: { fours: '1' },
            selection: ''
        });
        const { params: params2 } = getTeamsAndParams({
            betParams: { test: '1' },
            selection: ''
        });

        expect(params1.fours).toBe('1');
        expect(params1.frames).toBe('');
        expect(params2.test).toBe(undefined);
        expect(params2.frames).toBe('');
    });
});