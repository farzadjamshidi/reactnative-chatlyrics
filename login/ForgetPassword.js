import React, { Component } from 'react';
import {  View, Text } from 'react-native';
import Signinstyles from './styles/ForgetPasswordstyles';
import { Container, Content, Item, Label, Input, Icon, Button } from 'native-base';
import MYHeader from './component/Header';

class ForgetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Container>

        <MYHeader title="صفحه فراموشی رمز عبور" />

        <Content style={Signinstyles.signincontent}>
          <View style={Signinstyles.signinform}>
            <Item floatingLabel style={{flexDirection: 'row-reverse',}}>
              <Label style={Signinstyles.signinlabel}> شماره موبایل</Label>
              <Input />
              <Icon name="call" />
            </Item>
            <Button full style={Signinstyles.signinbtn}>
              <Text style={Signinstyles.signinbtntext}>
                ارسال رمز عبور موقت
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
}

export default ForgetPassword;