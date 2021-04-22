const paramsToOrdinals = [
    'period',
    'half',
    'inning',
    'dismissal',
    'set',
    'game',
    'game2',
    'n',
    'over',
    'delivery',
    'frame'
];

// TODO: remove optionalMarketParams.json file from sportbets when web-ui, cashier-ui, live-support-ui, admin-ui starts using this npm package
const optionalMarketParamsByLanguage: { [key: string]: string[] } = {
    en: [
        'handicap', 'points', 'fours', 'extras', 'ducks', 'runOuts', 'sixes', 'wides', 'performance'
    ],
    'en-ZA': [
        'handicap', 'points', 'fours', 'extras', 'ducks', 'runOuts', 'sixes', 'wides', 'performance'
    ],
    'en-JM': [
        'handicap', 'points', 'fours', 'extras', 'ducks', 'runOuts', 'sixes', 'wides', 'performance'
    ],
    lt: [
        'handicap', 'points', 'fours', 'extras', 'ducks', 'runOuts', 'sixes', 'wides', 'performance'
    ],
    ru: [
        'handicap', 'points', 'fours', 'extras', 'ducks', 'runOuts', 'sixes', 'wides', 'performance'
    ],
    es: [
        'handicap', 'points', 'fours', 'extras', 'ducks', 'runOuts', 'sixes', 'wides', 'performance'
    ],
    it: [
        'handicap', 'points', 'fours', 'extras', 'ducks', 'runOuts', 'sixes', 'wides', 'performance'
    ],
    ht: [
        'handicap', 'points', 'fours', 'extras', 'ducks', 'runOuts', 'sixes', 'wides', 'performance'
    ],
    pt_BR: [
        'handicap', 'points', 'fours', 'extras', 'ducks', 'runOuts', 'sixes', 'wides', 'performance'
    ],
    fr: [
        'handicap', 'points', 'fours', 'extras', 'ducks', 'runOuts', 'sixes', 'wides', 'performance'
    ],
    lv: [
        'handicap', 'points', 'fours', 'extras', 'ducks', 'runOuts', 'sixes', 'wides', 'performance'
    ],
    sw: [
        'handicap', 'points', 'fours', 'extras', 'ducks', 'runOuts', 'sixes', 'wides', 'performance'
    ],
    'sw-TZ': [
        'handicap', 'points', 'fours', 'extras', 'ducks', 'runOuts', 'sixes', 'wides', 'performance'
    ]
};

// TODO: remove marketTranslationParams.json file from sportbets when web-ui, cashier-ui, live-support-ui, admin-ui starts using this npm package
const marketTranslationParams: string[] = [
    'aegis',
    'ballCount',
    'bookings',
    'corners',
    'day!',
    'delivery!',
    'diff',
    'dismissal!',
    'dismissals',
    'ducks',
    'end',
    'extras',
    'fours',
    'frame!',
    'frames',
    'from',
    'game',
    'game!',
    'game2!',
    'games',
    'half!',
    'handicap',
    'headshots',
    'inning!',
    'innings',
    'interval',
    'kills',
    'leg!',
    'legs',
    'level',
    'map!',
    'maps',
    'milestone',
    'milestone2',
    'n',
    'n!',
    'netWorth',
    'offsides',
    'over',
    'over!',
    'overX',
    'overY',
    'penalties',
    'performance',
    'period',
    'period!',
    'player1',
    'player2',
    'player3',
    'playerID',
    'points',
    'rabbit',
    'round',
    'round!',
    'rounds',
    'run',
    'runOuts',
    'runs',
    'score',
    'session',
    'Set!',
    'set',
    'set!',
    'sets',
    'sixes',
    'to',
    'towers',
    'tries',
    'ups',
    'visit!',
    'wides'
];

export {
    optionalMarketParamsByLanguage,
    paramsToOrdinals,
    marketTranslationParams
};