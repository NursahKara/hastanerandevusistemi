import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Col } from 'native-base';
import {Sty} from '../Pages/Style';

export default class Card extends Component {

  render() {
    const Navigate = this.props.navigate;
   
    const images = {
      randevular: require("../image/randevular.png"),
      tibbikayitlar: require("../image/tibbikayitlar.png"),
      saglikkarti: require("../image/saglikkarti.png"),
      saglikuygulamalari: require("../image/saglikuygulamalari.png"),
    };
    const text = this.props.text;
    const color = this.props.color;
    const link = this.props.link;

    return (
      <Col onPress={() => { Navigate.navigate(link) }}
        style={{
         marginTop: 20
        }}>
        <View style={Sty.card.view}>
          <View style={Sty.card.content}>
            <TouchableOpacity onPress={() => { Navigate.navigate(link) }} style={Sty.card.tOpacity}>
              <Image
                style={Sty.card.img}
                resizeMode='contain'
                source={images[this.props.image]}
             />
            </TouchableOpacity>
         </View>
          <View style={Sty.card.tView}>
            <Text style={{ color: color, fontWeight: 'bold', fontSize: 18 }}>{text}</Text>
          </View>
        </View>
   </Col>
    );
  }
}
