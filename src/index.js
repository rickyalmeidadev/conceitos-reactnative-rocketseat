import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import api from './services/api';

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await api.get('projects');
      setProjects(response.data);
    })();
  }, []);

  async function handleAddProject() {
    const response = await api.post('projects', {
      title: `Novo projeto ${Date.now()}`,
      owner: 'Ricky Almeida',
    });

    setProjects([...projects, response.data]);
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />

      <SafeAreaView style={styles.container}>
        <FlatList
          data={projects}
          keyExtractor={(project) => project.id}
          renderItem={({item: project}) => (
            <Text style={styles.title}>{project.title}</Text>
          )}
        />
      </SafeAreaView>

      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.button}
        onPress={handleAddProject}>
        <Text style={styles.buttonText}>Adicionar Projeto</Text>
      </TouchableOpacity>
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
    fontSize: 24,
  },

  button: {
    backgroundColor: '#f5f5f5',
    margin: 20,
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
