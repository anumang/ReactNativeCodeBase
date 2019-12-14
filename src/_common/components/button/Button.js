import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

import { Text } from '../text';
import { Touchable } from '../touchable';

import { ViewStyled } from './Button.styled';

const Button = ({ text, primary, onPress }) => {
  const borderColor = useMemo(() => ((!primary && 'primary') || undefined), [primary]);
  const backgroundColor = useMemo(() => ((primary && 'primary') || 'secondary'), [primary]);

  const color = useMemo(() => ((primary && 'textPrimary') || 'textSecondary'), [primary]);


  return (
    <ViewStyled>
      <Touchable
        onPress={onPress}
        backgroundColor={backgroundColor}
        borderColor={borderColor || backgroundColor}>
        <Text text={text} size="body2" color={color} />
      </Touchable>
    </ViewStyled>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  primary: PropTypes.bool,
  onPress: PropTypes.func,
};

Button.defaultProps = {
  text: '',
  primary: false,
  onPress: () => {},
};

export default Button;
