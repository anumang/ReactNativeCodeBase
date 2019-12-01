import PropTypes from 'prop-types';
import React from 'react';

import { colors } from '../../theme';

import { TextStyled } from './Text.styled';

const Text = ({ text, size, color }) => (
  <TextStyled size={size} color={color}>
    {text}
  </TextStyled>
);

Text.propTypes = {
  text: PropTypes.string,
  size: PropTypes.oneOf(['button', 'body1', 'body2', 'heading1', 'heading2']),
  color: PropTypes.oneOf(Object.keys(colors)),
};

Text.defaultProps = {
  text: '',
  size: 'body1',
  color: 'text',
};

export default Text;
