import styled from 'styled-components';

import { layout } from '../../styles';

const styles = {
  alignItems: 'center',
  flex: 1,
  justifyContent: 'center',
  padding: layout.margin,
};

export const TouchableNativeFeedbackStyled = styled.TouchableNativeFeedback(styles);

export const TouchableOpacityStyled = styled.TouchableOpacity(styles);
