import PropTypes from 'prop-types';
import React from 'react';
import {
  Platform,
  View
} from 'react-native';

import { TouchableNativeFeedbackStyled, TouchableOpacityStyled } from './Touchable.styled';

const Touchable = ({ children, onPress, style }) => {
  if (Platform.OS === 'android') {
    return (
      <TouchableNativeFeedbackStyled onPress={onPress}>
        <View style={style}>{children}</View>
      </TouchableNativeFeedbackStyled>
    );
  }

  return (
    <TouchableOpacityStyled style={style} onPress={onPress}>
      {children}
    </TouchableOpacityStyled>
  );
};

Touchable.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
  style: PropTypes.shape({}),
};

Touchable.defaultProps = {
  children: null,
  onPress: () => {},
  style: {},
};

export default Touchable;
