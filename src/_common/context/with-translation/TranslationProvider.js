import PropTypes from 'prop-types';
import React, { useEffect, useCallback, useState } from 'react';
import { IntlProvider } from 'react-intl';
import { addEventListener as localizeAddEventListener, removeEventListener as localizeRemoveEventListener, findBestAvailableLanguage } from 'react-native-localize';


import { Translation } from '../../service/translation';

export const TranslationProvider = ({ children }) => {
  const [internal, setInternal] = useState({
    locale: undefined,
    messages: undefined,
  });

  const handleLocaleChange = useCallback(async () => {
    const { languageTag } = findBestAvailableLanguage(Translation.getAvailableLocales()) || {};
    const locale = languageTag || Translation.getDefaultLocale();
    const messages = await Translation.loadTranslationsByLocale(locale);

    if (locale !== internal.locale) {
      setInternal({ locale, messages });
    }
  });

  useEffect(async () => {
    await handleLocaleChange();

    localizeAddEventListener('change', handleLocaleChange);

    return () => {
      localizeRemoveEventListener('change', handleLocaleChange);
    };
  }, []);

  return (
    <If condition={internal.locale}>
      <IntlProvider
        locale={internal.locale}
        messages={internal.messages}>
        {children}
      </IntlProvider>
    </If>
  );
};

TranslationProvider.propTypes = {
  children: PropTypes.node,
};

TranslationProvider.defaultProps = {
  children: null,
};

export default TranslationProvider;
