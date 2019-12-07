import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import { NavBar } from '../../_common/components/nav-bar';

const Profile = () => (
  <SafeAreaView>
    <Text>Hello Profile</Text>
  </SafeAreaView>
);

Profile.navigationOptions = {
  header: () => <NavBar titleKey="nav_profile_title" />,
};

export default Profile;
