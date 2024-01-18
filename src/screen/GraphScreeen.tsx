import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const GraphScreeen = () => {
  return (
    <View style={styles.container}>
      <Text>GraphScreeen</Text>
    </View>
  )
}

export default GraphScreeen

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})