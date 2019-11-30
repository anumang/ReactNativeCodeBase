import React from 'react';

import { NavigationContext } from './NavigationProvider';

export default () => (Page) => (props) => (
  <NavigationContext.Consumer>
    {(context) => <Page {...props} {...context} />}
  </NavigationContext.Consumer>
);
