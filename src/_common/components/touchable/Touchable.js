import PropTypes from 'prop-types';
import React from 'react';
import {
  Platform,
  View
} from 'react-native';

import { TouchableNativeFeedbackStyled, TouchableOpacityStyled } from './Touchable.styled';

const Touchable = ({ children, onPress }) => {
  if (Platform.OS === 'android') {
    return (
      <TouchableNativeFeedbackStyled onPress={onPress}>
        <View>{children}</View>
      </TouchableNativeFeedbackStyled>
    );
  }

  return (
    <TouchableOpacityStyled onPress={onPress}>
      {children}
    </TouchableOpacityStyled>
  );
};

Touchable.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};

Touchable.defaultProps = {
  children: null,
  onPress: () => {},
};

export default Touchable;
