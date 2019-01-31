import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Signinstyles from './styles/Chatstyles';
import { Container, Content, Item, Label, Input, Icon, Button } from 'native-base';
import MYHeader from './component/Header';

class SelectMenu extends Component {
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

                

                <Content style={Signinstyles.signincontent}>
                    <Text> Select Menu </Text>
                </Content>

            </Container>

        );
    }

    

    

}

export default SelectMenu;
