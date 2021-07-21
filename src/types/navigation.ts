/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { ColorSchemeName } from 'react-native';

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Redux: undefined;
  TabTwo: undefined;
};

export type ReduxParamList = {
  ReduxScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type NavigationProps = {
  colorScheme: ColorSchemeName;
};
