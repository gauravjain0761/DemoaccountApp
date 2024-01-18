import React from 'react';
import { Text, StyleSheet, TouchableOpacity} from 'react-native';
import {fontFamily, fontSize, hp, wp} from '../../utils/constant';
import {colors,commonFontStyle} from '../../utils/theme';

export type State = {
  buttonText: string;
  onPress: () => void;
};

const CommonButton = ({buttonText, onPress}: State) => {
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
      <Text style={styles.textStyle}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: colors.blue,
    borderRadius: 60, 
    width: "100%",
    marginVertical: hp(1),
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(54),
    marginBottom:hp(15)
  },
  textStyle: {
    ...commonFontStyle(fontFamily.medium, 17, colors.white),
  },
});

export default CommonButton;
