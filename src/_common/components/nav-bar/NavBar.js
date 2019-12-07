import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { withNavigation } from '../../contexts/with-navigation';
import { Icon } from '../icon';
import { Text } from '../text';
import { Touchable } from '../touchable';

import { SafeAreaViewStyled, ViewStyled, ViewStyledArrow } from './NavBar.styled';

@withNavigation()
class NavBar extends Component {
 static propTypes = {
   back: PropTypes.bool,
   title: PropTypes.string.isRequired,
   goBack: PropTypes.func.isRequired,
 }

 static defaultProps = {
   back: false,
 }

 render() {
   const { back, title, goBack } = this.props;

   return (
     <SafeAreaViewStyled
       forceInset={{
         bottom: 'never',
         top: 'always',
       }}>
       <ViewStyled>
         <ViewStyledArrow>
           {back && (
           <Touchable onPress={() => goBack()}>
             <Icon iconName="ArrowBack" />
           </Touchable>
           )}
         </ViewStyledArrow>
         <Text text={title} />
       </ViewStyled>
     </SafeAreaViewStyled>
   );
 }
}

export default NavBar;
