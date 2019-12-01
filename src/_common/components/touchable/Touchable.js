import PropTypes from 'prop-types';
import React from 'react';
import { TouchableNativeFeedback, Platform } from 'react-native';

import { colors } from '../../theme';

import {
  TouchableOpacityStyled, ViewStyled
} from './Touchable.styled';

const Touchable = ({
  children, backgroundColor, borderColor, onPress,
}) => {
  if (Platform.OS === 'android') {
    return (
      <TouchableNativeFeedback onPress={onPress}>
        <ViewStyled
          borderColor={borderColor}
          backgroundColor={backgroundColor}>
          {children}
        </ViewStyled>
      </TouchableNativeFeedback>
    );
  }

  return (
    <TouchableOpacityStyled
      onPress={onPress}
      borderColor={borderColor}
      backgroundColor={backgroundColor}>
      {children}
    </TouchableOpacityStyled>
  );
};

Touchable.propTypes = {
  children: PropTypes.node,
  backgroundColor: PropTypes.oneOf(Object.keys(colors)),
  borderColor: PropTypes.string,
  onPress: PropTypes.func,
};

Touchable.defaultProps = {
  children: null,
  backgroundColor: null,
  borderColor: null,
  onPress: () => {},
};

export default Touchable;
