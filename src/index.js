import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#7159c1"
        translucent
      />
      <View style={styles.container}>
        <Text style={styles.title}>Hello from React Native!</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#f5f5f5',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
