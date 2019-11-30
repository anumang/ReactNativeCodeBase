import PropTypes from 'prop-types';
import React, { useCallback } from 'react';

import { Navigation } from '../../services/navigation';

export const NavigationContext = React.createContext({});

export const NavigationProvider = ({ children }) => {
  const setNavigator = useCallback(async (navigator) => {
    await Navigation.setNavigator(navigator);

    return true;
  }, []);

  const reset = useCallback(async (routeName) => {
    await Navigation.reset(routeName);

    return true;
  }, []);

  return (
    <NavigationContext.Provider
      value={{
        setNavigator,
        reset,
      }}>
      {children}
    </NavigationContext.Provider>
  );
};

NavigationProvider.propTypes = {
  children: PropTypes.node,
};

NavigationProvider.defaultProps = {
  children: null,
};

export default NavigationProvider;
