import { ImageBackground } from "react-native";
import React, { Component } from 'react';
import { Sty } from "./Style";
import { Switch } from "react-native";
import { View } from 'react-native';
import { Button, Text, Form, Item, Input } from 'native-base';

export default class Login extends Component {
  state = { switchValue: false }
  toggleSwitch = (value) => {
    this.setState({ switchValue: value })
  }

  render() {

    return (

      <ImageBackground
        source={require('../image/istanbulhastanesi.jpg')}
        style={Sty.login.container} >

        <Form style={[Sty.login.inner, Sty.login.Shadow]}>
          <View style={{ alignSelf: "center", paddingVertical: 5 }}>
            <Text>Giriş Hesabı</Text>
          </View>
          <Item style={Sty.login.firstItem}>
            <Input
              getRef={input => {
                this.firstNameRef = input;
              }}
              onSubmitEditing={() => {
                this.lastNameRef._root.focus();
              }}
              returnKeyType="next"
              placeholder="E-mail Adresi" />
          </Item>
          <Item style={Sty.login.item}>
            <Input
              ref={input => {
                this.lastNameRef = input;
              }}
              onSubmitEditing={() => {
                this.lastNameRef._root.focus();
              }}
              returnKeyType={"next"}
              placeholder="Şifre" />
          </Item>
          <View style={{ paddingVertical: 5, flexDirection: "row" }}>
            <Text >  Beni Hatırla</Text>
            <Switch style={{ width: 50 }}
              onValueChange={this.toggleSwitch}
              value={this.state.switchValue} />
          </View>
          <Button style={Sty.login.button} full
            onPress={() => { this.props.navigation.navigate('HomePage') }}>
            <Text> Giriş Yap</Text></Button>
          <View style={{ paddingVertical: 10, flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Text style={Sty.login.createText} onPress={() => { this.props.navigation.navigate('CreateAccount') }}>Hesap Oluştur</Text>


            <Text style={Sty.login.forgotText} onPress={() => { this.props.navigation.navigate('ForgotPasswordPage') }} >Şifremi Unuttum</Text>
          </View>
        </Form>
      </ImageBackground>
    );
  }
}
