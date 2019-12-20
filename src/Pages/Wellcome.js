import React from 'react';
import { View, Image } from 'react-native';
import { Header, Left, Title, Right, Button, Body, Text, Icon } from 'native-base'
import { Sty } from "./Style"
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class Wellcome extends React.Component {

  render() {
    const navi = this.props.navi;

    return (
      <View >
        <TouchableOpacity>
          <Header style={Sty.wellcome.bgColor}>

            <Left style={Sty.wellcome.left}>
              <Image
                style={Sty.wellcome.image}
                source={require("../image/QuestionMark-icon.png")} />
            </Left>
            <Body style={Sty.wellcome.body} >
              <Text style={Sty.wellcome.text}>Hoşgeldiniz{"\n"}</Text>
              <Text style={{
                color: '#234789',
                fontWeight: 'bold',
                fontSize: 18,
                marginTop: -20
              }}>{this.props.userName} </Text>
            </Body>
            <Right >
            </Right>
          </Header>
        </TouchableOpacity>
      </View>
    )
  }
}
