import React, { Component } from 'react';

import HeaderScreen from "./HeaderScreen";

import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text,Card,CardItem, ListItem, Form, List, Left, Right, Body } from 'native-base';
export default class HealthPractices extends Component {
  render() {
    return (
      <Container>
        <HeaderScreen
          //fn={this.props.navigation.openDrawer}
          headerTitle={"Sağlık Uygulamaları"}
        />
        <Content style={{backgroundColor: "#f5f5f5"}}>
        <Card>
            <CardItem button onPress={()=>{this.props.navigation.navigate('CheckupErkekPage')}} name="arrow-forward" >
              <Left>
              <Icon active name="medal" />
              <Text>Check Up / Erkek</Text>
              </Left>
              <Right>
                <Icon  name="arrow-forward" />
              </Right>
             </CardItem>
           </Card>

           <Card>
            <CardItem button onPress={()=>{this.props.navigation.navigate('CheckupKadinPage')}} name="arrow-forward" >
              <Left>
              <Icon active name="medal" />
              <Text>Check Up / Kadın</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
           </Card>

           <Card>
            <CardItem button onPress={()=>{this.props.navigation.navigate('GenetikCheckupPage')}} name="arrow-forward" >  
              <Left>
              <Icon active name="medal" />
              <Text>Genetik Check Up</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
           </Card>

           <Card>
            <CardItem button onPress={()=>{this.props.navigation.navigate('VucutmrPage')}} name="arrow-forward" > 
              <Left>
              <Icon active name="medal" />
              <Text>Tüm Vücut MR</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
           </Card>
           <Card>
            <CardItem button onPress={()=>{this.props.navigation.navigate('KanserTaramasiPage')}} name="arrow-forward" > 
              <Left>
              <Icon active name="medal" />
              <Text>Kanser Taraması</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
           </Card>
           

          

        </Content>
        

      </Container>
    );
  }
}