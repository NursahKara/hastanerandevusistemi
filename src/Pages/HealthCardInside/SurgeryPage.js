import React, { Component } from 'react';
import { View,Image ,TouchableHighlight} from 'react-native';
import HeaderScreen from "../HeaderScreen";
import {ListItem,Left,Right,Body,Text,List } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import { Sty } from '../Style';

export default class SurgeryPage extends Component {
  render() {
    return (
      
      <ScrollView style={Sty.app.healthCardBg}>
        <HeaderScreen
          //fn={this.props.navigation.openDrawer}
          headerTitle={"Geçirilen Ameliyatlar"}
          
        />
        <View style={Sty.healthCard.view}>
          <Body>

            <TouchableHighlight onPress={()=>{this.props.navigation.navigate('AddSurgeryPage')}}>

            <Image   
              style={Sty.healthCard.logo}
              source={require("../../image/Plus-icon.png")}
              />

            </TouchableHighlight>
         
          </Body>
        </View>
        

        <List style={Sty.healthCard.form}>
          
        <ListItem >
          <Left style={Sty.healthCard.left}>
            <Text style={Sty.healthCard.text}>Hasta</Text>
          </Left>
          <Body style={Sty.healthCard.body}>
            <Text style={Sty.healthCard.text}>Ameliyat Adı</Text>
          </Body>
          <Right style={Sty.healthCard.right}>
              <Text style={Sty.healthCard.text}>Tarih</Text>   
          </Right>
      
        </ListItem>
          <ListItem style={Sty.healthCard.firstListItem}>
            <Left style={Sty.healthCard.left}>
              <Text>Berkay</Text>
            </Left> 
            <Body style={Sty.healthCard.body}>
              <Text>Bağdemcik</Text>
              </Body> 
            <Right  style={Sty.healthCard.right}>
             <Text>14.03.2004</Text>
            </Right>
          </ListItem>

          <ListItem style={Sty.healthCard.listItem}>
            <Left style={Sty.healthCard.left}>
              <Text>Berkay</Text>
            </Left> 
            <Body style={Sty.healthCard.body}>
              <Text>Bağdemcik</Text>
              </Body> 
            <Right  style={Sty.healthCard.right}>
             <Text>14.03.2004</Text>
            </Right>
          </ListItem>


          </List>

        </ScrollView>
      
      
    );
  }
}