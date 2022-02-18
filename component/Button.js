import React, { useState, useRef } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
const Button = (props) => {

  const { title } = props;
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <Text style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>

  )
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#590d22',
    height: 30, width: '95%', marginTop: 20
  }
  ,
  text: {
    color: 'white',
    fontWeight: '600',
    fontSize: 15,
    letterSpacing: 0.88,
  }


})
export default Button