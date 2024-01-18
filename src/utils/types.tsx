import { NavigationProp, Route, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";


import store from "../reducers/store";
import { RootStackParamList } from "../navigators/navigation";

type UniversalScreenRouteProp = RouteProp<RootStackParamList>;

type UniversalScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

export type UniversalProps = {
  route: UniversalScreenRouteProp;
  navigation: UniversalScreenNavigationProp;
};

export interface RouterProps {
  navigation: NavigationProp<any, any>;
  route: RouteProp<any, any>;
}

//@ts-ignore
export type RootState = ReturnType<typeof store.getState>;
//@ts-ignore
export type AppDispatch = typeof store.dispatch;

