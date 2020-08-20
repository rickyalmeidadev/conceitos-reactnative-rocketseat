import React, {useState, useEffect} from 'react';
import {FlatList, Text, StyleSheet, StatusBar, View} from 'react-native';

import api from './services/api';

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await api.get('projects');
      setProjects(response.data);
    })();
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />

      <View style={styles.container}>
        <FlatList
          data={projects}
          keyExtractor={(project) => project.id}
          renderItem={({item: project}) => (
            <Text style={styles.title}>{project.title}</Text>
          )}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
  },

  title: {
    color: '#f5f5f5',
    fontSize: 32,
    fontWeight: 'bold',
  },
});
