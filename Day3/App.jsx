import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FavoriteProvider } from './src/FavoriteContext';
import ContactList from './src/ContactList';
import FavoriteList from './src/FavoriteList';

const Stack = createStackNavigator();

const App = () => {
  const screenOptions = {
    headerStyle: {
      backgroundColor: 'blue', 
    },
    headerTintColor: 'white', 
    headerTitleStyle: {
      fontWeight: 'bold', 
    },
  };

  return (
    <FavoriteProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Favorites" screenOptions={screenOptions}>
          <Stack.Screen name="FavoriteList" component={FavoriteList} />
          <Stack.Screen name="ContactList" component={ContactList} />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoriteProvider>
  );
};

export default App;
