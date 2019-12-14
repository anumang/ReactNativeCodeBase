import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import {
  Button, TextField, NavBar, Text
} from '../../_common/components';
import { withNavigation, withTranslation } from '../../_common/contexts';

const styles = StyleSheet.create({
  main: {
    alignItems: 'stretch',
    flex: 1,
    justifyContent: 'center',
    padding: 50,
  },
  header: {
    paddingVertical: 25,
  },
});

@withNavigation()
@withTranslation()
class Login extends Component {
  static propTypes = {
    reset: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
  };

  static defaultProps = {
  };

  constructor(props) {
    super(props);
    this.pswRef = React.createRef();
  }

  render() {
    const { t, reset } = this.props;
    return (
      <SafeAreaView
        style={styles.main}
        forceInset={{
          bottom: 'always',
          top: 'never',
        }}>
        <View style={styles.header}>
          <Text text={t('signin')} size="heading2" />
        </View>
        <TextField
          placeholder={t('email')}
          keyboardType="email-address"
          returnKeyType="next"
          onChangeText={(text) => text}
          onSubmitEditing={() => this.pswRef.current && this.pswRef.current.focus()}
          />
        <TextField
          ref={this.pswRef}
          placeholder={t('password')}
          returnKeyType="done"
          secureTextEntry
          onChangeText={(password) => password}
          onSubmitEditing={() => reset('Pages')}
          />
        <Button text={t('login_button')} onPress={() => reset('Pages')} primary />
      </SafeAreaView>
    );
  }
}

Login.navigationOptions = {
  header: () => <NavBar back titleKey="nav_login_title" />,
};

export default Login;
