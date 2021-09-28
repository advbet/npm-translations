import { marketTranslationParams } from './variables';
import { paramsType, teamsAndParamsType, teamsType} from './types';

export default function getTeamsAndParams({ event, betParams, selection, stringsUILang }: teamsAndParamsType) {
	const params: paramsType = {};
	const teams: teamsType = {
		awayTeam: event && event.awayTeam,
		homeTeam: event && event.homeTeam
	};

	if (event && stringsUILang && (!event.awayTeam || !event.homeTeam)) {
		const strings = event.strings || (event.dynamicData && event.dynamicData.strings) || {};

		teams.awayTeam = strings[stringsUILang] && strings[stringsUILang].awayTeam;
		teams.homeTeam = strings[stringsUILang] && strings[stringsUILang].homeTeam;
	}

	marketTranslationParams.forEach(marketParam => {
		if (marketParam === 'handicap' && betParams && betParams[marketParam] && String(betParams[marketParam]).includes(':')) {
			// clear params value if handicap market selection is not 'home'/'away'/'draw'.
			// 'draw' selection handicap value is same as 'home' selection handicap value
			if (selection !== 'home' && selection !== 'away' && selection !== 'draw' && selection !== 'home_over' &&
				selection !== 'home_under' && selection !== 'away_over' && selection !== 'away_under') {
				params[marketParam] = '';
				return;
			}

			const handicapString = String(betParams.handicap);

			params[marketParam] = parseFloat(handicapString.split(':')[0]) - parseFloat(handicapString.split(':')[1]);

			if ((selection === 'away' || selection === 'away_under' || selection === 'away_over') && params[marketParam] !== 0) {
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
