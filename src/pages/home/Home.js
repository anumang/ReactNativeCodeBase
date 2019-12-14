import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import { Modal, NavBar } from '../../_common/components';
import { withNavigation, withSession } from '../../_common/contexts';

@withSession()
@withNavigation()
class Home extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func.isRequired,
      setParams: PropTypes.func.isRequired,
    }).isRequired,
    getUser: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      userName: '',
    };
  }

  componentDidMount() {
    const { getUser } = this.props;

    getUser().then((user) => {
      const { name: userName = '' } = user;

      this.setState({ userName });
    });
  }

  render() {
    const { navigation: { getParam, setParams } } = this.props;
    const { userName } = this.state;

    return (
      <SafeAreaView
        forceInset={{
          bottom: 'always',
          top: 'never',
        }}>
        <Text>
          Hello to your Home
          {userName}
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
  }
}

Home.navigationOptions = ({ navigation: { setParams } }) => ({
  header: () => (
    <NavBar
      titleKey="nav_home_title"
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
