import * as React from 'react'
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native'
import {Audio} from 'expo-av'

import AppHeader from '../components/AppHeader' 
import SoundButton from '../components/SoundButton' 

export default class BuzzerScreen extends React.Component { 
render(){
  return(
  <View>

  <AppHeader/> 
  <SoundButton/>
  
  </View>

  )
}}
