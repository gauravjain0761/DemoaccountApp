import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TickCircleScreen = () => {
  return (
    <View style={styles.container}>
      <Text>TickCircleScreen</Text>
    </View>
  )
}

export default TickCircleScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})