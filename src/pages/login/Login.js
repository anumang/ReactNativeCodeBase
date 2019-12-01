import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import { Button } from '../../_common/components/button';
import { TextField } from '../../_common/components/form-fields';
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
    paddingVertical: 25,
  },
  body: {
  },
  footer: {
    paddingVertical: 25,
    flexDirection: 'row',
  },
});

@withNavigation()
@withTranslation()
class Login extends Component {
  static propTypes = {
    reset: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
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
        <View style={styles.body}>
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
        </View>
        <View style={styles.footer}>
          <Button text="Login" onPress={() => reset('Pages')} primary />
        </View>
      </SafeAreaView>
    );
  }
}

export default Login;
