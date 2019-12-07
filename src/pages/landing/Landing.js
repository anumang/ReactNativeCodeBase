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
    justifyContent: 'center',
    padding: 50,
  },
  header: {
    paddingVertical: 50,
    alignItems: 'center',
  },
  footer: {
    paddingVertical: 50,
    flexDirection: 'row',
  },
});

@withNavigation()
@withTranslation()
class Landing extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  static defaultProps = {
  };

  render() {
    const { t, navigation: { navigate } } = this.props;
    return (
      <SafeAreaView
        style={styles.main}
        forceInset={{
          bottom: 'always',
          top: 'never',
        }}>
        <View style={styles.header}>
          <Text text={t('welcome')} size="heading2" />
        </View>
        <View style={styles.footer}>
          <Button text={t('already_member')} onPress={() => navigate('Login')} primary />
        </View>
      </SafeAreaView>
    );
  }
}

Landing.navigationOptions = {
  header: () => null,
};

export default Landing;
