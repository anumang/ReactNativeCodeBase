import styled from 'styled-components';

import { colors, shadow } from '../../theme';

// eslint-disable-next-line import/prefer-default-export
export const SafeAreaViewStyled = styled.SafeAreaView({
  ...shadow,
  flexDirection: 'row',
  backgroundColor: colors.primary,
});
