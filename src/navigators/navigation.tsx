import React, {FC, useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// screens
import Homescreen from '../screen/Home/Homescreen';
import {screenName} from '../utils/constants';
import SigninScreen from '../screen/auth/SigninScreen';
import SignupScreen from '../screen/auth/SignupScreen';
import {useDispatch} from 'react-redux';
import {Image} from 'react-native';
import GraphScreeen from '../screen/GraphScreeen';
import ExternalDriveSceeen from '../screen/ExternalDriveSceeen';
import MessagesScreen from '../screen/MessagesScreen';
import TickCircleScreen from '../screen/TickCircleScreen';
import { icons } from '../assets';
import { IsIOS, hp, wp } from '../utils/constant';
import { colors } from '../utils/theme';

const Stack = createStackNavigator();

export type RootStackParamList = {
  HomeScreen: undefined;
  ExternalDriveSceeen: undefined;
  GraphScreeen: undefined;
  MessagesScreen: undefined;
  TickCircleScreen: undefined;
};

const headerStyleTransparent = {
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  headerShown: false,
};

const screenOptions = {
  headerShown: false,
};

const Tab = createBottomTabNavigator<RootStackParamList>();
const BottomTab: FC = () => {
  const dispatch = useDispatch();
  return (
    <Tab.Navigator
     initialRouteName={screenName.homeScreen}
      screenOptions={({route}: any) => ({
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => {
          let iconName;
          if (route.name == screenName.homeScreen) {
            iconName = focused
              ? icons.container
              : icons.container;
          } else if (route.name == screenName.graphScreeen) {
            iconName = focused
              ? icons.graph
              : icons.graph;
          } else if (route.name == screenName.externalDriveSceeen) {
            iconName = focused
              ? icons.externaldrive
              :icons.externaldrive
          } else if (route.name == screenName.messagesScreen) {
            iconName = focused
              ? icons.messages
              : icons.messages
          } else if (route.name == screenName.tickCircleScreen) {
            iconName = focused
              ? icons.tickcircle
              : icons.tickcircle
          }
          return (
            <Image
              style={{
                width: route.name == screenName.homeScreen ? wp(52) : wp(24),
                height: route.name == screenName.homeScreen ? wp(52) : wp(24),
                resizeMode: 'contain',
                marginTop:10
              }}
              source={iconName}
            />
          );
        },
        tabBarStyle:{
          // borderBlockColor:colors.grey,
          borderRadius:10,
          shadowColor:colors.grey,
          shadowOffset: {
            width: 1,
            height: -10,
          },
          paddingBottom: IsIOS ?hp(18) :hp(10),
          height: IsIOS? hp(70) :hp(60)
        }
      })}>
      <Tab.Screen
        options={({navigation}) => ({...screenOptions})}
        name={screenName.graphScreeen}
        component={GraphScreeen}
      />
      <Tab.Screen
        name={screenName.externalDriveSceeen}
        component={ExternalDriveSceeen}
        options={({navigation}) => ({...screenOptions})}
      />
       <Tab.Screen
        options={({navigation}) => ({...screenOptions})}
        name={screenName.homeScreen}
        component={Homescreen}
        
      />
      <Tab.Screen
        options={({navigation}) => ({...screenOptions})}
        name={screenName.messagesScreen}
        component={MessagesScreen}
      />
      <Tab.Screen
        options={({navigation}) => ({...screenOptions})}
        name={screenName.tickCircleScreen}
        component={TickCircleScreen}
      />
    </Tab.Navigator>
  );
};

const StackNavigator: FC = () => {
  return (
    <Stack.Navigator initialRouteName={screenName.signinScreen}>
      <Stack.Screen
        options={({navigation}) => ({...headerStyleTransparent})}
        name={"BottomTab"}
        component={BottomTab}
      />
      <Stack.Screen
        name={screenName.signinScreen}
        component={SigninScreen}
        options={({navigation}) => ({...headerStyleTransparent})}
      />
      <Stack.Screen
        name={screenName.signupScreen}
        component={SignupScreen}
        options={({navigation}) => ({...headerStyleTransparent})}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
