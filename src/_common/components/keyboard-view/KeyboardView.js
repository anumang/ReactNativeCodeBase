import PropTypes from 'prop-types';
import React from 'react';
import { Platform, View } from 'react-native';

import { KeyboardAvoidingViewStyled } from './KeyboardView.styled';

const KeyboardView = ({ children }) => {
  if (Platform.OS === 'android') {
    return <View>{children}</View>;
  }

  return (
    <KeyboardAvoidingViewStyled behavior="padding">
      {children}
    </KeyboardAvoidingViewStyled>
  );
};

KeyboardView.propTypes = {
  children: PropTypes.node,
};

KeyboardView.defaultProps = {
  children: null,
};

export default KeyboardView;
