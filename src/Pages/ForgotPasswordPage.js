import React, { Component } from 'react';
import HeaderScreen from "./HeaderScreen";
import { Sty } from "./Style";
import { View, Image } from 'react-native';
import { Container, Button, Icon, Text, Input, Form, Item, } from 'native-base';

export default class ForgotPasswordPage extends Component {
  render() {
    return (
      <Container>
        <HeaderScreen
          headerTitle="İSTANBUL ONKOLOJİ HASTANESi" />
        <View style={Sty.forgotPass.logoView}>
          <Image
            source={require('../image/lock-icon.png')}
            style={Sty.forgotPass.logo}
          >
          </Image>
        </View>
        <View style={Sty.forgotPass.view}>
          <Text style={Sty.forgotPass.text}>Lütfen e-posta adresinizi ve telefon numaranızı giriniz.</Text>
        </View>
        <Form style={Sty.Container}>
          <Item style={Sty.app.InputStyle}>
            <Icon style={Sty.app.InnerIcon} name="paper" />
            <Input
              getRef={input => {
                this.emailRef = input;
              }}
              onSubmitEditing={() => {
                this.TelRef._root.focus();
              }}
              placeholder=" E-Mail"
              returnKeyType="next"
            />
          </Item >
          <Item style={Sty.app.InputStyle}>
            <Icon style={Sty.app.InnerIcon} name="md-contacts" />
            <Input
              ref={input => {
                this.TelRef = input;
              }}
              onSubmitEditing={() => {
                this.TelRef._root.focus();
              }}
              placeholder=" Cep Telefonu" />
          </Item>
        </Form>
        <View style={Sty.app.bottom}>
          <Button style={style = Sty.app.Bottombutton} full onPress={() => { this.props.navigation.navigate('Login') }} ><Text> PAROLAYI SIFIRLA</Text></Button>
        </View>
      </Container>
    )
  }
};