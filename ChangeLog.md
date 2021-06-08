## 1.2.6

Add ordinal generator for 'en-JM' language.

## 1.2.5

Compile code to es3.

## 1.2.4
Fix '!' ordinal generator for 'es' and 'lt' languages.
Generate ordinals only for parameters that were white-listed.

## 1.2.0
Add 'translationByLocale' function which retrieves closest possible translation from provided strings map.
Resolve available translations in buildBetParams function.
## 1.1.4

Hotfix: Support player string translations that do not start with 'player' string

## 1.1.3

Update Modules(AMD, cjs, esn) with 1.1.2 update code.

## 1.1.2

Updated buildBetParams function:
- if params has innings param, count param will be introduced equal value to inning type int.
## 1.1.0

Added new functions:
- getOrdinal - to retrieve params with special symbols in ordinal format
- toOrdinal - to retrieve number in ordinal format for special symbols
- buildBetParams - to build event parameters. Used for event market display.
- getTeamsAndParams - to retrieve event team names and parameters. Used for event market selection display.
