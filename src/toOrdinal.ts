export default function toOrdinal(special: string, num: number | string, loc: string) {
	const numString = String(num);
	const numNumber = Number(num);

	if (isNaN(numNumber) || num === null) {
		return numString;
	}

	const mod = numNumber % 10;
	const tenth = Math.trunc((numNumber % 100) / 10);
	const isTeen = tenth === 1 || tenth === -1;
	const isFirst = mod === 1 || mod === -1;
	const isSecond = mod === 2 || mod === -2;
	const isThird = mod === 3 || mod === -3;
	let ordinal = '';

	switch (loc) {
		case 'en':
		case 'en-ZA':
		case 'en-JM':
			switch (special) {
				case '!':
					ordinal = isTeen ? 'th' :
						isFirst ? 'st' :
							isSecond ? 'nd' :
								isThird ? 'rd' :
									'th';

					return `${numString}${ordinal}`;
				default:
					return numString;
			}
		case 'ht': {
			switch (special) {
				case '!':
					ordinal = parseInt(num.toString(), 10) === 1 ? 'ye' : 'yèm';
					return `${numString}${ordinal}`;
				default:
					return numString;
			}
		}
		case 'es': {
			switch (special) {
				case '!':
					return `${numString}º`;
				case '^!':
					return `${numString}ª`;
				default:
					return numString;
			}
		}
		// LT language special character explanation
		//
		//      Kas?  Ko?  Kam?  Ką?  Kuo?  Kur?
		// v.      !    +     >    ?     &     @
		// m.     ^!   ^+    ^>   ^?    ^&    ^@
		// v.d.   !!   ++    >>   ??    &&    @@
		// m.d.  ^!!  ^++   ^>>  ^??   ^&&   ^@@
		case 'lt': {
			switch (special) {
				case '!':
					ordinal = isTeen || !isThird ? '-as' : '-ias';
					return `${numString}${ordinal}`;
				case '^!':
					ordinal = isTeen || !isThird ? '-a' : '-ia';
					return `${numString}${ordinal}`;
				case '+':
					ordinal = isTeen || !isThird ? '-o' : '-io';
					return `${numString}${ordinal}`;
				case '^+':
					ordinal = isTeen || !isThird ? '-os' : '-ios';
					return `${numString}${ordinal}`;
				case '?':
				case '^?':
					ordinal = isTeen || !isThird ? '-ą' : '-ią';
					return `${numString}${ordinal}`;
				default:
					return numString;
			}
		}
		default:
			return numString;
	}
}