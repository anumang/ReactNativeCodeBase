import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import { Button } from '../../_common/components/button';
import { Text } from '../../_common/components/text';
import { withNavigation } from '../../_common/contexts/with-navigation';
import { withTranslation } from '../../_common/contexts/with-translation';

const styles = StyleSheet.create({
  main: {
    alignItems: 'stretch',
    flex: 1,
  },
  header: {
    flexDirection: 'column',
  },
  footer: {
    flexDirection: 'row',
  },
});

@withNavigation()
@withTranslation()
class Landing extends Component {
  static propTypes = {
    reset: PropTypes.func,
    t: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  static defaultProps = {
    reset: () => {},
  };

  render() {
    const { t, reset, navigation: { navigate } } = this.props;
    return (
      <SafeAreaView
        style={styles.main}
        forceInset={{
          bottom: 'always',
          top: 'never',
        }}>
        <View style={styles.header}>
          <Text text={t('hello')} />
          <Text text="Landing" />
        </View>
        <View style={styles.footer}>
          <Button text="Login" onPress={() => navigate('Login')} primary />
          <Button text="Home" onPress={() => reset('Pages')} />
        </View>
      </SafeAreaView>
    );
  }
}

export default Landing;
