import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { KeyboardView } from '../_common/components/keyboard-view';
import { TabBar } from '../_common/components/tab-bar';
import { withNavigation } from '../_common/context/with-navigation';
import { withSession } from '../_common/context/with-session';

import { Home } from './home';
import { Landing } from './landing';
import { Login } from './login';
import { Profile } from './profile';

const LandingNavigator = createStackNavigator({
  Landing,
  Login,
});

const PagesNavigator = createBottomTabNavigator(
  {
    Home: createStackNavigator({
      Home,
    }),
    Profile: createStackNavigator({
      Profile,
    }),
  },
  {
    tabBarComponent: TabBar,
  }
);

const Navigator = createStackNavigator(
  {
    Landing: LandingNavigator,
    Pages: PagesNavigator,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Landing', // TODO: May need improvemets to swithc app with session
  }
);

const Container = createAppContainer(Navigator);

@withSession()
@withNavigation()
class Pages extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { setNavigator } = this.props;

    return (
      <KeyboardView>
        <Container ref={(navigator) => setNavigator(navigator)} />
      </KeyboardView>
    );
  }
}

Pages.propTypes = {
  setNavigator: PropTypes.func,
};

Pages.defaultProps = {
  setNavigator: () => {},
};

export default Pages;
