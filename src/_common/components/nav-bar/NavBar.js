import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { withNavigation } from '../../contexts/with-navigation';
import { withTranslation } from '../../contexts/with-translation';
import { Icon } from '../icon';
import { Text } from '../text';
import { Touchable } from '../touchable';

import {
  SafeAreaViewStyled, ViewStyled, ViewStyledLeft, ViewStyledRight
} from './NavBar.styled';

@withNavigation()
@withTranslation()
class NavBar extends Component {
 static propTypes = {
   back: PropTypes.bool,
   notification: PropTypes.shape({
     onPress: PropTypes.func,
     count: PropTypes.number,
   }),
   t: PropTypes.func.isRequired,
   titleKey: PropTypes.string.isRequired,
   goBack: PropTypes.func.isRequired,
 }

 static defaultProps = {
   back: false,
   notification: {},
 }

 render() {
   const {
     t, back, titleKey, goBack, notification: { onPress, count },
   } = this.props;

   return (
     <SafeAreaViewStyled
       forceInset={{
         bottom: 'never',
         top: 'always',
       }}>
       <ViewStyled>
         <If condition={back}>
           <ViewStyledLeft>
             <Touchable onPress={() => goBack()}>
               <Icon iconName="ArrowBack" />
             </Touchable>
           </ViewStyledLeft>
         </If>
         <Text text={t(titleKey)} />
         <If condition={onPress}>
           <ViewStyledRight>
             <Touchable onPress={() => onPress()}>
               <Choose>
                 <When condition={count}>
                   <Icon iconName="NotificationActive" />
                 </When>
                 <Otherwise>
                   <Icon iconName="Notification" />
                 </Otherwise>
               </Choose>
             </Touchable>
           </ViewStyledRight>
         </If>
       </ViewStyled>
     </SafeAreaViewStyled>
   );
 }
}

export default NavBar;
