import { useFonts } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes';


export default function App() {
  const [fontsLoaded] = useFonts({
    'Biennale-bold': require('./assets/fonts/biennale-bold.otf'),
    'Biennale': require('./assets/fonts/biennale-regular.otf')
  });

  return (
    fontsLoaded ?
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
      :
      <AppLoading />
  );
}

