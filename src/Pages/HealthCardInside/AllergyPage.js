import React, { Component } from 'react';
import { View,TextInput} from 'react-native';
import HeaderScreen from '../HeaderScreen';
import {Sty} from "../Style"
import { Container, CheckBox, Button, Text, ListItem, Form, Body } from 'native-base';
export default class AllergyPage extends Component {
  render() {
    return (
        <Container style={Sty.app.healthCardBg}>

          <HeaderScreen
          headerTitle={"Alerjiler"}
         
          />
          <View style={Sty.allergyPage.form}>

            <ListItem>
              <CheckBox checked={true}/>
              <Body><Text>Böcek</Text></Body>
            </ListItem>

         
            <ListItem>
              <CheckBox checked={false}/>
              <Body><Text>İlaç</Text></Body>
            </ListItem>

            <ListItem>
              <CheckBox checked={true}/>
              <Body><Text>Mevsimsel</Text></Body>
            </ListItem>

            <ListItem>
              <CheckBox checked={false}/>
              <Body><Text>Yiyecek</Text></Body>
            </ListItem>

            <ListItem>
              <CheckBox checked={true}/>
              <Body><Text>Diğer</Text></Body>
            </ListItem>
            


            
          </View>

          <Form style={Sty.allergyPage.form}>
           

          <TextInput   style={Sty.allergyPage.textInput}  
                multiline = {true}
                numberOfLines = {5}
                maxLength={250}
                placeholder="250 harf alerjileriniz hakkında bilgi verin."
                
                />
  </Form>


        

        

        
         <View>
      <Button style={Sty.app.Bottombutton,{marginTop:3}} full
        onPress={() => { this.props.navigation.navigate('HealthCard') }} >

        <Text> Bilgilerimi Güncelle</Text></Button>
    </View>
    

          
      
        </Container>
  
    );
  }
}