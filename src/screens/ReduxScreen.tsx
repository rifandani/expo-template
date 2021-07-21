import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
// files
import AmaranteText from '../components/AmaranteText';
import logCurrentStorage from '../utils/logCurrentStorage';
import Colors from '../constants/Colors';
import { ThemedView } from '../components/Themed';
import { useAppDispatch, useAppSelector } from '../lib/redux/store';
import {
  counterSelector,
  decrement,
  increment,
} from '../lib/redux/slices/counter';

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
  const { count } = useAppSelector(counterSelector);
  const dispatch = useAppDispatch();

  const onIncrement = () => {
    dispatch(increment());
    logCurrentStorage();
  };

  const onDecrement = () => {
    dispatch(decrement());
    logCurrentStorage();
  };

  return (
    <ThemedView style={styles.container}>
      <AmaranteText
        style={styles.title}
        lightColor={Colors.light.text}
        darkColor={Colors.dark.text}>
        Counter
      </AmaranteText>

      <View style={styles.separator} />

      <Text>{count}</Text>

      <View style={styles.separator} />

      <Pressable onPress={onIncrement}>
        {({ pressed }) => <Text>{pressed ? 'Pressed!' : 'Increment'}</Text>}
      </Pressable>

      <View style={styles.separator} />

      <Pressable onPress={onDecrement}>
        {({ pressed }) => <Text>{pressed ? 'Pressed!' : 'Decrement'}</Text>}
      </Pressable>

      <View style={styles.separator} />

      <Pressable onPress={onDecrement}>
        {({ pressed }) => <Text>{pressed ? 'Pressed!' : 'Reset'}</Text>}
      </Pressable>
    </ThemedView>
  );
}
