import React from 'react';
import { ActivityIndicator } from 'react-native';

import { colors } from '../../theme';

import { ViewStyled } from './Spinner.styled';

const Spinner = () => (
  <ViewStyled>
    <ActivityIndicator color={colors.primary} size="large" />
  </ViewStyled>
);

Spinner.propTypes = {};

export default Spinner;
