import React, { useState, useRef } from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import Button from '../component/Button';
import { connect } from 'react-redux';
const Home = (props) => {
  return (
    <SafeAreaView style={style.container}>
      <Text style={style.text} > Hello  {props.user.username} Welcome </Text>
      <Button title={'View Profile'} onPress={() => { props.navigation.navigate('Profile') }} />
      <Button title={'< < Go Back'} onPress={() => { props.navigation.goBack() }} />
    </SafeAreaView>
  )
}
const mapStateToProps = (state) => ({ user: state.user });
const mapDispatchToProps = (dispatch) => ({})

const connectComponent = connect(mapStateToProps, mapDispatchToProps);

export default connectComponent(Home)

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

