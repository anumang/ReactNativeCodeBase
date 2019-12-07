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

  static goBack() {
    // see discussion https://github.com/react-navigation/react-navigation/issues/3180
    Navigation.Navigator.dispatch(
      NavigationActions.back({ key: null })
    );
  }
}

export default Navigation;
