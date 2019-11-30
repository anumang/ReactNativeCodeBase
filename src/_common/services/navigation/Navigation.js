import { NavigationActions, StackActions } from 'react-navigation';

class Navigation {
  static Navigator = undefined;

  static setNavigator(navigator) {
    Navigation.Navigator = navigator;
  }

  static reset(routeName) {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName,
        }),
      ],
    });

    Navigation.Navigator.dispatch(resetAction);
  }
}

export default Navigation;
