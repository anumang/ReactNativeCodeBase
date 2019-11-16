import PropTypes from 'prop-types';
import React from 'react';
import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
  View
} from 'react-native';

const Touchable = ({ children, onPress, style }) => {
  if (Platform.OS === 'android') {
    return (
      <TouchableNativeFeedback onPress={onPress}>
        <View style={style}>{children}</View>
      </TouchableNativeFeedback>
    );
  }

  return (
    <TouchableOpacity style={style} onPress={onPress}>
      {children}
    </TouchableOpacity>
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
