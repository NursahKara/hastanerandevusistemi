import React, { Component } from 'react';
import { View, Text, Image, Linking } from 'react-native';
import HFooter from "../HomePageComp/HFooter";
import { Sty } from "./Style";
import { Content, Container, Footer, Button } from "native-base";
import HeaderScreen from "./HeaderScreen";


export default class HospitalLocation extends Component {


  render() {
    return (
      <Container>
        <HeaderScreen
          //fn={this.props.navigation.openDrawer}
          headerTitle={"ONKOLOJİ"} />
        <Image
          style={Sty.hospitalPageOne.image}
          source={require("../image/istanbul_onkoloji.jpg")}
          resizeMode="center" />
        <Content>
          <Text style={Sty.hospitalPageOne.text}>Adres : Cevizli, Toros Cd. No:86, 34846 Maltepe/İstanbul</Text>
          <Text style={Sty.hospitalPageOne.text}>Telefon : 0216 457 37 37</Text>
          <Text style={Sty.hospitalPageOne.text}>E-Posta Adresi: kaliteonkoloji@gmail.com</Text>
        </Content>
        <Footer>
          <View style={{ width: '100%', height: '100%' }} onTouchStart={() => Linking.openURL(("https://www.google.com/maps/search/?api=1&query=40.922692,29.153520"))} >
            <Button transparent style={Sty.app.Bottombutton, { marginTop: 3 }} full>
              <Text style={{ color: "white", fontSize: 24 }}> Yol Tarifi </Text>
            </Button>
          </View>
        </Footer>
        <HFooter navigate={this.props.navigation}></HFooter>
      </Container>
    );
  }
}
