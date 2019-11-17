import React from 'react';

import { NavigationProvider } from './_common/context/with-navigation';
import { SessionProvider } from './_common/context/with-session';
import { TranslationProvider } from './_common/context/with-translation';
import Pages from './pages';

const App = () => (
  <SessionProvider>
    <NavigationProvider>
      <TranslationProvider>
        <Pages />
      </TranslationProvider>
    </NavigationProvider>
  </SessionProvider>
);

export default App;
