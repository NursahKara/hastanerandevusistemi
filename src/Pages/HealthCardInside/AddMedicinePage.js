import React, { Component } from 'react';
import HeaderScreen from "../HeaderScreen";
import { Item,Form,Text,Input,Icon,Button } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import {Sty} from '../Style';

export default class AddMedicine extends Component {
  render() {
    return (
      
      <ScrollView style={Sty.app.healthCardBg}>
        <HeaderScreen
          //fn={this.props.navigation.openDrawer}
          headerTitle={"İlaç Ekle"}
        />
      <Form>

      <Item style={Sty.addPages.item}>
      
              <Icon name='medkit' style={Sty.addPages.icon}/>
              <Input  placeholder="İlaç Adı" />
     </Item>

            <Item style={Sty.addPages.item}>

              <Icon name='clock' style={Sty.addPages.icon}/>
              <Input  placeholder="Kullanım Miktarı"/>

            </Item>

            <Button style={Sty.addPages.button} full ><Text> İlaç Ekle</Text></Button>

      </Form>
  

        </ScrollView>
      
      
    );
  }
}