/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// files
import ReduxNavigator from './ReduxTabNavigator';
import RQueryNavigator from './RQueryTabNavigator';
import TabBarIcon from '../components/TabBarIcon';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { BottomTabParamList } from '../types/navigation';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
export default function BottomTabNavigator(): JSX.Element {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Redux"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      {/* redux screen */}
      <BottomTab.Screen
        name="Redux"
        component={ReduxNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />

      {/* TODO: react-query screen */}
      <BottomTab.Screen
        name="RQuery"
        component={RQueryNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
