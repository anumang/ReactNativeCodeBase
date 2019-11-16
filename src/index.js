import React from 'react';

import { NavigationProvider } from './_common/context/with-navigation';
import { SessionProvider } from './_common/context/with-session';
import Pages from './pages';

const App = () => (
  <SessionProvider>
    <NavigationProvider>
      <Pages />
    </NavigationProvider>
  </SessionProvider>
);

export default App;
