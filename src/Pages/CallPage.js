import React, { Component } from 'react';
import {Image} from 'react-native';
import HeaderScreen from "./HeaderScreen";
import {Linking} from 'react-native'
import { Container,Content, Button,Text, Form } from 'native-base';
import { Sty } from './Style';
import HFooter from "../HomePageComp/HFooter"

export default class CallPage extends Component {
    _callHospital = () => {
        Linking.openURL(`tel:${"44455444"}`)
      };
    _callAmbulance = () => {
        Linking.openURL(`tel:${"4449724"}`)
      };

  render() {
    return (
      <Container>
        <HeaderScreen
          //fn={this.props.navigation.openDrawer}
          headerTitle={"ONKOLOJİ"}
        />
       <Content style={Sty.app.healthCardBg}>
        <Form style={Sty.callPage.form}>
        <Button
             transparent primary
              style={Sty.callPage.button}
              onPress={this._callHospital}
            >
              <Image
                style={Sty.callPage.logo}
                source={require("../image/presscall.png")}
              />
            </Button>
            <Text style={Sty.callPage.text}>
                Whatsapp hattımızdan bize ulaşmak için yukarıdaki resme dokunun
            </Text>
            </Form>
            <Form style={Sty.callPage.form}>
        <Button
             transparent primary
              style={Sty.callPage.button}
              onPress={this._callAmbulance}
            >
              <Image
                style={Sty.callPage.logo}
                source={require("../image/call.png")}
              />
            </Button>
            <Text style={Sty.callPage.text}>
                Hastanemizi aramak için yukarıdaki resme dokunun.
            </Text>
            </Form>
        </Content>
        

        <HFooter navigate={this.props.navigation}></HFooter> 
      </Container>
    );
  }
}