import React, { Component } from 'react';

import { Content, Container } from 'native-base';
import { Sty } from '../Style';
import DItem from '../../component/DItem';
export default class ClinicFollowUp extends Component {
  render() {
    const Navigate = this.props.navigate;
    return (
      <Container style={{ height: "100%" }}>
        <Content style={{ height: "100%" }}>
          <DItem navigate={Navigate} link='GetDateApppointments' planDate="20.12.2019" topText="Dr. Ad Soyad" bottomText="Önerilen Tarih: 20.12.2019" rightText="RANDEVU AL" />
          <DItem navigate={Navigate} link='GetDateApppointments' planDate="20.12.2019" topText="Dr. Ad Soyad" bottomText="Önerilen Tarih: 20.12.2019" rightText="RANDEVU AL" />
        </Content>
      </Container>
    );
  }
}
