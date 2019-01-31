import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Signinstyles from './styles/Signinstyles';
import { Container, Content, Item, Label, Input, Icon, Button } from 'native-base';
import MYHeader from './component/Header';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phonenumber: "",
      password: "",
      loginattempt: 0 ,
    };
  }

  render() {
    return (
      <Container>

       <MYHeader title="صفحه ورود"/>

        <Content style={Signinstyles.signincontent}>
          <View style={Signinstyles.signinform}>
            <Item floatingLabel style={{flexDirection: 'row-reverse',}}>
              <Label style={Signinstyles.signinlabel}> شماره موبایل</Label>
              <Input keyboardType="numeric"
              value = {this.state.phonenumber}
              onChangeText = {(txt) => {
                this.setState({
                  phonenumber:txt
                })
              }} 
              
              />
              <Icon name="call" />
            </Item>
            <Item floatingLabel style={{flexDirection: 'row-reverse',}}>
              <Label style={Signinstyles.signinlabel}> رمز عبور</Label>
              <Input secureTextEntry={true}
              value = {this.state.password}
              onChangeText = {(txt) => {
                this.setState({
                  password:txt
                })
              }}
               />
              <Icon name="lock" />
            </Item>
            <Button full style={Signinstyles.signinbtn} onPress = {this.Fsignin}>
              <Text style={Signinstyles.signinbtntext}>
                ورود
              </Text>
            </Button>
            <Button transparent full style={Signinstyles.signinbtn2}
            onPress = {() => this.props.navigation.navigate('SignUp')}>
              <Text style={Signinstyles.signinbtntext2}>
                ثبت نام نکرده اید!
              </Text>
            </Button>
            <Button transparent full style={Signinstyles.signinbtn2}
            onPress = {() => this.props.navigation.navigate('Chat')}>
              <Text style={Signinstyles.signinbtntext2}>
                رمز عبور خود را فراموش کرده اید
              </Text>
            </Button>
          </View>
        </Content>

      </Container>

    );
  }

  Fsignin = async () =>{

    return fetch('http://www.aradtelecom.com/rnsignin.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        
      },
      body: JSON.stringify({
        phonenum: this.state.phonenumber,
        password: this.state.password
      }),
    })
    .then((response) => response.json())
    .then((responseJson) => {

      alert( responseJson.message);

      {responseJson.s ? (this.props.navigation.replace('Home',{
        phonenum: this.state.phonenumber,
      })) : 
      (this.setState({
        loginattempt : this.state.loginattempt + 1
      }))}

      if (this.state.loginattempt > 3) {
        this.props.navigation.navigate('LockProfile')
        this.setState({
          loginattempt : 0
        })

      }

      })
    .catch((error) =>{
      console.error(error);
    });

  }
  
}

export default SignIn;
