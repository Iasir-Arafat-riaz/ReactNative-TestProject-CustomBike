import { Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import Text from './text'
import { colors } from '../theme/colors'
import { spacing } from '../theme/spacing'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

export default function GalaxyHeader({backBtn,navigation}) {
  const navigate = useNavigation();
  return (
    <View style={styles.container}>
      {backBtn&&(<Pressable onPress={() => navigate.goBack()}>
        <AntDesign style={{paddingRight:spacing[4]}} name="left" size={24} color="white" />
      </Pressable>)}
      <Text preset="h2" style={{color:"white"}}>CUSTOMIZE BIKE</Text>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        padding:spacing[5],
        borderBottomWidth:0.2,
        borderBottomColor:colors.white,
        flexDirection:"row",
        alignItems:"center"
    }
})