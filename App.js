import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import { useFonts } from 'expo-font';
import { typography } from './theme/typography';
import { NavigationContainer,DarkTheme  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Details from './screens/Details';

const Stack = createNativeStackNavigator();


export default function App() {
  const [fontsLoaded] = useFonts({
    'antonioMedium': require('./assets/fonts/Antonio-Medium.ttf'),
    "spartanBold":require("./assets/fonts/Spartan-Bold.ttf"),
    "spartanRegular":require("./assets/fonts/Spartan-Regular.ttf"),
  });
  const {primary,primaryBold,bold}=typography;
  return (
    
    <>
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown:false }}>
      
        <Stack.Screen   name="Home" component={Home} />
        <Stack.Screen  name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
    <StatusBar style="light"/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: 'center',
    justifyContent: 'center',
  },
});
