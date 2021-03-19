"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toOrdinal = exports.getOrdinal = void 0;
function getOrdinal(key, num, loc) {
    const match = key.match(/[!^?&>@]/g);
    const special = match !== null && match[0];
    const ordinals = {};
    if (!special) {
        return {};
    }
    if (ordinals[loc] &&
        ordinals[loc][special] &&
        ordinals[loc][special][num]) {
        return ordinals[loc][special][num];
    }
    if (!Object.prototype.hasOwnProperty.call(ordinals, loc)) {
        ordinals[loc] = {};
    }
    if (!Object.prototype.hasOwnProperty.call(ordinals, special)) {
        ordinals[loc][special] = {};
    }
    if (!Object.prototype.hasOwnProperty.call(ordinals[loc][special], num)) {
        ordinals[loc][special][num] = exports.toOrdinal(special, num, loc);
    }
    return ordinals[loc][special][num];
}
exports.getOrdinal = getOrdinal;
const toOrdinal = (special, num, loc) => {
    if (isNaN(num) || num === null) {
        return num;
    }
    const mod = num % 10;
    const tenth = Math.trunc((num % 100) / 10);
    const isTeen = tenth === 1 || tenth === -1;
    const isFirst = mod === 1 || mod === -1;
    const isSecond = mod === 2 || mod === -2;
    const isThird = mod === 3 || mod === -3;
    let ordinal = '';
    switch (loc) {
        case 'en':
        case 'en-ZA':
            switch (special) {
                case '!':
                    ordinal = isTeen ? 'th' :
                        isFirst ? 'st' :
                            isSecond ? 'nd' :
                                isThird ? 'rd' :
                                    'th';
                    return num + ordinal;
                default:
                    return num;
            }
        case 'ht': {
            switch (special) {
                case '!':
                    ordinal = parseInt(num.toString(), 10) === 1 ? 'ye' : 'yèm';
                    return num + ordinal;
                default:
                    return num;
            }
        }
        case 'es': {
            switch (special) {
                case '!':
                    return `${num}º`;
                case '^!':
                    return `${num}ª`;
                default:
                    return num;
            }
        }
        // LT language special character explanation
        //
        //      Kas?  Ko?  Kam?  Ką?  Kuo?  Kur?
        // v.      !         >    ?     &     @
        // m.     ^!   ^    ^>   ^?    ^&    ^@
        // v.d.   !!       >>   ??    &&    @@
        // m.d.  ^!!  ^   ^>>  ^??   ^&&   ^@@
        case 'lt': {
            switch (special) {
                case '!':
                    ordinal = isTeen || !isThird ? '-as' : '-ias';
                    return num + ordinal;
                case '^!':
                    ordinal = isTeen || !isThird ? '-a' : '-ia';
                    return num + ordinal;
                case '':
                    ordinal = isTeen || !isThird ? '-o' : '-io';
                    return num + ordinal;
                case '^':
                    ordinal = isTeen || !isThird ? '-os' : '-ios';
                    return num + ordinal;
                case '?':
                case '^?':
                    ordinal = isTeen || !isThird ? '-ą' : '-ią';
                    return num + ordinal;
                default:
                    return num;
            }
        }
        default:
            return num;
    }
};
exports.toOrdinal = toOrdinal;
//# sourceMappingURL=index.js.map