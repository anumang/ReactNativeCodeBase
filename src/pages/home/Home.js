import PropTypes from 'prop-types';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import { NavBar } from '../../_common/components/nav-bar';

const Home = ({ navigation: { getParam } }) => (
  <SafeAreaView>
    <Text>
      Hello Home
      {getParam('showNotification') ? ' & This is the notification' : ''}
    </Text>
  </SafeAreaView>
);

Home.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};

Home.navigationOptions = ({ navigation: { setParams } }) => ({
  header: () => (
    <NavBar
      title="Home"
      notification={{
        onPress: () => setParams({
          showNotification: true,
        }),
      }}
      />
  ),
}
);

export default Home;
