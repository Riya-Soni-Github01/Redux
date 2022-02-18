import React, { useState, useRef } from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import Input from '../component/Input';
import Button from '../component/Button';
import { connect } from 'react-redux';
const Login = (props) => {
  const [name, setName] = useState()
  const [password, setPassword] = useState()
  return (
    <SafeAreaView style={style.container}>
      <Input label={'UserName'} placeholder={'Your Name'} value={name}
        onChangeText={(text) => { setName(text) }} />

      <Input label={'Password'} placeholder={'Password'} value={password}
        secureTextEntry={true} onChangeText={(text) => { setPassword(text) }} />

      <Button title={'LogIn'}
        onPress={() => {
          props.navigation.navigate('Home');
          props.addUser(name, password)
        }}
      />

    </SafeAreaView>
  )
}
const mapStateToProps = (state) => ({ user: state.user });
const mapDispatchToProps = (dispatch) => ({
  addUser: (username, password) =>
    dispatch({
      type: 'addUser',
      payload: {
        username, password
      }
    })
})

const connectComponent = connect(mapStateToProps, mapDispatchToProps);
export default connectComponent(Login)


const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    marginHorizontal: 20
  }
})
