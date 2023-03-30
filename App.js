import auth from './component/auth';
import profil from './component/profil';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();


export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="auth" component={auth} options={{ headerShown: false }} />
          <Stack.Screen name="profil" component={profil} options={{ headerShown: false }}  />
        </Stack.Navigator>

      </NavigationContainer>
  );
}