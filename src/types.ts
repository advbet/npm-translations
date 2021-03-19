export type ordinalsType = {
	[lang: string]: {
		[specialSymbol: string]: {
			[paramKey: string]: string
		}
	}
}

export type eventStringType = {
	[lang: string]: {
		awayTeam?: string,
		homeTeam?: string,
		players?: {
			[key: string]: string
		}
	}
}

export type paramsType = {
	[key: string]: string | number
}

export type betParamsType = {
	params: paramsType | null,
	lang: string,
	stringsUILang?: string,
	ignoreOptionalParams?: boolean,
	eventStrings?: eventStringType
}

export type teamsAndParamsType = {
	event?: {
		awayTeam?: string,
		homeTeam?: string,
		dynamicData?: {
			strings: eventStringType
		},
		strings?: eventStringType
	},
	betParams: paramsType | null,
	selection: string,
	stringsUILang?: string
}

export type teamsType = {
	awayTeam: string | undefined,
	homeTeam: string | undefined
}
