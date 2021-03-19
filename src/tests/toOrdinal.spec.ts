import { toOrdinal } from './../index';

test('should test toOrdinal method for EN language', () => {
    expect(toOrdinal('!', 'test', 'en')).toBe('test');
    expect(toOrdinal('!', 0, 'en')).toBe('0th');
    expect(toOrdinal('!', 1, 'en')).toBe('1st');
    expect(toOrdinal('!', 2, 'en')).toBe('2nd');
    expect(toOrdinal('!', 3, 'en')).toBe('3rd');
    expect(toOrdinal('!', 4, 'en')).toBe('4th');
    expect(toOrdinal('!', 5, 'en')).toBe('5th');
    expect(toOrdinal('!', 6, 'en')).toBe('6th');
    expect(toOrdinal('!', 7, 'en')).toBe('7th');
    expect(toOrdinal('!', 8, 'en')).toBe('8th');
    expect(toOrdinal('!', 9, 'en')).toBe('9th');
    expect(toOrdinal('!', 19, 'en')).toBe('19th');
    expect(toOrdinal('!', 31, 'en')).toBe('31st');
    expect(toOrdinal('!', 10, 'en')).toBe('10th');
    expect(toOrdinal('!', 100, 'en')).toBe('100th');
    expect(toOrdinal('!', 101, 'en')).toBe('101st');
    expect(toOrdinal('!', 102, 'en')).toBe('102nd');
    expect(toOrdinal('!', 103, 'en')).toBe('103rd');
    expect(toOrdinal('!', 104, 'en')).toBe('104th');
    expect(toOrdinal('!', 110, 'en')).toBe('110th');
    expect(toOrdinal('!', 111, 'en')).toBe('111th');
    expect(toOrdinal('!', 112, 'en')).toBe('112th');
    expect(toOrdinal('!', 113, 'en')).toBe('113th');
    expect(toOrdinal('!', 114, 'en')).toBe('114th');
    expect(toOrdinal('!', 120, 'en')).toBe('120th');
    expect(toOrdinal('!', 121, 'en')).toBe('121st');
    expect(toOrdinal('!', 122, 'en')).toBe('122nd');
    expect(toOrdinal('!', 123, 'en')).toBe('123rd');
    expect(toOrdinal('!', 124, 'en')).toBe('124th');
});

test('should test toOrdinal method for EN language (negative numbers)', function () {
    expect(toOrdinal('!', -1, 'en')).toBe('-1st');
    expect(toOrdinal('!', -2, 'en')).toBe('-2nd');
    expect(toOrdinal('!', -3, 'en')).toBe('-3rd');
    expect(toOrdinal('!', -4, 'en')).toBe('-4th');
    expect(toOrdinal('!', -5, 'en')).toBe('-5th');
    expect(toOrdinal('!', -6, 'en')).toBe('-6th');
    expect(toOrdinal('!', -7, 'en')).toBe('-7th');
    expect(toOrdinal('!', -8, 'en')).toBe('-8th');
    expect(toOrdinal('!', -9, 'en')).toBe('-9th');
    expect(toOrdinal('!', -19, 'en')).toBe('-19th');
    expect(toOrdinal('!', -31, 'en')).toBe('-31st');
    expect(toOrdinal('!', -10, 'en')).toBe('-10th');
    expect(toOrdinal('!', -100, 'en')).toBe('-100th');
    expect(toOrdinal('!', -101, 'en')).toBe('-101st');
    expect(toOrdinal('!', -102, 'en')).toBe('-102nd');
    expect(toOrdinal('!', -103, 'en')).toBe('-103rd');
    expect(toOrdinal('!', -104, 'en')).toBe('-104th');
    expect(toOrdinal('!', -110, 'en')).toBe('-110th');
    expect(toOrdinal('!', -111, 'en')).toBe('-111th');
    expect(toOrdinal('!', -112, 'en')).toBe('-112th');
    expect(toOrdinal('!', -113, 'en')).toBe('-113th');
    expect(toOrdinal('!', -114, 'en')).toBe('-114th');
    expect(toOrdinal('!', -120, 'en')).toBe('-120th');
    expect(toOrdinal('!', -121, 'en')).toBe('-121st');
    expect(toOrdinal('!', -122, 'en')).toBe('-122nd');
    expect(toOrdinal('!', -123, 'en')).toBe('-123rd');
    expect(toOrdinal('!', -124, 'en')).toBe('-124th');
});

test('should test toOrdinal method for UNKNOWN language', function () {
    expect(toOrdinal('!', 'test', 'xx')).toBe('test');
    expect(toOrdinal('!', 0, 'xx')).toBe('0');
    expect(toOrdinal('!', 1, 'xx')).toBe('1');
});

test('should test toOrdinal method for LT language', function () {
    expect(toOrdinal('!', 1, 'lt')).toBe('1-as');
    expect(toOrdinal('!', 3, 'lt')).toBe('3-ias');
    expect(toOrdinal('!', 11, 'lt')).toBe('11-as');
    expect(toOrdinal('!', 13, 'lt')).toBe('13-as');
    expect(toOrdinal('!', 21, 'lt')).toBe('21-as');
    expect(toOrdinal('!', 23, 'lt')).toBe('23-ias');

    expect(toOrdinal('^!', 1, 'lt')).toBe('1-a');
    expect(toOrdinal('^!', 3, 'lt')).toBe('3-ia');
    expect(toOrdinal('^!', 11, 'lt')).toBe('11-a');
    expect(toOrdinal('^!', 13, 'lt')).toBe('13-a');
    expect(toOrdinal('^!', 21, 'lt')).toBe('21-a');
    expect(toOrdinal('^!', 23, 'lt')).toBe('23-ia');

    expect(toOrdinal('+', 1, 'lt')).toBe('1-o');
    expect(toOrdinal('+', 3, 'lt')).toBe('3-io');
    expect(toOrdinal('+', 11, 'lt')).toBe('11-o');
    expect(toOrdinal('+', 13, 'lt')).toBe('13-o');
    expect(toOrdinal('+', 21, 'lt')).toBe('21-o');
    expect(toOrdinal('+', 23, 'lt')).toBe('23-io');

    expect(toOrdinal('^+', 1, 'lt')).toBe('1-os');
    expect(toOrdinal('^+', 3, 'lt')).toBe('3-ios');
    expect(toOrdinal('^+', 11, 'lt')).toBe('11-os');
    expect(toOrdinal('^+', 13, 'lt')).toBe('13-os');
    expect(toOrdinal('^+', 21, 'lt')).toBe('21-os');
    expect(toOrdinal('^+', 23, 'lt')).toBe('23-ios');

    expect(toOrdinal('?', 1, 'lt')).toBe('1-ą');
    expect(toOrdinal('?', 3, 'lt')).toBe('3-ią');
    expect(toOrdinal('?', 11, 'lt')).toBe('11-ą');
    expect(toOrdinal('?', 13, 'lt')).toBe('13-ą');
    expect(toOrdinal('?', 21, 'lt')).toBe('21-ą');
    expect(toOrdinal('?', 23, 'lt')).toBe('23-ią');

    expect(toOrdinal('^?', 1, 'lt')).toBe('1-ą');
    expect(toOrdinal('^?', 3, 'lt')).toBe('3-ią');
    expect(toOrdinal('^?', 11, 'lt')).toBe('11-ą');
    expect(toOrdinal('^?', 13, 'lt')).toBe('13-ą');
    expect(toOrdinal('^?', 21, 'lt')).toBe('21-ą');
    expect(toOrdinal('^?', 23, 'lt')).toBe('23-ią');
});

test('should test toOrdinal method for HT language', function () {
    expect(toOrdinal('!', 1, 'ht')).toBe('1ye');
    expect(toOrdinal('!', 3, 'ht')).toBe('3yèm');
    expect(toOrdinal('!', 10, 'ht')).toBe('10yèm');
    expect(toOrdinal('!', 11, 'ht')).toBe('11yèm');
    expect(toOrdinal('!', 13, 'ht')).toBe('13yèm');
    expect(toOrdinal('!', 20, 'ht')).toBe('20yèm');
    expect(toOrdinal('!', 21, 'ht')).toBe('21yèm');
    expect(toOrdinal('!', 23, 'ht')).toBe('23yèm');
});