import React, { Component } from 'react';
import HeaderScreen from "./HeaderScreen";
import { Item,Form,Text,Input,Icon,Button } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import {Sty} from './Style';

export default class OTPChecking extends Component {
  render() {
    return (
      
      <ScrollView style={Sty.app.healthCardBg}>
        <HeaderScreen
          //fn={this.props.navigation.openDrawer}
          headerTitle={"Sms Doğrulama"}
        />
      <Form>

            <Item style={Sty.addPages.item}>

              <Icon name='refresh' style={Sty.addPages.icon}/>
              <Input  placeholder="Doğrulama Kodunu Giriniz"/>

            </Item>

            <Button style={Sty.addPages.button} full
            onPress={() => { this.props.navigation.navigate('HomePage') }}
             >
               <Text>Doğrula</Text></Button>

      </Form>
  

        </ScrollView>
      
      
    );
  }
}