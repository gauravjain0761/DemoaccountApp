import { TextStyle } from "react-native";
import { fontSize } from "./constant";

export const colors = {
  primary: '#171E29',
  white: '#FFFFFF',
  whiteF8: '#F8F8F8',
  whiteGray: '#C2C2C2',
  blue: '#047CFF',
  black:"#000",
  black33:"#333333",
  grey:"#B3B3B3",
  grey80:"#8083A3",
  greyE5:"#E5E5E5",
  red:'#F33535',
  line:'#A9A9A9'
};

export function commonFontStyle(
  fontFamily: string,
  size: number,
  color: string
): TextStyle {
  return {
    fontFamily: fontFamily,
    fontSize: fontSize(size),
    color: color,
    includeFontPadding: false,
  };
}