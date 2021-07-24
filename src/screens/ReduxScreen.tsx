import React from 'react';
import { StyleSheet, View } from 'react-native';
// files
import AmaranteText from '../components/common/AmaranteText';
import Counter from '../components/redux/Counter';
import Colors from '../constants/Colors';
import { ThemedView } from '../components/common/Themed';

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

export default function ReduxScreen(): JSX.Element {
  return (
    <ThemedView style={styles.container}>
      <AmaranteText
        style={styles.title}
        lightColor={Colors.light.text}
        darkColor={Colors.dark.text}>
        Counter
      </AmaranteText>

      <View style={styles.separator} />

      <Counter />
    </ThemedView>
  );
}
