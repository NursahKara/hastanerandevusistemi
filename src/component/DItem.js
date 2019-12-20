import React, { Component } from 'react';
import { Text } from 'react-native';
import { ListItem, Left, Thumbnail, Body, Right, Button } from 'native-base';
import { Sty } from "../Pages/Style";
export default class DItem extends Component {

  render() {
    const Navigate = this.props.navigate;
    const images = {
      image: require("../image/nuri-tasali-6l106.jpg"),
    };
    const topText = this.props.topText;
    const bottomText = this.props.bottomText;
    const rightText = this.props.rightText;
    const link = this.props.link;
    const planDate = this.props.planDate;


    return (

      <ListItem thumbnail onPress={() => { Navigate.navigate(link, { "PlanDate": planDate }) }} >
        <Left>
          <Thumbnail square source={images["image"]} />
        </Left>
        <Body>
          <Text style={Sty.DItem.topText}>{topText}</Text>
          <Text style={Sty.DItem.bottomText} note numberOfLines={1}>{bottomText}</Text>
        </Body>
        <Right>
          <Text style={Sty.DItem.rightText}>{rightText}</Text>
        </Right>
      </ListItem>

    );
  }
}
