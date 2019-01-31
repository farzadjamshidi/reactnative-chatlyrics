import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Signinstyles from './styles/Signupstyles';
import { Container, Content, Item, Label, Input, Icon, Button } from 'native-base';
import MYHeader from './component/Header';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phonenumber: "",
      password:"",
      password2:"",
      name:""
    };
  }

  render() {
    return (
      <Container>

        <MYHeader title="صفحه ثبت نام" />

        <Content style={Signinstyles.signincontent}>
          <View style={Signinstyles.signinform}>
            <Item floatingLabel style={{flexDirection: 'row-reverse',}}>
              <Label style={Signinstyles.signinlabel}> شماره موبایل</Label>
              <Input 
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
              <Label style={Signinstyles.signinlabel}>  نام و نام خانوادگی</Label>
              <Input
              value = {this.state.name}
              onChangeText = {(txt) => {
                this.setState({
                  name:txt
                })
              }} 
              
              />
              <Icon name="person" />
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
            <Item floatingLabel style={{flexDirection: 'row-reverse',}}>
              <Label style={Signinstyles.signinlabel}> تکرار رمز عبور</Label>
              <Input secureTextEntry={true}
              value = {this.state.password2}
              onChangeText = {(txt) => {
                this.setState({
                  password2:txt
                })
              }}
              />
              <Icon name="lock" />
            </Item>
            <Button full style={Signinstyles.signinbtn} onPress = {this.Fsignup}>
              <Text style={Signinstyles.signinbtntext}>
                ثبت نام
              </Text>
            </Button>
            <Button transparent full style={Signinstyles.signinbtn2}
            onPress = {() => this.props.navigation.goBack()}>
              <Text style={Signinstyles.signinbtntext2}>
              برگشت به صفحه ورود
              </Text>
            </Button>
                        
          </View>

        </Content>

      </Container>
    );
  }

  Fsignup = async () =>{

    return fetch('http://www.aradtelecom.com/rnsignup.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        
      },
      body: JSON.stringify({
        phonenum: this.state.phonenumber,
        password: this.state.password,
        name: this.state.name,
        group: "1",
        subgroup: "1",
      }),
    })
    .then((response) => response.json())
    .then((responseJson) => {

      alert( responseJson.message)
      })
    .catch((error) =>{
      console.error(error);
    });

  }
}

export default SignUp;
