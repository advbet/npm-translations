export default function translationByLocale<T>(
    translations: { [lang: string]: T },
    loc: string,
  ): T {
    return translations[loc] || translations[loc.split('-')[0]] || translations.en;
  }