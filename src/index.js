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
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#7159c1"
        translucent
      />

      <FlatList
        style={styles.list}
        data={projects}
        keyExtractor={(project) => project.id}
        renderItem={({item: project}) => (
          <Text style={styles.title}>{project.title}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    marginTop: 40,
  },
  title: {
    color: '#f5f5f5',
    fontSize: 32,
    fontWeight: 'bold',
  },
});
