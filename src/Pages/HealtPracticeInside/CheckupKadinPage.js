import React, { Component } from 'react';
import { View,Image ,TouchableHighlight} from 'react-native';
import HeaderScreen from "../HeaderScreen";
import { Col, Row, Grid } from 'react-native-easy-grid';
import {Linking} from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text,Card,CardItem, ListItem, Form, List, Left, Right, Body } from 'native-base';
import { Sty } from '../Style';
export default class CheckupKadinPage extends Component {
  render() {
    return (
      <Container>
        <HeaderScreen
          //fn={this.props.navigation.openDrawer}
          headerTitle={"Check Up/Kadın"}
        />
        <Content style={Sty.app.healthCardBg}>
        <Form>
        <Image
                style={Sty.checkUp.logo}
                source={require("../../image/kadinmr.jpg")}
              />
               <Text style={Sty.checkUp.titleText}>Kadınlara özel olarak hazırlanan Check Up programımızdan yararlanarak; gelecekte ortaya çıkabilecek
              sağlık risklerine karşı önlem alabilir, erken tanı ve tedavi olanağından yararlanabilirsiniz.</Text>
              <Text style={Sty.checkUp.titleText}>Doktora gitmek için sağlık sorunları yaşamayı beklemeyin! </Text>
              <Text style={Sty.checkUp.titleText}>Sağlıklı olma halinizi korumak için Check Up programımıza katılabilirsiniz.</Text>
              <Text style={Sty.checkUp.titleText}></Text>

             
       <Button full >
       
       <Text>İlgileniyorum</Text>
     </Button>





       </Form>
        </Content>
      </Container>
    );
  }
}