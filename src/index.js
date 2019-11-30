import React from 'react';

import { NavigationProvider } from './_common/contexts/with-navigation';
import { SessionProvider } from './_common/contexts/with-session';
import { TranslationProvider } from './_common/contexts/with-translation';
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
