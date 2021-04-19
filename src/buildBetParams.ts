import { optionalMarketParamsByLanguage, paramsToOrdinals } from './variables';
import { paramsType, betParamsType } from './types';
import getOrdinal from './getOrdinal';
import translationByLocale from './translationByLocale';

export default function buildBetParams({ params, lang, stringsUILang, ignoreOptionalParams, eventStrings }: betParamsType): paramsType {
	const obj: paramsType = {};

	if (!params) {
		return obj;
	}

	const handicapString = String(params.handicap);

	if (params.hasOwnProperty('handicap') && handicapString.includes(':')) {
		obj.handicap = parseFloat(handicapString.split(':')[0])
			- parseFloat(handicapString.split(':')[1]);
	}

	Object.entries(params).forEach(([paramsKey, paramsValue]) => {
		let value = String(paramsValue);

		if (paramsKey.includes('player') && eventStrings && stringsUILang) {
			const translations = translationByLocale(eventStrings, stringsUILang);
			const players = translations
				? (translations.players || {})
				: {};
			obj[paramsKey] = players[params[paramsKey]] || params[paramsKey];
			value = String(obj[paramsKey]);
		}

		let extraKeys = ['!'];
		const isKeyMapped = paramsToOrdinals.includes(paramsKey);

		if (lang === 'es') {
			extraKeys = ['^!'];
		}

		if (lang === 'lt') {
			extraKeys = ['^!', '?', '^?', '+', '^+'];
		}

		extraKeys.forEach(specialKey => {
			obj[`${paramsKey}${specialKey}`] = isKeyMapped
				? getOrdinal(`${paramsKey}${specialKey}`, value, lang)
				: value;
		});
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
