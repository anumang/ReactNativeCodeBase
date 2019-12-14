
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import { Button, NavBar, TextField } from '../../_common/components';
import { withNavigation, withTranslation, withSession } from '../../_common/contexts';

const styles = StyleSheet.create({
  main: {
    alignItems: 'stretch',
    flex: 1,
    justifyContent: 'center',
    padding: 50,
  },
});

@withSession()
@withNavigation()
@withTranslation()
class Register extends Component {
  static propTypes = {
    reset: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    putUser: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      loading: false,
    };

    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();

    this.onSubmit = this.onSubmit.bind(this);
  }

  async onSubmit() {
    const { reset, putUser } = this.props;
    const { name, email, password } = this.state;

    if (name && email && password) {
      this.setState({ loading: true }, async () => {
        await putUser({
          name,
          email,
        });
        reset('Pages');
      });
    }
  }


  render() {
    const { t } = this.props;
    const { loading } = this.state;

    return (
      <SafeAreaView
        style={styles.main}
        forceInset={{
          bottom: 'always',
          top: 'never',
        }}>
        <TextField
          onChangeText={(name) => this.setState({ name })}
          placeholder={t('name')}
          onSubmitEditing={() =>
            this.emailRef.current && this.emailRef.current.focus()}
          returnKeyType="next"
          />
        <TextField
          reference={this.emailRef}
          keyboardType="email-address"
          onChangeText={(email) => this.setState({ email })}
          onSubmitEditing={() =>
            this.passwordRef.current && this.passwordRef.current.focus()}
          placeholder={t('email')}
          returnKeyType="next"
          />
        <TextField
          reference={this.passwordRef}
          onChangeText={(password) => this.setState({ password })}
          onSubmitEditing={this.onSubmit}
          placeholder={t('password')}
          returnKeyType="done"
          secureTextEntry
          />
        <Button
          text={t('register_button')}
          loading={loading}
          onPress={this.onSubmit}
          />
      </SafeAreaView>
    );
  }
}

Register.navigationOptions = {
  header: () => <NavBar back titleKey="nav_register_title" />,
};

export default Register;
