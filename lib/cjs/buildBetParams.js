"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const variables_1 = require("./variables");
const getOrdinal_1 = __importDefault(require("./getOrdinal"));
function buildBetParams({ params, lang, stringsUILang, ignoreOptionalParams, eventStrings }) {
    const obj = {};
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
        if (paramsKey.startsWith('player') && eventStrings && stringsUILang) {
            const players = eventStrings[stringsUILang]
                ? (eventStrings[stringsUILang].players || {})
                : {};
            obj[paramsKey] = players[params[paramsKey]] || params[paramsKey];
            value = String(obj[paramsKey]);
        }
        let extraKeys = ['!'];
        const isKeyMapped = variables_1.paramsToOrdinals.includes(paramsKey);
        if (lang === 'es') {
            extraKeys = ['^!'];
        }
        if (lang === 'lt') {
            extraKeys = ['^!', '?', '^?', '+', '^+'];
        }
        extraKeys.forEach(specialKey => {
            obj[`${paramsKey}${specialKey}`] = isKeyMapped
                ? getOrdinal_1.default(`${paramsKey}${specialKey}`, value, lang)
                : value;
        });
    });
    if (ignoreOptionalParams) {
        const optionalMarketParams = variables_1.optionalMarketParamsByLanguage[lang] || [];
        optionalMarketParams.forEach((optionalMarketParam) => {
            if (params[optionalMarketParam]) {
                obj[optionalMarketParam] = '';
            }
        });
    }
    return obj;
}
exports.default = buildBetParams;
//# sourceMappingURL=buildBetParams.js.map