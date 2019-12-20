import React, { Component } from 'react';
import { View} from 'react-native';
import {Sty} from "../Style";
import { ListItem,Left,Right,Body,Text,Button, Container,CheckBox,Header} from 'native-base';
import MyBackButton from '../MyBackButton';

export default class ilnessesPage extends Component {


  render() {
    return (
      
      <Container style={Sty.app.healthCardBg}>
         <View >
        <Header style={{backgroundColor:'white',shadowColor: "#000",
        
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        
        elevation: 7}}>
        
          <Left>
            
       
         <MyBackButton></MyBackButton>
          
          </Left>
          <Body style={{marginLeft:20}}>
          <Text letterSpacing={2} wordSpacing={15} style={Sty.header.title}> Hastalık Seç
          
           </Text>
           
          </Body>
          <Right>

          <Button transparent
          onPress={() => {
           
            this.props.navigation.navigate('AddillnessesPage')}}
            >
              <Text style={{color:"blue"}}>Ekle</Text>
            </Button>
          </Right>
     
        </Header>
      </View>
          
        <View style={{marginTop:20}}>

            <ListItem>
              <CheckBox checked={true}/>
              <Body><Text>Kanser</Text></Body>
            </ListItem>

         
            <ListItem>
              <CheckBox checked={false}/>
              <Body><Text>Diyabet</Text></Body>
            </ListItem>

            <ListItem>
              <CheckBox checked={true}/>
              <Body><Text>Kalp</Text></Body>
            </ListItem>

            <ListItem>
              <CheckBox checked={false}/>
              <Body><Text>Kan Hastalığı</Text></Body>
            </ListItem>

            <ListItem>
              <CheckBox checked={true}/>
              <Body><Text>Yüksek Tansiyon</Text></Body>
            </ListItem>
            


            
          </View>
          <View>
      <Button style={Sty.app.Bottombutton,{marginTop:3}} full
        onPress={() => { this.props.navigation.navigate('HealthCard') }} >

        <Text> Bilgilerimi Güncelle</Text></Button>
    </View>
    
     </Container>
      
      
    );
  }
}