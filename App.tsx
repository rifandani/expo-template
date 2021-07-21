/* eslint-disable camelcase */
import React from 'react';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts, Amarante_400Regular } from '@expo-google-fonts/amarante';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import 'react-native-gesture-handler';
// files
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';
import store, { persistor } from './src/lib/redux/store';

export default function App(): JSX.Element | null {
  const colorScheme = useColorScheme();
  const [fontsLoaded] = useFonts({
    Amarante_400Regular,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}
