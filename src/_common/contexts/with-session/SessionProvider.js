import PropTypes from 'prop-types';
import React, { useCallback } from 'react';

import { Session } from '../../services/session';

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

  const putUser = useCallback(async (user) => {
    await Session.putUser(user);

    return true;
  }, []);

  const getUser = useCallback(async () => {
    const user = await Session.getUser();

    return user;
  }, []);

  return (
    <SessionContext.Provider
      value={{
        getToken,
        putToken,
        getUser,
        putUser,
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
