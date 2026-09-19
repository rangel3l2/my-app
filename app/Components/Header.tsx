import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
type HeaderProps = {
  texto: string,
  icone?: string,
  cor?: string 
}
const Header = ({texto, icone, cor}: HeaderProps) => {
  return (
  <View style={styles.cabecario} >
      <View style={[styles.row,{backgroundColor:`#fff`}]}>
      <Ionicons name="search" size={28} color="grey" />
      <TextInput style={styles.input} keyboardType='default' placeholder={texto}/>
      <View style={{backgroundColor:'#4B39EF'}}>     
         <Ionicons name="cart" size={28} color="grey" />
      </View>
      </View>
      
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    cabecario:{
    
    backgroundColor: `#4B39EF`,
    height:100,
    alignItems:`center`,
    justifyContent:`center`,

  },
  input:{
    backgroundColor:`#fff`,
    color:`grey`,
    height:30,
    width:`70%`,

  },
  row:{
    flexDirection:`row`
  }
})