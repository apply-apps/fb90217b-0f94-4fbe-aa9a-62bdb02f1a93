// Filename: index.js
// Combined code from all files

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';

const Stack = createStackNavigator();

const tales = {
  '1': { id: '1', title: 'The Little Prince', content: 'Once upon a time, in a faraway land, there was a little prince...' },
  '2': { id: '2', title: 'The Ugly Duckling', content: 'In a sunny meadow, not too far from a farm, there was a little duckling...' },
  '3': { id: '3', title: 'Cinderella', content: 'In a small village, there lived a kind and beautiful girl named Cinderella...' }
};

const talesList = Object.values(tales);

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={talesList}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Tale', { tale: item })}>
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

const TaleScreen = ({ route }) => {
  const { tale } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>{tale.title}</Text>
        <Text style={styles.content}>{tale.content}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 16,
    backgroundColor: '#f0f0f0',
  },
  box: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  content: {
    fontSize: 16,
    lineHeight: 22,
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Tales for Kids' }} />
        <Stack.Screen name="Tale" component={TaleScreen} options={{ title: 'Story' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}