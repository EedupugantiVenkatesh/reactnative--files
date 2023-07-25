import { View, Text } from 'react-native'
import React from 'react'

export default function UsersScreen() {
  return (
    <View>
      <Text styles={styles.one}>UsersScreen</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  one:{
    color:'#fff',
    fontSize:20,
  }
})