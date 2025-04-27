import { StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'

interface Props {
  style?: ViewStyle,
  children: React.ReactNode
}
const AppView: React.FC<Props> = ({ style, children }) => {
  return (
    <View style={[{ ...style, ...styles.container }]} >
      {children}
    </View>
  )
}

export default AppView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#000",
    overflow: "hidden"
  }
})