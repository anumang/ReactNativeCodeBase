import { materialColors, material } from 'react-native-typography';

export const colors = {
  primary: '#039dea',
  primaryDark: '#006fb7',
  primaryLigth: '#64ceff',
  secondary: '#f7f7f7',
  secondaryDark: '#c4c4c4',
  secondaryLigth: '#fffff',
  text: '#141414',
  textPrimary: '#f7f7f7',
  textSecondary: '#039dea',
  error: '#D62839',
};

export const layout = {
  margin: 20,
  iconHeight: 20,
  borderRadius: 5,
  borderWidth: 1,
  inputLineHeight: 60,
};

export const typography = {
  button: material.buttonObject,
  body1: material.body2Object,
  body2: material.body1Object,
  heading1: material.headlineObject,
  heading2: material.titleObject,
};

export const shadow = {
  elevation: 1,
  shadowColor: materialColors.blackTertiary,
  shadowOpacity: 0.5,
};
