import enUSLocales from '../../assets/locales/en_US.json';
import svUSocales from '../../assets/locales/sv_US.json';

class Translation {
  static localeTranslations = [enUSLocales, svUSocales];

  static getAvailableLocales() {
    return ['en-US', 'sv-US'];
  }

  static getDefaultLocale() {
    return 'en-US';
  }

  static async loadTranslationsByLocale(locale) {
    const translations = await new Promise((resolve) => resolve(Translation.localeTranslations[
      Translation.getAvailableLocales().indexOf(locale)
    ]));

    return translations;
  }
}

export default Translation;
