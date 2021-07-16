import { useState, useEffect } from 'react';
import Font from 'expo-font';
import SplashScreen from 'expo-splash-screen';
import { Ionicons } from '@expo/vector-icons';

export default function useCachedResources(): boolean {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  async function loadResourcesAndDataAsync(): Promise<void> {
    try {
      SplashScreen.preventAutoHideAsync();

      // Load fonts
      await Font.loadAsync({
        ...Ionicons.font,
        // eslint-disable-next-line global-require
        'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
      });
    } catch (e) {
      // We might want to provide this error information to an error reporting service
      console.warn(e);
    } finally {
      setLoadingComplete(true);
      SplashScreen.hideAsync();
    }
  }

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
