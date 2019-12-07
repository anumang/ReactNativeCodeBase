import PropTypes from 'prop-types';
import React from 'react';

import Icons from '../../assets/icons';

import { IconImageStyled } from './Icon.styled';

const Icon = ({ iconName, state }) => (
  <IconImageStyled source={Icons[iconName]} state={state} />
);

Icon.propTypes = {
  iconName: PropTypes.oneOf([
    'Home', 'Profile', 'ArrowBack',
    'Notification', 'NotificationActive',
  ]).isRequired,
  state: PropTypes.oneOf(['active', 'disabled']),
};

Icon.defaultProps = {
  state: null,
};

export default Icon;
