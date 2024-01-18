import React from "react";
import { View, Modal, StyleSheet, ActivityIndicator } from "react-native";
import { colors } from "../../utils/theme";
import { wp } from "../../utils/constant";

const Loader = ({ visible = false }) => {
  return (
    <Modal visible={visible} transparent={true}>
      <View style={style.containerStyle}>
        <ActivityIndicator
          size={"large"}
          color={colors.grey}
          style={style.loaderStyle}
        />
      </View>
    </Modal>
  );
};

const style = StyleSheet.create({
  containerStyle: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    flex: 1,
  },
  loaderStyle: {
    backgroundColor: colors.white,
    padding: wp(10),
    borderRadius: wp(3),
  },
});

export default Loader;
