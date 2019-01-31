import React, { Component } from 'react';
import {  View, Text } from 'react-native';
import Signinstyles from './styles/Signinstyles';
import { Container, Content, Item, Label, Input, Icon, Button, Thumbnail } from 'native-base';
import MYHeader from './component/Header';


class LockProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Container>

        <MYHeader title="صفحه قفل پروفایل"/>

        <Content style={Signinstyles.signincontent}>
          <View style={Signinstyles.signinform}>
          <View style={{marginTop: 15, justifyContent: 'center', alignItems: 'center'}}>
            <Thumbnail style={{borderColor: "#aaa7", borderWidth: 1}}
             source={require('../assets/images/guest.png')} large />
          </View>         
            <Button full style={Signinstyles.signinbtn}>
              <Text style={Signinstyles.signinbtntext}>
               ورود بعنوان مهمان
              </Text>
            </Button>
            <Button transparent full style={Signinstyles.signinbtn2}
            onPress = {() => this.props.navigation.replace('SignIn')}>
              <Text style={Signinstyles.signinbtntext2}>
                ورود با حساب کاربری دیگر
              </Text>
            </Button>
            <Button transparent full style={Signinstyles.signinbtn2}
            onPress = {() => this.props.navigation.navigate('SignUp')}>
              <Text style={Signinstyles.signinbtntext2}>
                ثبت نام نکرده اید!
              </Text>
            </Button>
            
          </View>
        </Content>

      </Container>
    );
  }
}

export default LockProfile;