import React, { Component } from 'react';
import { Text} from 'react-native';
import {ListItem,Left,Thumbnail,Body,Right,Button} from 'native-base';
import {Sty} from "../Pages/Style";
export default class AItem extends Component {
 
  render() {
       const Navigate = this.props.navigate;
    const images = {
      image: require("../image/nuri-tasali-6l106.jpg"),
         };
    const topText= this.props.topText;
    const centerText=this.props.centerText;
    const bottomText= this.props.bottomText;
    const rightTopText=this.props.rightTopText;
    const rightBottomText=this.props.rightBottomText;
   
    const color=this.props.color;
    
 
    return (
      
        <ListItem  style={{backgroundColor:color}} thumbnail >
        <Left>
            <Thumbnail square source={{ uri: 'https://i.hizliresim.com/WX1aqL.png' }} /> ##2018.09.24 
        </Left>
        <Body>
            <Text style={Sty.DItem.topText}>{topText}</Text>
            <Text style={Sty.DItem.bottomText} note numberOfLines={1}>{centerText}</Text>
            <Text style={Sty.DItem.bottomText} note numberOfLines={2}>{bottomText}</Text>
        </Body>
        <Right>
            <Body>
                <Text style={Sty.apppointments.text}>{rightTopText}</Text>
                <Text style={Sty.apppointments.text}>{rightBottomText}</Text>
            </Body>
        </Right>
    </ListItem>
    );
  }
}
