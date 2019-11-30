import styled from 'styled-components';

import { colors, shadow, layout } from '../../styles';

export const SafeAreaViewStyled = styled.SafeAreaView({
  ...shadow,
  flexDirection: 'row',
  backgroundColor: colors.primary,
});

export const IconImageStyled = styled.Image({
  height: layout.iconHeight,
  opacity: 0.25,
  width: layout.iconHeight,
});

export const IconImageActiveStyled = styled(IconImageStyled)({
  opacity: 1,
});
