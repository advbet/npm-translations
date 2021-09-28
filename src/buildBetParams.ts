import { optionalMarketParamsByLanguage, paramsToOrdinals } from './variables';
import { paramsType, betParamsType } from './types';
import getOrdinal from './getOrdinal';
import translationByLocale from './translationByLocale';

export default function buildBetParams({ params, lang, ignoreOptionalParams, eventStrings }: betParamsType): paramsType {
	const obj: paramsType = {};

	if (!params) {
		return obj;
	}

	const handicapString = String(params.handicap);

	if (params.hasOwnProperty('handicap') && handicapString.includes(':')) {
		obj.handicap = parseFloat(handicapString.split(':')[0])
			- parseFloat(handicapString.split(':')[1]);
	}

	Object.entries(params).forEach(([paramKey, paramValue]) => {
		if (paramKey.includes('player') && eventStrings && lang) {
			const translations = translationByLocale(eventStrings, lang);
			const players = translations?.players || {};

			obj[paramKey] = players[params[paramKey]] || params[paramKey];
		}

		let ordinalKeys = ['!'];

		if (lang === 'es') {
			ordinalKeys = ['!', '^!'];
		}

		if (lang === 'lt') {
			ordinalKeys = ['!', '^!', '?', '^?', '+', '^+'];
		}

		 if (paramsToOrdinals.includes(paramKey)) {
			ordinalKeys.forEach((ordinalKey) => {
				obj[`${paramKey}${ordinalKey}`] = getOrdinal(`${paramKey}${ordinalKey}`, paramValue, lang);
			});
		 }
	});

	if (params && params.inning) {
		params.count = Number(params.inning);
	}

	if (ignoreOptionalParams) {
		const optionalMarketParams = optionalMarketParamsByLanguage[lang] || [];

		optionalMarketParams.forEach((optionalMarketParam) => {
			if (params[optionalMarketParam]) {
				obj[optionalMarketParam] = '';
			}
		});
	}

	return obj;
}
