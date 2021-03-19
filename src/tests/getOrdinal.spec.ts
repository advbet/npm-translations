import { getOrdinal } from '../index';

describe('should test getOrdinal method', () => {
    test('for EN language', () => {
        expect(getOrdinal('', '1', 'en')).toEqual('1');
        expect(getOrdinal('', '2', 'en')).toEqual('2');
        expect(getOrdinal('', '3', 'en')).toEqual('3');
        expect(getOrdinal('', '4', 'en')).toEqual('4');
        expect(getOrdinal('', '9', 'en')).toEqual('9');

        expect(getOrdinal('half', '1', 'en')).toEqual('1');
        expect(getOrdinal('half', '2', 'en')).toEqual('2');
        expect(getOrdinal('half', '3', 'en')).toEqual('3');
        expect(getOrdinal('half', '4', 'en')).toEqual('4');
        expect(getOrdinal('half', '9', 'en')).toEqual('9');

        expect(getOrdinal('half?', '1', 'en')).toEqual('1');
        expect(getOrdinal('half?', '2', 'en')).toEqual('2');
        expect(getOrdinal('half?', '3', 'en')).toEqual('3');
        expect(getOrdinal('half?', '4', 'en')).toEqual('4');
        expect(getOrdinal('half?', '9', 'en')).toEqual('9');

        expect(getOrdinal('half!', '1', 'en')).toEqual('1st');
        expect(getOrdinal('half!', '2', 'en')).toEqual('2nd');
        expect(getOrdinal('half!', '3', 'en')).toEqual('3rd');
        expect(getOrdinal('half!', '4', 'en')).toEqual('4th');
        expect(getOrdinal('half!', '9', 'en')).toEqual('9th');

        expect(getOrdinal('half!', 1, 'en')).toEqual('1st');
        expect(getOrdinal('half!', 2, 'en')).toEqual('2nd');
        expect(getOrdinal('half!', 3, 'en')).toEqual('3rd');
        expect(getOrdinal('half!', 4, 'en')).toEqual('4th');
        expect(getOrdinal('half!', 9, 'en')).toEqual('9th');
    });

    test('for LT language', () => {
        expect(getOrdinal('', '1', 'lt')).toEqual('1');
        expect(getOrdinal('', '2', 'lt')).toEqual('2');
        expect(getOrdinal('', '3', 'lt')).toEqual('3');
        expect(getOrdinal('', '4', 'lt')).toEqual('4');
        expect(getOrdinal('', '9', 'lt')).toEqual('9');

        expect(getOrdinal('half', '1', 'lt')).toEqual('1');
        expect(getOrdinal('half', '2', 'lt')).toEqual('2');
        expect(getOrdinal('half', '3', 'lt')).toEqual('3');
        expect(getOrdinal('half', '4', 'lt')).toEqual('4');
        expect(getOrdinal('half', '9', 'lt')).toEqual('9');

        expect(getOrdinal('half-', '1', 'lt')).toEqual('1');
        expect(getOrdinal('half-', '2', 'lt')).toEqual('2');
        expect(getOrdinal('half-', '3', 'lt')).toEqual('3');
        expect(getOrdinal('half-', '4', 'lt')).toEqual('4');
        expect(getOrdinal('half-', '9', 'lt')).toEqual('9');

        expect(getOrdinal('half!', '1', 'lt')).toEqual('1-as');
        expect(getOrdinal('half!', '2', 'lt')).toEqual('2-as');
        expect(getOrdinal('half!', '3', 'lt')).toEqual('3-ias');
        expect(getOrdinal('half!', '4', 'lt')).toEqual('4-as');
        expect(getOrdinal('half!', '9', 'lt')).toEqual('9-as');

        expect(getOrdinal('half!', 1, 'lt')).toEqual('1-as');
        expect(getOrdinal('half!', 2, 'lt')).toEqual('2-as');
        expect(getOrdinal('half!', 3, 'lt')).toEqual('3-ias');
        expect(getOrdinal('half!', 4, 'lt')).toEqual('4-as');
        expect(getOrdinal('half!', 9, 'lt')).toEqual('9-as');

        expect(getOrdinal('half^!', '1', 'lt')).toEqual('1-a');
        expect(getOrdinal('half^!', '2', 'lt')).toEqual('2-a');
        expect(getOrdinal('half^!', '3', 'lt')).toEqual('3-ia');
        expect(getOrdinal('half^!', '4', 'lt')).toEqual('4-a');
        expect(getOrdinal('half^!', '9', 'lt')).toEqual('9-a');

        expect(getOrdinal('half^!', 1, 'lt')).toEqual('1-a');
        expect(getOrdinal('half^!', 2, 'lt')).toEqual('2-a');
        expect(getOrdinal('half^!', 3, 'lt')).toEqual('3-ia');
        expect(getOrdinal('half^!', 4, 'lt')).toEqual('4-a');
        expect(getOrdinal('half^!', 9, 'lt')).toEqual('9-a');

        expect(getOrdinal('half+', '1', 'lt')).toEqual('1-o');
        expect(getOrdinal('half+', '2', 'lt')).toEqual('2-o');
        expect(getOrdinal('half+', '3', 'lt')).toEqual('3-io');
        expect(getOrdinal('half+', '4', 'lt')).toEqual('4-o');
        expect(getOrdinal('half+', '9', 'lt')).toEqual('9-o');

        expect(getOrdinal('half+', 1, 'lt')).toEqual('1-o');
        expect(getOrdinal('half+', 2, 'lt')).toEqual('2-o');
        expect(getOrdinal('half+', 3, 'lt')).toEqual('3-io');
        expect(getOrdinal('half+', 4, 'lt')).toEqual('4-o');
        expect(getOrdinal('half+', 9, 'lt')).toEqual('9-o');

        expect(getOrdinal('half^+', '1', 'lt')).toEqual('1-os');
        expect(getOrdinal('half^+', '2', 'lt')).toEqual('2-os');
        expect(getOrdinal('half^+', '3', 'lt')).toEqual('3-ios');
        expect(getOrdinal('half^+', '4', 'lt')).toEqual('4-os');
        expect(getOrdinal('half^+', '9', 'lt')).toEqual('9-os');

        expect(getOrdinal('half^+', 1, 'lt')).toEqual('1-os');
        expect(getOrdinal('half^+', 2, 'lt')).toEqual('2-os');
        expect(getOrdinal('half^+', 3, 'lt')).toEqual('3-ios');
        expect(getOrdinal('half^+', 4, 'lt')).toEqual('4-os');
        expect(getOrdinal('half^+', 9, 'lt')).toEqual('9-os');

        expect(getOrdinal('half?', '1', 'lt')).toEqual('1-ą');
        expect(getOrdinal('half?', '2', 'lt')).toEqual('2-ą');
        expect(getOrdinal('half?', '3', 'lt')).toEqual('3-ią');
        expect(getOrdinal('half?', '4', 'lt')).toEqual('4-ą');
        expect(getOrdinal('half?', '9', 'lt')).toEqual('9-ą');

        expect(getOrdinal('half?', 1, 'lt')).toEqual('1-ą');
        expect(getOrdinal('half?', 2, 'lt')).toEqual('2-ą');
        expect(getOrdinal('half?', 3, 'lt')).toEqual('3-ią');
        expect(getOrdinal('half?', 4, 'lt')).toEqual('4-ą');
        expect(getOrdinal('half?', 9, 'lt')).toEqual('9-ą');
    });

    test('for not existing language', () => {
        expect(getOrdinal('', '1', 'notExist')).toEqual('1');
        expect(getOrdinal('', '2', 'notExist')).toEqual('2');
        expect(getOrdinal('', '3', 'notExist')).toEqual('3');
        expect(getOrdinal('', '4', 'notExist')).toEqual('4');
        expect(getOrdinal('', '9', 'notExist')).toEqual('9');

        expect(getOrdinal('half', '1', 'notExist')).toEqual('1');
        expect(getOrdinal('half', '2', 'notExist')).toEqual('2');
        expect(getOrdinal('half', '3', 'notExist')).toEqual('3');
        expect(getOrdinal('half', '4', 'notExist')).toEqual('4');
        expect(getOrdinal('half', '9', 'notExist')).toEqual('9');

        expect(getOrdinal('half?', '1', 'notExist')).toEqual('1');
        expect(getOrdinal('half?', '2', 'notExist')).toEqual('2');
        expect(getOrdinal('half?', '3', 'notExist')).toEqual('3');
        expect(getOrdinal('half?', '4', 'notExist')).toEqual('4');
        expect(getOrdinal('half?', '9', 'notExist')).toEqual('9');

        expect(getOrdinal('half!', '1', 'notExist')).toEqual('1');
        expect(getOrdinal('half!', '2', 'notExist')).toEqual('2');
        expect(getOrdinal('half!', '3', 'notExist')).toEqual('3');
        expect(getOrdinal('half!', '4', 'notExist')).toEqual('4');
        expect(getOrdinal('half!', '9', 'notExist')).toEqual('9');

        expect(getOrdinal('half!', 1, 'notExist')).toEqual('1');
        expect(getOrdinal('half!', 2, 'notExist')).toEqual('2');
        expect(getOrdinal('half!', 3, 'notExist')).toEqual('3');
        expect(getOrdinal('half!', 4, 'notExist')).toEqual('4');
        expect(getOrdinal('half!', 9, 'notExist')).toEqual('9');
    });
});