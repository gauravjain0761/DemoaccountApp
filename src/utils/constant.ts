import {Dimensions, Platform} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

import {RFValue} from 'react-native-responsive-fontsize';
import Toast from 'react-native-toast-message';
import { CommonActions } from '@react-navigation/native';
import { navigationRef } from '../navigators/MainNavigator';

export const wp = (val: number) => widthPercentageToDP(val*100/375);

export const hp = (val: number) => heightPercentageToDP(val*100/812);

export const fontSize = (val: number) => RFValue(val, 812);

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
  Dimensions.get('window');

  export const IsIOS=Platform.OS === 'ios'

  export const infoToast = (message: string) => {
    Toast.show({ type: "info", text1: message });
  };
  export const errorToast = (message: string) => {
    Toast.show({ type: "error", text1: message });
  };
  
  export const otpToast = (message: string) => {
    Toast.show({ type: "otp_success", text1: message });
  };
  
  export const successToast = (message: string) => {
    Toast.show({ type: "success", text1: message });
  };

  export const dispatchNavigation = (name: string) => {
    navigationRef.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: name }],
      })
    );
  };

  export const fontFamily = {
    // bold: "ReadexPro-Bold",
    bold: "Lexend-Bold",
    black: "Lexend-Black",
    medium: "Lexend-Medium",
    regular: "Lexend-Regular",
    semiBold: "Lexend-SemiBold",
  };
  
  