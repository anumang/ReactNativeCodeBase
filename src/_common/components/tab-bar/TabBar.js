import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';

import { Icon } from '../icon';
import { Touchable } from '../touchable';

import { SafeAreaViewStyled } from './TabBar.styled';

const TabBar = ({
  onTabPress,
  navigation: {
    state: { index, routes },
  },
}) => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const keyboardWillHide = Keyboard.addListener(
      'keyboardWillHide',
      setHidden(false)
    );

    const keyboardWillShow = Keyboard.addListener(
      'keyboardWillShow',
      () => setHidden(true)
    );

    return () => {
      keyboardWillHide.remove(2, 4);
      keyboardWillShow.remove();
    };
  });

  if (hidden) {
    return null;
  }

  return (
    <SafeAreaViewStyled
      forceInset={{
        bottom: 'always',
        top: 'never',
      }}>
      {routes.map((route, current) => {
        const { key } = route;
        const active = index === current;

        return (
          <Touchable
            key={key}
            onPress={() =>
              onTabPress({
                route,
              })}>
            <Icon iconName={key} state={active ? 'active' : 'disabled'} />
          </Touchable>
        );
      })}
    </SafeAreaViewStyled>
  );
};

TabBar.propTypes = {
  onTabPress: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      index: PropTypes.number,
      routes: PropTypes.arrayOf(PropTypes.shape({})),
    }).isRequired,
  }).isRequired,
};

export default TabBar;
