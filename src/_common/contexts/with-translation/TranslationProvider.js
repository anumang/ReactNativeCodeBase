import PropTypes from 'prop-types';
import React, { useEffect, useCallback, useState } from 'react';
import { IntlProvider } from 'react-intl';
import { addEventListener as localizeAddEventListener, removeEventListener as localizeRemoveEventListener, findBestAvailableLanguage } from 'react-native-localize';


import { Spinner } from '../../components/spinner';
import { Translation } from '../../services/translation';

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

  useEffect(() => {
    const initListener = async () => {
      await handleLocaleChange();

      localizeAddEventListener('change', handleLocaleChange);
    };

    initListener();

    return () => {
      localizeRemoveEventListener('change', handleLocaleChange);
    };
  }, []);

  return (
    <Choose>
      <When condition={internal.locale}>
        <IntlProvider
          locale={internal.locale}
          messages={internal.messages}>
          {children}
        </IntlProvider>
      </When>
      <Otherwise>
        <Spinner />
      </Otherwise>
    </Choose>
  );
};

TranslationProvider.propTypes = {
  children: PropTypes.node,
};

TranslationProvider.defaultProps = {
  children: null,
};

export default TranslationProvider;
