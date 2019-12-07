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

export const ViewStyledLeft = styled.View({
  height: layout.navBarHeight,
  position: 'absolute',
  left: '0',
});

export const ViewStyledRight = styled.View({
  height: layout.navBarHeight,
  position: 'absolute',
  right: '0',
});
