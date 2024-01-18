import React, {useState} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {CommonButton, Input} from '../../components';
import {useDispatch} from 'react-redux';
import {screenName} from '../../utils/constants';
import {useNavigation} from '@react-navigation/native';
import {onSignin, onSignup} from '../../actions/authAction';
import {SafeAreaView} from 'react-native-safe-area-context';
import {icons} from '../../assets';
import {
  IsIOS,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  dispatchNavigation,
  fontFamily,
  hp,
  wp,
} from '../../utils/constant';
import {colors, commonFontStyle} from '../../utils/theme';
import {emailCheck} from '../../utils/validation';

function SignupScreen() {
  const dispatch = useDispatch<any>();
  const {navigate} = useNavigation<any>();
  const [inputData, setInputData] = useState({
    userName: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const loginData = [
    {icom: icons.facebook},
    {icom: icons.apple, ios: IsIOS},
    {icom: icons.google},
  ];
  const onPressBtn = () => {
    if (inputData.userName.trim().length == 0) {
      setError('Please enter your user name');
    } else if (inputData.email.trim().length == 0) {
      setError('Please enter your email');
    } else if (!emailCheck(inputData.email)) {
      setError('Please enter your email');
    } else if (inputData.password.trim().length == 0) {
      setError('Please enter your password');
    } else if (inputData.password.trim().length < 8) {
      setError(
        'Your password must contain at least 8 digits, a special character, at least a number and at least a capital letter.',
      );
    } else {
      const obj = {
        data: {
          name: inputData.userName,
          email: inputData.email,
          password: inputData.password,
        },
        onSuccess: (res: any) => {
          setError('');
          setInputData({
            userName: '',
            email: '',
            password: '',
          });
          dispatchNavigation('BottomTab');
        },
        onFailure: (err: string) => {
          setError(err);
        },
      };
      dispatch(onSignup(obj));
    }
  };

  return (
    <SafeAreaView style={styles.body}>
      <Image source={icons.leftBg} style={styles.leftSideIcons} />
      <KeyboardAvoidingView style={styles.container}>
        <Image source={icons.logo} style={styles.logoStyle} />
        <Text style={styles.headerText}>Create an account</Text>
        <Text style={styles.headerSubText}>
          You don’t have account let’s create account
        </Text>
        <Input
          value={inputData.userName}
          icon={icons.user}
          placeholder="Enter your user name"
          onChangeText={(t: string) =>
            setInputData({...inputData, userName: t})
          }
        />
        <Input
          value={inputData.email}
          icon={icons.sms}
          placeholder="Enter your email address"
          onChangeText={(t: string) => setInputData({...inputData, email: t})}
        />
        <Input
          value={inputData.password}
          icon={icons.lock}
          placeholder="* * * * * * * *"
          onChangeText={(t: string) =>
            setInputData({...inputData, password: t})
          }
          container={{marginBottom: hp(16)}}
        />
       {error && <Text style={styles.errorStyle}>{error}</Text>}
        <View style={styles.forgotView}>
          <TouchableOpacity>
            <Image
              source={icons.bluecheck}
              resizeMode="contain"
              style={styles.checkBoxStyle}
            />
          </TouchableOpacity>
          <Text style={styles.rememberText}>
            I agree with terms & conditions
          </Text>
        </View>
        <View style={styles.forgotView}>
          <TouchableOpacity>
            <Image
              source={icons.bluecheck}
              resizeMode="contain"
              style={styles.checkBoxStyle}
            />
          </TouchableOpacity>
          <Text style={styles.rememberText}>Allow Notifications</Text>
        </View>
      </KeyboardAvoidingView>
      <CommonButton buttonText={'Proceed'} onPress={onPressBtn} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {flex: 1, paddingHorizontal: wp(16), backgroundColor: colors.white},
  container: {
    flex: 1,
  },
  logoStyle: {
    width: wp(74),
    height: wp(74),
    alignSelf: 'center',
  },
  headerText: {
    textAlign: 'center',
    marginTop: hp(18),
    fontWeight: '600',
    ...commonFontStyle(fontFamily.medium, 24, colors.blue),
  },
  headerSubText: {
    textAlign: 'center',
    marginTop: hp(18),
    fontWeight: '400',
    marginBottom: hp(44),
    ...commonFontStyle(fontFamily.regular, 14, colors.grey),
  },
  errorStyle: {
    fontWeight: '500',
    marginBottom: hp(33),
    ...commonFontStyle(fontFamily.medium, 14, colors.red),
  },
  forgotView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(14),
  },
  checkBoxStyle: {
    width: 20,
    height: 20,
    marginRight: wp(8),
  },
  rememberText: {
    fontWeight: '500',
    ...commonFontStyle(fontFamily.medium, 12, colors.black33),
  },
  forgotText: {
    fontWeight: '500',
    ...commonFontStyle(fontFamily.medium, 12, colors.blue),
  },
  loginView: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: hp(59),
  },
  loginIconStyle: {
    width: wp(50),
    height: wp(50),
    marginRight: wp(24),
  },
  orViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: hp(32),
    marginBottom: hp(47),
  },
  lineStyle: {
    height: 1,
    width: wp(157),
    borderWidth: 0.5,
    borderColor: colors.line,
  },
  orText: {
    fontWeight: '400',
    marginHorizontal: wp(7),
    ...commonFontStyle(fontFamily.regular, 12, colors.blue),
  },
  dontViewStyle: {
    alignSelf: 'center',
    marginBottom: hp(35),
  },
  dontTextStyle: {
    fontWeight: '500',
    ...commonFontStyle(fontFamily.regular, 14, colors.grey80),
  },
  signupText: {
    fontWeight: '500',
    ...commonFontStyle(fontFamily.regular, 14, colors.blue),
  },
  leftSideIcons: {
    left: -SCREEN_WIDTH * 0.1,
    position: 'absolute',
    width: wp(160),
    height: hp(190),
    resizeMode: 'contain',
    top: -SCREEN_HEIGHT * 0.04,
  },
});

export default SignupScreen;
