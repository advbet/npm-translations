import { paramsType, teamsAndParamsType, teamsType } from './types';
export default function getTeamsAndParams({ event, betParams, selection, stringsUILang }: teamsAndParamsType): {
    params: paramsType;
    teams: teamsType;
};
