import React from 'react';

import { SessionContext } from './SessionProvider';

export default () => (Page) => (props) => (
  <SessionContext.Consumer>
    {(context) => <Page {...props} {...context} />}
  </SessionContext.Consumer>
);
