import toOrdinal from './toOrdinal';
import { ordinalsType } from './types';

const ordinals: ordinalsType = {};

export default function getOrdinal(key: string, num: string | number, loc: string) {
	const special = (key.match(/[!^?+&>@]+/g) || [])[0];

	if (!special) {
		return num;
	}

	if (
		ordinals[loc] &&
		ordinals[loc][special] &&
		ordinals[loc][special][num]
	) {
		return ordinals[loc][special][num];
	}
	if (!Object.prototype.hasOwnProperty.call(ordinals, loc)) {
		ordinals[loc] = {};
	}
	if (!Object.prototype.hasOwnProperty.call(ordinals[loc], special)) {
		ordinals[loc][special] = {};
	}
	if (!Object.prototype.hasOwnProperty.call(ordinals[loc][special], num)) {
		ordinals[loc][special][num] = toOrdinal(special, num, loc);
	}

	return ordinals[loc][special][num];
}