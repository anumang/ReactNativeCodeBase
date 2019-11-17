import PropTypes from 'prop-types';
import React, { useCallback } from 'react';

import { Session } from '../../service/session';

export const SessionContext = React.createContext({});

export const SessionProvider = ({ children }) => {
  const getToken = useCallback(async () => {
    const token = await Session.getToken();

    return token;
  }, []);

  const putToken = useCallback(async (token) => {
    await Session.putToken(token);

    return true;
  }, []);

  return (
    <SessionContext.Provider
      value={{
        getToken,
        putToken,
      }}>
      {children}
    </SessionContext.Provider>
  );
};

SessionProvider.propTypes = {
  children: PropTypes.node,
};

SessionProvider.defaultProps = {
  children: null,
};

export default SessionProvider;
