import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts} from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Biennale-bold': require('./assets/fonts/biennale-bold.otf'),
    'Biennale': require('./assets/fonts/biennale-regular.otf')
  });

  return (
    fontsLoaded ?
      <View style={styles.container}>
        <Text style={{fontFamily: 'biennale' }}>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </View> :
      <AppLoading  />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
