import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from './Components/Header'
import Painel from './Components/Painel'
const index = () => {
  return (
    <SafeAreaView style={styles.container}>
    <Header
    texto='Aperta o K e busque aqui'
    />
    <Painel/>
    <Painel/>
    <Painel/>
    <Painel/>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:`column`,

  },
  
})