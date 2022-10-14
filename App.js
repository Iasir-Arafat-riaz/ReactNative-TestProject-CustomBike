import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
// import Text from './components/text';
import { colors } from './theme/colors';
import { spacing } from './theme/spacing';
import Text from "./components/text"
import { useFonts } from 'expo-font';
import { typography } from './theme/typography';

export default function App() {
  const [fontsLoaded] = useFonts({
    'antonioMedium': require('./assets/fonts/Antonio-Medium.ttf'),
    "spartanBold":require("./assets/fonts/Spartan-Bold.ttf"),
    "spartanRegular":require("./assets/fonts/Spartan-Regular.ttf"),
  });
  const {primary,primaryBold,bold}=typography;
  return (
    <View style={styles.container}>
      <Text style={{fontFamily:bold}}>components</Text>
      <Text style={{paddingTop:spacing[4],}}>gg</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
