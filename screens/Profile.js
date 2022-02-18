import React, { useState, useRef } from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import Button from '../component/Button';
import { connect } from 'react-redux';
const Profile = (props) => {
  return (
    <SafeAreaView style={style.container}>
      <Text style={style.text} > UserName : {props.user.username} </Text>
      <Text style={style.text} > Password : {props.user.password} </Text>
      <Button title={'< < Go Back'} onPress={() => props.navigation.navigate('Home')} />
    </SafeAreaView>
  )
}
const mapStateToProps = (state) => ({ user: state.user });
const mapDispatchToProps = (dispatch) => ({})

const connectComponent = connect(mapStateToProps, mapDispatchToProps);

export default connectComponent(Profile)

const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    marginHorizontal: 20
  },
  text: {
    fontSize: 15,
    letterSpacing: 0.98,
    fontWeight: '600',
    marginVertical: 15,
    color: '#ff4d6d'
  },
})
