import styled from 'styled-components';

import { colors, shadow, layout } from '../../theme';

export const ViewStyledModal = styled.View({
  ...shadow,
  alignItems: 'center',
  flex: 1,
  justifyContent: 'center',
});

export const ViewStyledContent = styled.View({
  backgroundColor: colors.primaryLigth,
  borderRadius: layout.borderRadius,
  maxHeight: '80%',
  maxWidth: '80%',
  minHeight: 300,
  minWidth: '80%',
  overflow: 'hidden',
});

export const TouchableOpacityStyled = styled.TouchableOpacity({
  flex: 1,
  width: '100%',
});

export const ScrollViewStyled = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
  },
}))``;
