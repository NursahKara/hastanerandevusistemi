
import React, { Component } from 'react';

import { Container, Content, List, } from 'native-base';

import DItem from "../../component/DItem";


export default class MyDoctors extends Component {

  render() {
    const Navigate = this.props.navigate;
    return (

      <Container style={{ height: "100%" }}>
        <Content style={{ height: "100%" }}>
          <List>

            <DItem navigate={Navigate} link='GetDateApppointments' topText="Dr. Ad Soyad" bottomText="Onkoloji Hst. İstanbul" rightText="RANDEVU AL" />
            <DItem navigate={Navigate} link='GetDateApppointments' topText="Dr. Ad Soyad" bottomText="Onkoloji Hst. İstanbul" rightText="RANDEVU AL" />
            <DItem navigate={Navigate} link='GetDateApppointments' topText="Dr. Ad Soyad" bottomText="Onkoloji Hst. İstanbul" rightText="RANDEVU AL" />
            <DItem navigate={Navigate} link='GetDateApppointments' topText="Dr. Ad Soyad" bottomText="Onkoloji Hst. İstanbul" rightText="RANDEVU AL" />
            <DItem navigate={Navigate} link='GetDateApppointments' topText="Dr. Ad Soyad" bottomText="Onkoloji Hst. İstanbul" rightText="RANDEVU AL" />
            <DItem navigate={Navigate} link='GetDateApppointments' topText="Dr. Ad Soyad" bottomText="Onkoloji Hst. İstanbul" rightText="RANDEVU AL" />
            <DItem navigate={Navigate} link='GetDateApppointments' topText="Dr. Ad Soyad" bottomText="Onkoloji Hst. İstanbul" rightText="RANDEVU AL" />
            <DItem navigate={Navigate} link='GetDateApppointments' topText="Dr. Ad Soyad" bottomText="Onkoloji Hst. İstanbul" rightText="RANDEVU AL" />
            <DItem navigate={Navigate} link='GetDateApppointments' topText="Dr. Ad Soyad" bottomText="Onkoloji Hst. İstanbul" rightText="RANDEVU AL" />
            <DItem navigate={Navigate} link='GetDateApppointments' topText="Dr. Ad Soyad" bottomText="Onkoloji Hst. İstanbul" rightText="RANDEVU AL" />
          </List>
        </Content>

      </Container>
    );
  }
}
