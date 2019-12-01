import styled from 'styled-components';

import { colors, layout, typography } from '../../theme';

export const ViewErrorStyled = styled.View({
//
});

export const ViewStyled = styled.View(({ errorValue }) => ({
  alignItems: 'center',
  flexDirection: 'row',
  overflow: 'hidden',
  borderColor: errorValue ? colors.error : colors.textLigth,
  borderRadius: layout.radius,
  borderWidth: layout.border,
  marginVertical: layout.margin / 2,
}));

export const TextInputStyled = styled.TextInput({
  ...typography.body1,
  color: colors.text,
  flex: 1,
  height: layout.inputLineHeight,
  // background: 'red',
  // paddingBottom: 5,
});
