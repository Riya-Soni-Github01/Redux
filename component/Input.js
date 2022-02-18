import React, { useState, useRef } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
const Input = (props) => {
  const { label, placeholder } = props

  return (
    <View>
      <Text style={styles.text}> {label}</Text>
      <TextInput {...props}
        placeholder={placeholder}
        style={styles.textInput}
        placeholderTextColor={'#ffb3c1'}
        autoCorrect={false}
      />
    </View>

  )
}
const styles = StyleSheet.create(
  {
    text: {
      fontSize: 15,
      letterSpacing: 0.98,
      fontWeight: '600',
      marginVertical: 15,
      color: '#c9184a'
    },
    textInput: {
      borderBottomWidth: 2,
      borderBottomColor: '#590d22',
      width: '95%'
    }
  }
)
export default Input