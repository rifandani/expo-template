import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
// files
import { useAppDispatch, useAppSelector } from '../lib/redux/store';
import {
  counterSelector,
  decrement,
  increment,
} from '../lib/redux/slices/counter';
import logCurrentStorage from '../utils/logCurrentStorage';

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
    <View style={styles.container}>
      <Text style={styles.title}>Counter</Text>

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
    </View>
  );
}
