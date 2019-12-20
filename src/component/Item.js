import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {ListItem,Left,Thumbnail,Body,Right} from 'native-base';
import {Sty} from "../Pages/Style";
export default class Item extends Component {
 
  render() {
    const images = {
      pdf: require("../image/pdf-download-icon.png"),
         };
    const topText= this.props.topText;
    const bottomText= this.props.bottomText;
    const rightTopText=this.props.rightTopText;
    const rightBottomText=this.props.rightBottomText;
    
    return (
      <View>
   <ListItem thumbnail>
              <Left>
              <Thumbnail
             //   style={{width:50}}
                resizeMode='contain'
                source={images["pdf"]}
                
             />
              </Left>
              <Body>
                <Text>{topText}</Text>
                <Text note numberOfLines={1}>{bottomText}</Text>
              </Body>
              <Right>
              <Text style={Sty.medicalRecords.text}>{rightTopText}</Text>
                <Text note numberOfLines={1}>{rightBottomText}</Text>
              </Right>
            </ListItem>
      </View>
    );
  }
}
