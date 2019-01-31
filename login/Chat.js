import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Signinstyles from './styles/Chatstyles';
import { Container, Content, Item, Label, Input, Icon, Button } from 'native-base';
import MYHeader from './component/Header';
import PushNotification from 'react-native-push-notification';

let interval;

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commenttext: "",
            msg1: "",
            msg2: "",
            msg3: "",
            msg4: "",
            msg5: "",
            msg6: "",
            msg7: "",
            msg8: "",
            lastmsg: 0
        };
    }

    render() {
        return (
            <Container>

                <MYHeader title="گفتگو" />

                <Content style={Signinstyles.signincontent}>
                    <View style={Signinstyles.signinform}>

                        <Button transparent full style={Signinstyles.signinbtn2}>
                            <Text style={Signinstyles.signinbtntext2}>{this.state.msg1}</Text>
                        </Button>

                        <Button transparent full style={Signinstyles.signinbtn2}>
                            <Text style={Signinstyles.signinbtntext2}>{this.state.msg2}</Text>
                        </Button>

                        <Button transparent full style={Signinstyles.signinbtn2}>
                            <Text style={Signinstyles.signinbtntext2}>{this.state.msg3}</Text>
                        </Button>

                        <Button transparent full style={Signinstyles.signinbtn2}>
                            <Text style={Signinstyles.signinbtntext2}>{this.state.msg4}</Text>
                        </Button>

                        <Button transparent full style={Signinstyles.signinbtn2}>
                            <Text style={Signinstyles.signinbtntext2}>{this.state.msg5}</Text>
                        </Button>

                        <Button transparent full style={Signinstyles.signinbtn2}>
                            <Text style={Signinstyles.signinbtntext2}>{this.state.msg6}</Text>
                        </Button>

                        <Button transparent full style={Signinstyles.signinbtn2}>
                            <Text style={Signinstyles.signinbtntext2}>{this.state.msg7}</Text>
                        </Button>

                        <Button transparent full style={Signinstyles.signinbtn2}>
                            <Text style={Signinstyles.signinbtntext2}>{this.state.msg8}</Text>
                        </Button>

                        <Item floatingLabel style={{ flexDirection: 'row-reverse', }}>
                            <Label style={Signinstyles.signinlabel}>پیام</Label>
                            <Input
                                value={this.state.commenttext}
                                onChangeText={(txt) => {
                                    this.setState({
                                        commenttext: txt
                                    })
                                }}
                            />
                            <Icon name="lock" />
                        </Item>
                        <Button full style={Signinstyles.signinbtn} onPress={this.Fputcomment}>
                            <Text style={Signinstyles.signinbtntext}>
                                ارسال
              </Text>
                        </Button>



                    </View>
                </Content>

            </Container>

        );
    }

    componentDidMount() {
        interval = setInterval(() => {
    
            return fetch('http://www.aradtelecom.com/rnreadcomment.php', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({

            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {

                if (responseJson.lastmsg > this.state.lastmsg) {
                    PushNotification.localNotification({
                        message: "You have new message", // (required)
                      });
                } 

                
                this.setState({ msg1: responseJson.message1 })
                this.setState({ msg2: responseJson.message2 })
                this.setState({ msg3: responseJson.message3 })
                this.setState({ msg4: responseJson.message4 })
                this.setState({ msg5: responseJson.message5 })
                this.setState({ msg6: responseJson.message6 })
                this.setState({ msg7: responseJson.message7 })
                this.setState({ msg8: responseJson.message8 })
                this.setState({ lastmsg: responseJson.lastmsg })



            })
            .catch((error) => {
                console.error(error);
            });
            


        
        }, 3000);
      }
    
      componentWillUnmount() {
        clearInterval(interval);
      }

    Fputcomment = async () => {

        return fetch('http://www.aradtelecom.com/rnputcomment.php', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({
                commenttext: this.state.commenttext,
                phonenum: this.props.navigation.getParam ('phonenum', '')

            }),
        })
            
            .catch((error) => {
                console.error(error);
            });

    }

    

}

export default Chat;
