import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Signinstyles from './styles/Homestyles';
import { Container, Content, Item, Label, Input, Icon, Button } from 'native-base';
import MYHeader from './component/Header';

class Lyrics extends Component {
  constructor(props) {
    super(props);
    this.state = {
    vocal: "",
    songname: "",
    };
  }

  render() {
    return (
      <Container>

        <MYHeader title="خانه"/>

        <Content style={Signinstyles.signincontent}>
          <View style={Signinstyles.signinform}>
            <Item floatingLabel style={{flexDirection: 'row-reverse',}}>
              <Label style={Signinstyles.signinlabel}> نام خواننده </Label>
              <Input 
              value = {this.state.vocal}
              onChangeText = {(txt) => {
                this.setState({
                  vocal:txt
                })
              }} 
              
              />
              <Icon name="call" />
            </Item>
            <Item floatingLabel style={{flexDirection: 'row-reverse',}}>
              <Label style={Signinstyles.signinlabel}>نام آهنگ</Label>
              <Input 
              value = {this.state.songname}
              onChangeText = {(txt) => {
                this.setState({
                    songname:txt
                })
              }}
               />
              <Icon name="lock" />
            </Item>
            <Button full style={Signinstyles.signinbtn} onPress = {this.Fread}>
              <Text style={Signinstyles.signinbtntext}>
                جست و جو
              </Text>
            </Button>
            
              

          </View>
        </Content>

      </Container>

    );
  }

  Fread = async () =>{

    return fetch('http://www.aradtelecom.com/rnread.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        
      },
      body: JSON.stringify({
        vocal: this.state.vocal,
        songname: this.state.songname
      }),
    })
    .then((response) => response.json())
    .then((responseJson) => {

      alert( responseJson.label+"\n"+responseJson.songtext);
      
      })
    .catch((error) =>{
      console.error(error);
    });

  }
  
}

export default Lyrics;
