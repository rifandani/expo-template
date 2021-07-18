import React from 'react';
import { StyleSheet } from 'react-native';
// files
import EditScreenInfo from '../components/EditScreenInfo';
import { ThemedText, ThemedView } from '../components/Themed';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

export default function TabOneScreen(): JSX.Element {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Tab One</ThemedText>

      <ThemedView
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </ThemedView>
  );
}
