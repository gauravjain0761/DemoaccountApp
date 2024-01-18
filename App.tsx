import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import RootContainer from './src/navigators/MainNavigator';
import Toast from 'react-native-toast-message';
import {SCREEN_WIDTH, fontSize, hp} from './src/utils/constant';
import {colors} from './src/utils/theme';
import store from './src/reducers';


const App: React.FC = () => {
  const toastConfig = {
    success: ({text1, text2, type, props, ...rest}: any) =>
      type === 'success' && (
        <View style={styles.textStyleToastSuccess}>
          <Text style={styles.textStyleToast}>{text1}</Text>
        </View>
      ),
    error: ({text1, text2, type, props, ...rest}: any) => {
      if (type === 'error') {
        return (
          <View style={styles.toastStyle}>
            <Text style={styles.textStyleToast}>{text1}</Text>
          </View>
        );
      }
    },
  };

  return (
    <Provider store={store}>
      <RootContainer />
      <Toast config={toastConfig} position="bottom" />
    </Provider>
  );
};

export default App;
const styles = StyleSheet.create({
  toastStyle: {
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingLeft: 10,
    paddingRight: 20,
    borderRadius: 5,
    borderLeftWidth: 6,
    borderLeftColor: 'red',
    borderWidth: 1.5,
    borderColor: 'red',
    width: SCREEN_WIDTH - hp(6),
  },
  textStyleToastSuccess: {
    backgroundColor: colors.white,
    paddingVertical: 15,
    paddingLeft: 10,
    paddingRight: 20,
    borderRadius: 5,
    borderLeftWidth: 6,
    borderLeftColor: 'green',
    borderWidth: 1.5,
    borderColor: 'green',
    width: SCREEN_WIDTH - hp(6),
  },
  textStyleToast: {
    fontSize: fontSize(20),
    color: colors.black,
  },
});
