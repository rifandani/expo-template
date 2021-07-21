import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// files
import EditScreenInfo from '../components/EditScreenInfo';

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

export default function TabTwoScreen(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>

      <View style={styles.separator} />

      <EditScreenInfo path="/screens" />
    </View>
  );
}
