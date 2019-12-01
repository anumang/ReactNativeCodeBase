import styled from 'styled-components';

import { colors, layout } from '../../theme';

const styles = {
  alignItems: 'center',
  flex: 1,
  justifyContent: 'center',
  padding: layout.margin,
};

export const ViewStyled = styled.View(({ borderColor, backgroundColor }) => ({
  ...(backgroundColor ? { backgroundColor: colors[backgroundColor] } : {}),
  ...(borderColor ? {
    borderWidth: layout.borderWidth,
    borderRadius: layout.borderRadius,
    borderColor: colors[borderColor],
  } : {}),
}));

export const TouchableOpacityStyled = styled.TouchableOpacity((
  { borderColor, backgroundColor }
) => ({
  ...styles,
  ...(backgroundColor ? { backgroundColor: colors[backgroundColor] } : {}),
  ...(borderColor ? {
    borderColor: colors[borderColor],
    borderRadius: layout.borderRadius,
    borderWidth: layout.borderWidth,
  } : {}),
}));
