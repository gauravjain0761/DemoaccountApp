//import liraries
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {fontFamily, hp, wp} from '../../utils/constant';
import {colors, commonFontStyle} from '../../utils/theme';
import {icons} from '../../assets';

export type InputProps = {
  placeholder?: string;
  value: string;
  onChangeText: (params: string) => void;
  secureTextEntry?: boolean;
  container?: ViewStyle;
  icon:any
};

const Input = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  container,
  icon
}: InputProps) => {
  return (
    <View style={[styles.inputcontainer, container]}>
      <Image resizeMode="contain" style={styles.iconStyle} source={icon} />
      <TextInput
        value={value}
        placeholder={placeholder}
        style={styles.inputStyle}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={colors.grey}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputcontainer: {
    height: hp(60),
    borderRadius: 10,
    marginTop: hp(5),
    backgroundColor: colors.whiteF8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(20),
    marginBottom: hp(24),
  },
  inputStyle: {
    flex: 1,
    padding: 0,
    ...commonFontStyle(fontFamily.regular, 14, colors.black33),
  },
  iconStyle: {
    height: hp(26),
    width: hp(26),
    marginRight: wp(17),
  },
});

export default Input;
