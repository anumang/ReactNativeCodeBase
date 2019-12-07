import PropTypes from 'prop-types';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import { Modal } from '../../_common/components/modal';
import { NavBar } from '../../_common/components/nav-bar';

const Home = ({ navigation: { getParam, setParams } }) => (
  <SafeAreaView
    forceInset={{
      bottom: 'always',
      top: 'never',
    }}>
    <Text>
      Hello Home
    </Text>
    <Modal
      onRequestClose={() => setParams({
        showNotification: false,
      })}
      visible={getParam('showNotification')}>
      <Text>
        This is your notification
      </Text>
    </Modal>
  </SafeAreaView>
);

Home.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func.isRequired,
    setParams: PropTypes.func.isRequired,
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
