export declare type ordinalsType = {
    [lang: string]: {
        [specialSymbol: string]: {
            [paramKey: string]: string;
        };
    };
};
export declare type eventStringType = {
    [lang: string]: {
        awayTeam?: string;
        homeTeam?: string;
        players?: {
            [key: string]: string;
        };
    };
};
export declare type paramsType = {
    [key: string]: string | number;
};
export declare type betParamsType = {
    params: paramsType | null;
    lang: string;
    stringsUILang?: string;
    ignoreOptionalParams?: boolean;
    eventStrings?: eventStringType;
};
export declare type teamsAndParamsType = {
    event?: {
        awayTeam?: string;
        homeTeam?: string;
        dynamicData?: {
            strings: eventStringType;
        };
        strings?: eventStringType;
    };
    betParams: paramsType | null;
    selection: string;
    stringsUILang?: string;
};
export declare type teamsType = {
    awayTeam: string | undefined;
    homeTeam: string | undefined;
};
