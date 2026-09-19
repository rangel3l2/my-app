import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
const Painel = () => {
  return (
    <View style={{height:200, width:200}}>
     <Image style={{height:200, width:200}} contentFit='cover' source={require(`../../assets/images/image2.png`)}/>
    </View>
  )
}

export default Painel

const styles = StyleSheet.create({})