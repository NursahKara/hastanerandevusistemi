import React, { Component } from 'react';
import { View,Image ,TouchableHighlight} from 'react-native';
import HeaderScreen from "../HeaderScreen";
import { Form,ListItem,Left,Right,Body,Text } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import {Sty} from '../Style';

export default class EmergencyCallPage extends Component {
  render() {
    return (
      
      <ScrollView  style={Sty.app.healthCardBg}>
        <HeaderScreen
          //fn={this.props.navigation.openDrawer}
          headerTitle={"Acil Durumda Aranacaklar"}
        />
        <View style={Sty.healthCard.view}>
          <Body>

            <TouchableHighlight onPress={()=>{this.props.navigation.navigate('AddEmergencyContactPage')}}>

            <Image   
              style={Sty.healthCard.logo}
              source={require("../../image/Plus-icon.png")}
              />

            </TouchableHighlight>
         
          </Body>
        </View>
        

        <Form style={Sty.healthCard.form}>
          
        <ListItem >
          <Left style={Sty.healthCard.left}>
            <Text style={Sty.healthCard.text}>Yakınlık</Text>
          </Left>
          <Body style={Sty.healthCard.body}>
            <Text style={Sty.healthCard.text}>Ad Soyad</Text>
          </Body>
          <Right style={Sty.healthCard.right}>
              <Text style={Sty.healthCard.text}>Telefon</Text>   
          </Right>
      
        </ListItem>
        
          <ListItem  style={{borderBottomWidth:2,borderTopWidth:2}}>
            <Left style={Sty.healthCard.left}>
              <Text>Abi</Text>
            </Left> 
            <Body style={Sty.healthCard.body}>
              <Text>Serdar Şencan</Text>
              </Body> 
            <Right  style={Sty.healthCard.right}>
             <Text>0533 333 33 33</Text>
            </Right>
          </ListItem>

          <ListItem style={{borderBottomWidth:2}}>
            <Left style={Sty.healthCard.left}>
              <Text>Abi</Text>
            </Left> 
            <Body style={Sty.healthCard.body}>
              <Text>Serdar Şencan</Text>
              </Body> 
            <Right  style={Sty.healthCard.right}>
             <Text>0533 333 33 33</Text>
            </Right>
          </ListItem>

          </Form>

        </ScrollView>
      
      
    );
  }
}