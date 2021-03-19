"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const variables_1 = require("./variables");
function getTeamsAndParams({ event, betParams, selection, stringsUILang }) {
    const params = {};
    const teams = {
        awayTeam: event && event.awayTeam,
        homeTeam: event && event.homeTeam
    };
    if (event && stringsUILang && (!event.awayTeam || !event.homeTeam)) {
        const strings = event.strings || (event.dynamicData && event.dynamicData.strings) || {};
        teams.awayTeam = strings[stringsUILang] && strings[stringsUILang].awayTeam;
        teams.homeTeam = strings[stringsUILang] && strings[stringsUILang].homeTeam;
    }
    variables_1.marketTranslationParams.forEach(marketParam => {
        if (marketParam === 'handicap' && betParams && betParams[marketParam] && String(betParams[marketParam]).includes(':')) {
            // clear params value if handicap market selection is not 'home'/'away'/'draw'.
            // 'draw' selection handicap value is same as 'home' selection handicap value
            if (selection !== 'home' && selection !== 'away' && selection !== 'draw') {
                params[marketParam] = '';
                return;
            }
            const handicapString = String(betParams.handicap);
            params[marketParam] = parseFloat(handicapString.split(':')[0]) - parseFloat(handicapString.split(':')[1]);
            if (selection === 'away' && params[marketParam] !== 0) {
                params[marketParam] = -params[marketParam];
            }
            if (params[marketParam] > 0) {
                params[marketParam] = `+${params[marketParam]}`;
            }
            params[marketParam] = `(${params[marketParam]})`;
            return;
        }
        params[marketParam] = (betParams && betParams[marketParam]) || '';
    });
    return { params, teams };
}
exports.default = getTeamsAndParams;
//# sourceMappingURL=getTeamsAndParams.js.map