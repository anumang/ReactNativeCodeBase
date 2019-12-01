import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { colors } from '../../theme';
import { Icon } from '../icon';
import { Text } from '../text';

import { ViewStyled, ViewErrorStyled, TextInputStyled } from './TextField.styled';

const TextField = forwardRef(({
  autoCapitalize,
  autoCorrect,
  keyboardType,
  multiline,
  numberOfLines,
  onChangeText,
  onSubmitEditing,
  placeholder,
  returnKeyType,
  secureTextEntry,
  errorValue,
  iconName,
  value,
}, ref) => (
  <>
    <ViewStyled errorValue={errorValue}>
      <TextInputStyled
        ref={ref}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        keyboardType={keyboardType}
        multiline={multiline}
        numberOfLines={numberOfLines}
        onChangeText={(text) => onChangeText(text)}
        onSubmitEditing={onSubmitEditing}
        placeholder={placeholder}
        placeholderTextColor={colors.primaryLigth}
        selectionColor={colors.text}
        returnKeyType={returnKeyType}
        secureTextEntry={secureTextEntry}
        textAlignVertical={multiline ? 'top' : 'center'}
        underlineColorAndroid="transparent"
        value={value}
        />
      <If condition={iconName}>
        <Icon iconName={iconName} />
      </If>
    </ViewStyled>
    <If condition={errorValue}>
      <ViewErrorStyled>
        <Text text={errorValue} size="body2" color="error" />
      </ViewErrorStyled>
    </If>
  </>
));

TextField.propTypes = {
  autoCapitalize: PropTypes.oneOf(['none', 'sentences', 'words', 'characters']),
  autoCorrect: PropTypes.bool,
  keyboardType: PropTypes.oneOf(['default', 'number-pad', 'decimal-pad', 'numeric', 'email-address', 'phone-pad']),
  multiline: PropTypes.bool,
  numberOfLines: PropTypes.number,
  onChangeText: PropTypes.func,
  onSubmitEditing: PropTypes.func,
  placeholder: PropTypes.string,
  returnKeyType: PropTypes.oneOf(['done', 'go', 'next', 'search', 'send']),
  secureTextEntry: PropTypes.bool,
  errorValue: PropTypes.string,
  iconName: PropTypes.string,
  value: PropTypes.string,
};

TextField.defaultProps = {
  autoCapitalize: 'none',
  autoCorrect: false,
  keyboardType: 'default',
  multiline: false,
  numberOfLines: undefined,
  onChangeText: () => {},
  onSubmitEditing: () => {},
  placeholder: '',
  returnKeyType: undefined,
  secureTextEntry: false,
  errorValue: undefined,
  iconName: undefined,
  value: undefined,
};

export default TextField;
