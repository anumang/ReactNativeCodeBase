import PropTypes from 'prop-types';
import React from 'react';
import { KeyboardAvoidingView, Platform, View } from 'react-native';


const KeyboardView = ({ children }) => {
  if (Platform.OS === 'android') {
    return <View>{children}</View>;
  }

  return (
    <KeyboardAvoidingView behavior="padding">
      {children}
    </KeyboardAvoidingView>
  );
};

KeyboardView.propTypes = {
  children: PropTypes.node,
};

KeyboardView.defaultProps = {
  children: null,
};

export default KeyboardView;
