import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Title, Left, Button, Icon, Drawer } from 'native-base';


class MYHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        
        return (
            
            <Header androidStatusBarColor="#AB47BC" style={{
                backgroundColor: "#BA68CB",
                height: 40,
                alignItems: 'center',
            }}>
                <Title style={{fontFamily: 'A Sogand',
                    fontSize: 22,
                }}>
                {this.props.title}
           </Title>
            </Header>
            
        );
    }
}

export default MYHeader;
