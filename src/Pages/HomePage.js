import React, { Component } from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import Card from "../HomePageComp/Card";
import HFooter from "../HomePageComp/HFooter";

import Wellcome from "./Wellcome";
import {Grid } from 'react-native-easy-grid';
import { Container} from 'native-base';



export default class HomePage extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: '#f4f4f4' }}>

        <View style={{ flex: 0.8, backgroundColor: '#f4f4f4' }}>
          <Image source={require('../image/hastanefoto.jpg')} style={{ height: '100%', width: '100%' }} resizeMode='cover'>
          </Image>
        </View>
        <Wellcome
          userName={"Nurşah Kara"} navi={this.props.navigation} />

        <Grid style={{ backgroundColor: '#f4f4f4', marginBottom: 5, marginTop: 5 }}>
          <Card navigate={this.props.navigation} image="randevular" text='Randevular' color='#e85250' link='Apppointments' ></Card>
          <Card navigate={this.props.navigation} image="tibbikayitlar" text='Tıbbi Kayıtlar' color='#f6ad1e' link='Medicalrecords'></Card>
        </Grid>

        <Grid style={{ backgroundColor: '#f4f4f4', marginBottom: 5 }}>
          <Card navigate={this.props.navigation} image="saglikkarti" text='Profilim' color='#3dbda7' link='HealthCard'></Card>
          <Card navigate={this.props.navigation} image="saglikuygulamalari" text="Sağlık Uygulamaları" color='#80a2d5' link='HealthPractices'></Card>
        </Grid>
       
       
        <HFooter navigate={this.props.navigation}></HFooter> 
      </Container>
    );
  }
}
