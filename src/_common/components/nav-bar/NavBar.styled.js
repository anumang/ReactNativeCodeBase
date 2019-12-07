import styled from 'styled-components';

import { colors, shadow, layout } from '../../theme';

export const SafeAreaViewStyled = styled.SafeAreaView({
  ...shadow,
  backgroundColor: colors.primary,
});

export const ViewStyled = styled.View({
  height: layout.navBarHeight,
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: layout.iconHeight,
});

export const ViewStyledArrow = styled.View({
  height: layout.navBarHeight,
  position: 'absolute',
  left: '0',
});
