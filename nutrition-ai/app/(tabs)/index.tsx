import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const App  = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>NutritionAI</Text>
    </View>
  )
}

export default App 

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'column', 
  }, 
  text: {
    color: "darkseagreen", 
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
  }
})