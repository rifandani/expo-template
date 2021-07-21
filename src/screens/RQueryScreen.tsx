import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
// files
import AmaranteText from '../components/AmaranteText';
import useGetUsers from '../hooks/useGetUsers';
import { ThemedView } from '../components/Themed';

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

export default function RQueryScreen(): JSX.Element {
  const { isLoading, data, error } = useGetUsers();

  return (
    <ThemedView style={styles.container}>
      <AmaranteText style={styles.title}>useQuery</AmaranteText>

      <View style={styles.separator} />

      {isLoading ? <Text>Loading...</Text> : null}
      {error ? <Text>{error.message}</Text> : null}
      {data ? (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Text style={{ marginVertical: 10 }}>{item.name}</Text>
          )}
          keyExtractor={item => item.id.toString()}
        />
      ) : null}
    </ThemedView>
  );
}
