import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CommonContainer = ({children}:any) => {
  return (
    <View style={styles.container}>
     {children}
    </View>
  )
}

export default CommonContainer

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 10,
        backgroundColor: '#fff',
    },
})