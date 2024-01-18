import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {CommonButton} from '../../components';
import {useDispatch} from 'react-redux';
import {screenName} from '../../utils/constants';
import {useNavigation} from '@react-navigation/native';
import {icons} from '../../assets';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  IsIOS,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  fontFamily,
  hp,
  wp,
} from '../../utils/constant';
import {colors, commonFontStyle} from '../../utils/theme';

function Homescreen() {
  const dispatch = useDispatch();
  const {navigate} = useNavigation();
  const onPressBtn = () => {};

  const listData = [
    {icons: icons.user, name: 'Account information'},
    {icons: icons.shield, name: 'Google Business Profile'},
    {icons: icons.people, name: 'Team members'},
    {icons: icons.people, name: 'Log out'},
  ];

  return (
    <View style={styles.body}>
      <ImageBackground
        source={icons.homeBg}
        resizeMode="cover"
        style={styles.bgIconStyle}>
        <SafeAreaView>
          <View style={styles.userViewStyle}>
            <Image source={icons.Img} style={styles.userImage} />
            <TouchableOpacity style={styles.camereStyle}>
              <Image source={icons.camera} style={styles.camereIconStyle} />
            </TouchableOpacity>
          </View>
          <Text style={styles.userNameText}>Miriam de Jesús</Text>
          <Text style={styles.emailText}>h.mariano@gmail.com</Text>
          {listData.map((item, index) => {
            return (
              <View style={styles.listView}>
                <View style={styles.iconTextStyle}>
                  <Image source={item.icons} style={styles.iconStyle} />
                  <Text style={styles.listTextStyle}>{item.name}</Text>
                </View>
                <Image
                  source={icons.arrowright}
                  style={styles.arrowrightIcon}
                />
              </View>
            );
          })}
        </SafeAreaView>
        <Image source={icons.rightBg} style={styles.rightBgIconStyle} />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {flex: 1, backgroundColor: '#E5F2FF'},
  bgIconStyle: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  userViewStyle: {
    alignItems: 'center',
  },
  userImage: {
    width: wp(105),
    height: wp(105),
  },
  camereStyle: {
    width: wp(32),
    height: wp(32),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blue,
    borderRadius: wp(32),
    position: 'absolute',
    left: SCREEN_WIDTH * 0.56,
    bottom: 0,
    alignSelf: 'center',
  },
  camereIconStyle: {
    width: wp(15),
    height: wp(15),
  },
  listView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    justifyContent: 'space-between',
    marginHorizontal: wp(16),
    marginBottom: hp(16),
    paddingHorizontal: wp(17),
    paddingVertical: hp(15),
    borderRadius: 12,
    borderColor: colors.greyE5,
  },
  iconTextStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    width: wp(28),
    height: wp(28),
    tintColor: colors.blue,
  },
  listTextStyle: {
    fontWeight: '400',
    marginLeft: wp(16),
    ...commonFontStyle(fontFamily.regular, 16, colors.black33),
  },
  arrowrightIcon: {
    width: wp(24),
    height: wp(24),
  },
  userNameText: {
    fontWeight: '500',
    textAlign: 'center',
    marginTop: hp(13),
    ...commonFontStyle(fontFamily.regular, 18, colors.black33),
  },
  emailText: {
    fontWeight: '400',
    textAlign: 'center',
    marginTop: hp(6),
    marginBottom: hp(50),
    ...commonFontStyle(fontFamily.regular, 14, colors.grey),
  },

  rightBgIconStyle: {
    right: 0,
    position: 'absolute',
    width: wp(80),
    height: hp(190),
    resizeMode: 'contain',
    bottom: SCREEN_HEIGHT * 0.17,
  },
});

export default Homescreen;
