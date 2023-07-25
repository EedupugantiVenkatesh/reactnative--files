import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/LoginScreen';
import RegistrationScreen from './src/RegistrationScreen';
import ChatList from './src/ChatList';
import ChatScreen from './src/ChatScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ChatList" component={ChatList}  options={{ 
            headerStyle: { backgroundColor: 'orange' }
          }}/>
        <Stack.Screen name="ChatScreen" component={ChatScreen} options={{ title:"Chat",  headerStyle: { backgroundColor: 'orange' }}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
