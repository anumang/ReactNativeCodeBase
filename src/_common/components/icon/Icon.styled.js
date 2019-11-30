import styled from 'styled-components';

import { layout } from '../../theme';

// eslint-disable-next-line import/prefer-default-export
export const IconImageStyled = styled.Image(({ state }) => ({
  height: layout.iconHeight,
  opacity: state === 'disabled' ? 0.25 : 1,
  width: layout.iconHeight,
}));
