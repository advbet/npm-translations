import translationByLocale from '../translationByLocale';

describe('translationByLocale', () => {
    test('returns correct translation string when provided locale exists in strings', () => {
        expect(translationByLocale({en: 'Name', fr: 'name'}, 'en')).toStrictEqual('Name');
    });
    test('returns correct translation object when provided locale exists in strings', () => {
        expect(translationByLocale({en: {name: 'Name'}, fr: {name: 'Name'}}, 'en')).toStrictEqual({name: 'Name'});
    });
    test('fallbacks to correct translation object when provided locale doesnt exist in strings', () => {
        expect(translationByLocale({en: {name: 'Name'}, fr: {name: 'Name'}}, 'en-ZA')).toStrictEqual({name: 'Name'});
    });
    test('returns \'en\' translation object when provided locale doesnt exist in strings', () => {
        expect(translationByLocale({en: {name: 'Name'}, fr: {name: 'Name'}}, 'de')).toStrictEqual({name: 'Name'});
    });
    test('returns \'undefined\' when provided locale doesnt exist in strings and there is nothing to fall back to', () => {
        expect(translationByLocale({ru: {name: 'Name'}, fr: {name: 'Name'}}, 'de')).toBe(undefined);
    });
});