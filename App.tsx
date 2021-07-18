/* eslint-disable camelcase */
import React from 'react';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts, Amarante_400Regular } from '@expo-google-fonts/amarante';
import 'react-native-gesture-handler';
// files
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export default function App(): JSX.Element | null {
  const colorScheme = useColorScheme();
  const [fontsLoaded] = useFonts({
    Amarante_400Regular,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <SafeAreaProvider>
      <Navigation colorScheme={colorScheme} />
      <StatusBar />
    </SafeAreaProvider>
  );
}
