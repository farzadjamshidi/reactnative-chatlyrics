import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import Signinstyles from './styles/Homestyles';
import { Container, Content, Item, Label, Input, Icon, Button, Drawer, Header, Left, Title, Body } from 'native-base';
import MYHeader from './component/Header';
import SelectMenu from './SelectMenu';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vocal: "",
      songname: "",
    };
  }

  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };

  render() {
    return (
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<SelectMenu />}
        onClose={() => this.closeDrawer()}
      >
        <Container>


          <Header androidStatusBarColor="#AB47BC" style={{
            backgroundColor: "#BA68CB",
            height: 40,
          }}>
          <Left style={{ flex: 1 }}>
              <Button transparent onPress={() => this.openDrawer()}>
                <Icon name="menu" />
              </Button>
            </Left>
            <Body style={{
              fontFamily: 'A Sogand',
              fontSize: 22,
              alignItems: 'center',
              flex: 9
            }}>
              <Title>خانه</Title>
            </Body>
            
          </Header>
          <Content style={Signinstyles.signincontent}>
            <View style={Signinstyles.signinform}>
              <Item floatingLabel style={{ flexDirection: 'row-reverse', }}>
                <Label style={Signinstyles.signinlabel}> نام خواننده </Label>
                <Input
                  value={this.state.vocal}
                  onChangeText={(txt) => {
                    this.setState({
                      vocal: txt
                    })
                  }}

                />
                <Icon name="call" />
              </Item>
              <Item floatingLabel style={{ flexDirection: 'row-reverse', }}>
                <Label style={Signinstyles.signinlabel}>نام آهنگ</Label>
                <Input
                  value={this.state.songname}
                  onChangeText={(txt) => {
                    this.setState({
                      songname: txt
                    })
                  }}
                />
                <Icon name="lock" />
              </Item>
              <Button full style={Signinstyles.signinbtn} onPress={() => this.openDrawer()}>
                <Text style={Signinstyles.signinbtntext}>
                  جست و جو
              </Text>
              </Button>



            </View>
          </Content>

        </Container>
      </Drawer>

    );
  }

  Fread = async () => {

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

        alert(responseJson.label + "\n" + responseJson.songtext);

      })
      .catch((error) => {
        console.error(error);
      });

  }

}

export default Home;
