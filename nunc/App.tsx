
// import React from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';
// 'react-native/Libraries/NewAppScreen';



// const App=()=>{

//   return (
//    <Text>venkay</Text>
//   );
// }


// export default App;

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartPage from './StartPage';
import NextPage from './NextPage';
import FinalChatPage from './FinalChatPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartPage">
        <Stack.Screen name="StartPage" component={StartPage} />
        <Stack.Screen name="NextPage" component={NextPage} />
        <Stack.Screen name="FinalChatPage" component={FinalChatPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

