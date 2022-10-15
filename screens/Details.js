import { StyleSheet, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import GalaxyHeader from '../components/GalaxyHeader'
import Text from '../components/text'
import { colors } from '../theme/colors'

export default function Details({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <GalaxyHeader navigation={navigation} backBtn={true}></GalaxyHeader>
      <Text>Details</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  
});
