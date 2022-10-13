import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Text from './components/text';
// import Text from "./components/text"

export default function App() {
  return (
    <View style={styles.container}>
      <Text>component</Text>
      <StatusBar style="auto" />
    </View>
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
