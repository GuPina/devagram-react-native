import {createNativeStackNavigator} from '@react-navigation/native-Stack'
import Login from '../_screens/Login';
import Register from '../_screens/Register';

const Routes = () => {
    const Stack = createNativeStackNavigator()
    
    return (
        <Stack.Navigator
            screenOptions={{headerShown: false}}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      );
}

export default Routes