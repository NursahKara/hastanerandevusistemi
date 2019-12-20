import React, { Component} from 'react';
import {View} from "react-native";
import HeaderScreen from "../HeaderScreen";
import { Content, CheckBox,Text,ListItem, Form,Left, Right, Body, Item,Button,Container } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import { Sty } from '../Style';

export default class AiledeVarolanHastaliklarPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
   
    return (
     <Container>
      <ScrollView style={Sty.app.healthCardBg}>
        <HeaderScreen
          //fn={this.props.navigation.openDrawer}
          headerTitle={"Ailede Varolan Hastalıklar"}
        />
        <Content style={Sty.app.healthCardBg}>
        <Form style={Sty.varOlanHastaliklar.form}>
        <Item style = {Sty.varOlanHastaliklar.item}>
        <Text style = {Sty.varOlanHastaliklar.item}>Diyabet</Text>
        </Item>
          <ListItem>
            <Left>
              <Text>Annede Diyabet</Text>
            </Left>

            <Body />
            <Right>
              <CheckBox checked={true} />
            </Right>
          </ListItem>
         
          <ListItem>
            <Left>
              <Text>Babada Diyabet</Text>
            </Left>

            <Body />
            <Right>
              <CheckBox checked={false} />
            </Right>
          </ListItem>

          <ListItem>
            <Left>
              <Text>Erkek Kardeşte Diyabet</Text>
            </Left>

            <Body />
            <Right>
              <CheckBox checked={true} />
            </Right>
          </ListItem>

          <ListItem>
            <Left>
              <Text>Kız Kardeşte Diyabet</Text>
            </Left>

            <Body />
            <Right>
              <CheckBox checked={false} />
            </Right>
          </ListItem>
          </Form>

          <Form style={Sty.varOlanHastaliklar.form}>
          <Item style = {Sty.varOlanHastaliklar.item}>
        <Text style = {Sty.varOlanHastaliklar.item}>Kalp Hastalığı</Text>
        </Item>
        <ListItem>
            <Left>
              <Text>Annede Kalp</Text>
            </Left>

            <Body />
            <Right>
              <CheckBox checked={false} />
            </Right>
          </ListItem>

          <ListItem>
            <Left>
              <Text>Babada Kalp</Text>
            </Left>

            <Body />
            <Right>
              <CheckBox checked={false} />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Erkek Kardeşte Kalp</Text>
            </Left>

            <Body />
            <Right>
              <CheckBox checked={false} />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Kız Kardeşte Kalp</Text>
            </Left>

            <Body />
            <Right>
              <CheckBox checked={false} />
            </Right>
          </ListItem>
          </Form>
          <Form style={Sty.varOlanHastaliklar.form}>
          <Item style = {Sty.varOlanHastaliklar.item}>
        <Text style = {Sty.varOlanHastaliklar.item}>Kan Hastalığı</Text>
        </Item>
        <ListItem>
            <Left>
              <Text>Annede Kan Hastalığı</Text>
            </Left>

            <Body />
            <Right>
              <CheckBox checked={false} />
            </Right>
          </ListItem>

          <ListItem>
            <Left>
              <Text>Babada Kan Hastalığı</Text>
            </Left>

            <Body />
            <Right>
              <CheckBox checked={false} />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Erkek Kardeşte Kan Hastalığı</Text>
            </Left>

            <Body />
            <Right>
              <CheckBox checked={false} />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Kız Kardeşte Kan Hastalığı</Text>
            </Left>

            <Body />
            <Right>
              <CheckBox checked={false} />
            </Right>
          </ListItem>
          </Form>
          <Form style={Sty.varOlanHastaliklar.form}>
          <Item style = {Sty.varOlanHastaliklar.item}>
        <Text style = {Sty.varOlanHastaliklar.item}>Kanser</Text>
        </Item>
        <ListItem>
            <Left>
              <Text>Annede Kanser</Text>
            </Left>

            <Body />
            <Right>
              <CheckBox checked={false} />
            </Right>
          </ListItem>

          <ListItem>
            <Left>
              <Text>Babada Kanser</Text>
            </Left>

            <Body />
            <Right>
              <CheckBox checked={false} />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Erkek Kardeşte Kanser</Text>
            </Left>

            <Body />
            <Right>
              <CheckBox checked={false} />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Kız Kardeşte Kanser</Text>
            </Left>

            <Body />
            <Right>
              <CheckBox checked={false} />
            </Right>
          </ListItem>
          </Form>
          <Form style={Sty.varOlanHastaliklar.form}>
          <Item style = {Sty.varOlanHastaliklar.item}>
        <Text style = {Sty.varOlanHastaliklar.item}>Yüksek Tansiyon</Text>
        </Item>
        <ListItem>
            <Left>
              <Text>Annede Yüksek Tansiyon</Text>
            </Left>

            <Body />
            <Right>
              <CheckBox checked={false} />
            </Right>
          </ListItem>

          <ListItem>
            <Left>
              <Text>Babada Yüksek Tansiyon</Text>
            </Left>

            <Body />
            <Right>
              <CheckBox checked={false} />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Erkek Kardeşte Yüksek Tansiyon</Text>
            </Left>

            <Body />
            <Right>
              <CheckBox checked={false} />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Kız Kardeşte Yüksek Tansiyon</Text>
            </Left>

            <Body />
            <Right>
              <CheckBox checked={false} />
            </Right>
          </ListItem>
          </Form>
        </Content>
       
      </ScrollView>
      <View>
      <Button style={Sty.app.Bottombutton,{marginTop:3}} full
        onPress={() => { this.props.navigation.navigate('HealthCard') }} >

        <Text> Bilgilerimi Güncelle</Text></Button>
    </View>
    
</Container>

      
    );
  }
}