import *as React from 'react'
import {Text,View,Button,StyleSheet,TouchableOpacity} from 'react-native'
import AppHeader from '../components/AppHeader' 

export default class HomeScreen extends React.Component{
  render(){
    return(
      <View>
<AppHeader/>
<TouchableOpacity style = {Styles.Style1}>  <Text> Buzzer </Text> 
</TouchableOpacity>


    </View>
    )
  }
}  

const Styles = StyleSheet.create ({ 
  Style1:{marginTop:10}
})