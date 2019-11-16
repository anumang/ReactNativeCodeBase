import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import { Touchable } from '../../_common/components/touchable';
import { withNavigation } from '../../_common/context/with-navigation';

@withNavigation()
class Landing extends Component {
  render() {
    const { reset, navigation: { navigate } } = this.props;
    return (
      <SafeAreaView>
        <Text>Hello Landing</Text>
        <Touchable onPress={() => navigate('Login')}>
          <Text>Login</Text>
        </Touchable>
        <Touchable onPress={() => reset('Pages')}>
          <Text>Home</Text>
        </Touchable>
      </SafeAreaView>
    );
  }
}

Landing.propTypes = {
  reset: PropTypes.func,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

Landing.defaultProps = {
  reset: () => {},
};

export default Landing;
