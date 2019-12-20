import React from 'react';
import { View, Image, } from 'react-native';
import { Header, Left, Right, Body, } from 'native-base'
import { Sty } from "./Style";
import MyBackButton from './MyBackButton';

export default class HeaderScreen extends React.Component {
  render() {
    return (
      <View >
        <Header style={Sty.header.bgColorShadow, { height: 75, backgroundColor: 'white' }}>
          <Left style={Sty.header.left}>
            <MyBackButton />
          </Left>
          <Body style={{ flex: 4 }}>
            <Image
              style={{ width: '100%' }}
              source={require("../image/hastanelogojpg.jpg")}
              resizeMode="contain"
            />
          </Body>
          <Right style={Sty.header.right}></Right>
        </Header>
      </View>
    )
  }
}
