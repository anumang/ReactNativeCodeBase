import styled from 'styled-components';

import { typography, colors } from '../../theme';

// eslint-disable-next-line import/prefer-default-export
export const TextStyled = styled.Text(({ color, size }) => ({
  ...typography[size],
  ...(color ? { color: colors[color] } : {}),
}));
