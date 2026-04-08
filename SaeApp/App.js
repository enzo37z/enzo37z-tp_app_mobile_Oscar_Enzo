import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import ListeScreen from './src/screens/ListeScreen';
import DetailScreen from './src/screens/DetailScreen';
import AjoutScreen from './src/screens/AjoutScreen';
import GalerieScreen from './src/screens/GalerieScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: { backgroundColor: '#6C5CE7' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' }
      }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: '📚 SAé MMI' }} />
        <Stack.Screen name="Liste" component={ListeScreen} options={{ title: '🗂️ Liste des SAé' }} />
        <Stack.Screen name="Detail" component={DetailScreen} options={{ title: '📋 Détail' }} />
        <Stack.Screen name="Ajout" component={AjoutScreen} options={{ title: '➕ Ajouter' }} />
        <Stack.Screen name="Galerie" component={GalerieScreen} options={{ title: '🖼️ Galerie' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}