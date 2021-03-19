"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const toOrdinal_1 = __importDefault(require("./toOrdinal"));
const ordinals = {};
function getOrdinal(key, num, loc) {
    const special = (key.match(/[!^?+&>@]+/g) || [])[0];
    if (!special) {
        return num;
    }
    if (ordinals[loc] &&
        ordinals[loc][special] &&
        ordinals[loc][special][num]) {
        return ordinals[loc][special][num];
    }
    if (!Object.prototype.hasOwnProperty.call(ordinals, loc)) {
        ordinals[loc] = {};
    }
    if (!Object.prototype.hasOwnProperty.call(ordinals[loc], special)) {
        ordinals[loc][special] = {};
    }
    if (!Object.prototype.hasOwnProperty.call(ordinals[loc][special], num)) {
        ordinals[loc][special][num] = toOrdinal_1.default(special, num, loc);
    }
    return ordinals[loc][special][num];
}
exports.default = getOrdinal;
//# sourceMappingURL=getOrdinal.js.map