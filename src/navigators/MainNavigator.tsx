import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import React, {FC} from 'react';

import {Loader} from '../components';
import {useSelector} from 'react-redux';
import StackNavigator from './navigation';
import {StatusBar} from 'react-native';
import {colors} from '../utils/theme';

export const navigationRef = createNavigationContainerRef();

const RootContainer: FC = () => {
  const {isLoading} = useSelector(state => state.common);
  console.log('isLoading', isLoading);

  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar
        backgroundColor={'transparent'}
        translucent
        barStyle={'dark-content'}
      />

      <Loader visible={isLoading} />
      <StackNavigator />
    </NavigationContainer>
  );
};
export default RootContainer;
