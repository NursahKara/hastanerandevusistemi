import React, { Component } from 'react';
import { View, Image, Picker } from 'react-native'
import HeaderScreen from "./HeaderScreen";
import { Sty } from "./Style"
import { Container, Form, Item, Input, Button, Text, Icon } from 'native-base';
import DatePicker from 'react-native-datepicker';
import { ScrollView } from 'react-native-gesture-handler';


export default class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: undefined
    };
  }

  onValueChange(value) {
    this.setState({
      selected: value
    });
  }
  render() {
    return (
      <Container><ScrollView>
        <HeaderScreen
          //fn={this.props.navigation.openDrawer}
          headerTitle={"İSTANBUL ONKOLOJİ HASTANESİ "}

        />
        <View style={Sty.createAccount.view}>
          <Image
            source={require('../image/Plus-icon.png')}
            style={Sty.createAccount.logo}
          >
          </Image>
        </View>


        <Form style={Sty.Container}>
          <View>

            <Item style={Sty.app.InputStyle}>
              <Icon style={Sty.app.InnerIcon} name="person" />
              <Input
                getRef={input => {
                  this.tcRef = input;
                }}
                ref={input => {
                  this.tcRef = input;
                }}
                onSubmitEditing={() => {
                  this.userRef._root.focus();
                }}
                placeholder="TC Kimlik No*"
                returnKeyType="next"
              />


            </Item >

            <Item style={Sty.app.InputStyle}>
              <Icon style={Sty.app.InnerIcon} name="person" />
              <Input
                getRef={input => {
                  this.userRef = input;
                }}
                onSubmitEditing={() => {
                  this.usersRef._root.focus();
                }}
                placeholder=" Adınız*"
                returnKeyType="next"
              />

            </Item >
            <Item style={Sty.app.InputStyle}>
              <Icon style={Sty.app.InnerIcon} name="person" />
              <Input
                getRef={input => {
                  this.usersRef = input;
                }}
                ref={input => {
                  this.usersRef = input;
                }}
                onSubmitEditing={() => {
                  this.emailRef._root.focus();
                }}
                placeholder=" Soyadınız*"
                returnKeyType="next"
              />

            </Item>

            <Item style={Sty.app.InputStyle}><Text style={{ marginLeft: 5, opacity: 0.8 }} >Cinsiyet :*</Text>
              <Picker
                selectedValue={this.state.language}
                style={{ height: 50, width: 120 }}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ language: itemValue })
                }
              >
                <Picker.Item style={{ marginLeft: 15, opacity: 0.8 }} label="Erkek" value="e" />
                <Picker.Item style={{ marginLeft: 15, opacity: 0.8 }} label="Kadın" value="k" />
              </Picker>


            </Item>
          </View>

          <Item style={Sty.app.InputStyle}>
            <Icon style={Sty.app.InnerIcon} name="paper" />
            <Input
              getRef={input => {
                this.emailRef = input;
              }}
              ref={input => {
                this.emailRef = input;
              }}
              onSubmitEditing={() => {
                this.TelRef._root.focus();
              }}
              placeholder=" E-Mail*"
              returnKeyType="next"
            />

          </Item>
          <Item style={Sty.app.InputStyle}>
            <DatePicker
              style={{ flex: 1 }}
              date={this.state.date}
              mode="date"
              placeholder="Doğum Tarihi*"
              format="YYYY-MM-DD"
              minDate="1900-05-01"
              // maxDate="2016-06-01"
              confirmBtnText="Devam"
              cancelBtnText="Çık"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0,

                },
                dateInput: {
                  marginLeft: 36
                }
                // ... You can check the source to find the other keys.
              }}
              onDateChange={(date) => { this.setState({ date: date }) }}
            />
          </Item>

          <Item style={Sty.app.InputStyle}>
            <Icon style={Sty.app.InnerIcon} name="md-contacts" />
            <Input
              getRef={input => {
                this.TelRef = input;
              }}
              ref={input => {
                this.TelRef = input;
              }}
              onSubmitEditing={() => {
                this.passRef._root.focus();
              }}
              keyboardType="numeric"
              placeholder=" Cep Telefonu"
              returnKeyType="next"
            />
          </Item>

          <Item style={Sty.app.InputStyle}>
            <Icon style={Sty.app.InnerIcon} name="eye-off" />
            <Input
              getRef={input => {
                this.passRef = input;
              }}
              ref={input => {
                this.passRef = input;
              }}
              onSubmitEditing={() => {
                this.repassRef._root.focus();
              }}
              secureTextEntry={true}
              placeholder=" Şifre"
            />
          </Item>

          <Item style={Sty.app.InputStyle}>

            <Icon style={Sty.app.InnerIcon} name="eye-off" />

            <Input
              getRef={input => {
                this.repassRef = input;
              }}
              ref={input => {
                this.repassRef = input;
              }}

              secureTextEntry={true}
              placeholder=" Şifre Tekrar"
            />
          </Item>

        </Form>

      </ScrollView>
        <View>
          <Button style={Sty.app.Bottombutton, { marginTop: 3 }} full
            onPress={() => { this.props.navigation.navigate('Login') }} >

            <Text> HESAP OLUŞTUR</Text></Button>
        </View>




      </Container>
    )
  }

};
