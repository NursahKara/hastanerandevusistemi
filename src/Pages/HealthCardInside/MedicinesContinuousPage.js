import React, { Component } from 'react';
import { View,Image} from 'react-native';
import HeaderScreen from "../HeaderScreen";
import { ListItem,List,Left,Right,Body,Text, Button } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import {Sty} from '../Style'

export default class MedicinesContinuous extends Component {
  render() {
    return (
      
      <ScrollView  style={Sty.app.healthCardBg}>
        <HeaderScreen
          //fn={this.props.navigation.openDrawer}
          headerTitle={"Sürekli Kullanılan İlaçlar"}
        />
        <View style={Sty.healthCard.view}>
          <Body>

            <Button transparent  onPress={()=>{this.props.navigation.navigate('AddMedicinePage')}}>

            <Image   
              style={Sty.healthCard.logo}
              source={require("../../image/Plus-icon.png")}
              />

            </Button>
         
          </Body>
        </View>
        

        <List style={Sty.healthCard.form}>
          
        <ListItem>
          <Left style={Sty.healthCard.left}>
            <Text style={Sty.healthCard.text}>Adet</Text>
          </Left>
          <Body style={Sty.healthCard.body}>
            <Text style={Sty.healthCard.text}>İlaç Adı</Text>
          </Body>
          <Right style={Sty.healthCard.right}>
              <Text style={Sty.healthCard.text}>Süre</Text>   
          </Right>
      
        </ListItem>


          <ListItem style={{borderBottomWidth:2,borderTopWidth:2}}>
            <Left style={Sty.healthCard.left}>
              <Text>3</Text>
            </Left> 
            <Body style={Sty.healthCard.body}>
              <Text>Apranax Plus </Text>
              </Body> 
            <Right  style={Sty.healthCard.right}>
             <Text>24 Saat</Text>
            </Right>
          </ListItem>

          <ListItem style={{borderBottomWidth:2}}>
            <Left style={Sty.healthCard.left}>
              <Text>3</Text>
            </Left> 
            <Body style={Sty.healthCard.body}>
              <Text>Apranax Plus </Text>
              </Body> 
            <Right  style={Sty.healthCard.right}>
             <Text>24 Saat</Text>
            </Right>
          </ListItem>

          </List>

        </ScrollView>
      
      
    );
  }
}