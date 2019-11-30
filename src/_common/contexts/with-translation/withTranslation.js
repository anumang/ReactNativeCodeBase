import React, { useCallback } from 'react';
import { injectIntl } from 'react-intl';

export default () => (Page) => injectIntl(({ intl, ...rest }) => {
  const t = useCallback((id, params = {}, defaultMessage) => intl.formatMessage(
    { id, defaultMessage },
    params
  ), []);

  return (
    <Page {...rest} t={t} />
  );
});
