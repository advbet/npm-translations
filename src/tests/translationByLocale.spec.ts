import translationByLocale from '../translationByLocale';

describe('translationByLocale', () => {
    test('returns correct translation string when provided locale exists in strings', () => {
        expect(translationByLocale({en: 'en', fr: 'fr'}, 'en')).toStrictEqual('en');
    });
    test('returns correct translation object when provided locale exists in strings', () => {
        expect(translationByLocale({en: {lang: 'en'}, fr: {lang: 'fr'}}, 'en')).toStrictEqual({lang: 'en'});
    });
    test('fallbacks to correct translation object when provided locale doesnt exist in strings', () => {
        expect(translationByLocale({en: {lang: 'en'}, fr: {lang: 'fr'}}, 'en-ZA')).toStrictEqual({lang: 'en'});
    });
    test('returns \'en\' translation object when provided locale doesnt exist in strings', () => {
        expect(translationByLocale({en: {lang: 'en'}, fr: {lang: 'fr'}}, 'de')).toStrictEqual({lang: 'en'});
    });
    test('returns \'undefined\' when provided locale doesnt exist in strings and there is nothing to fall back to', () => {
        expect(translationByLocale({ru: {lang: 'ru'}, fr: {lang: 'fr'}}, 'de')).toBe(undefined);
    });
});