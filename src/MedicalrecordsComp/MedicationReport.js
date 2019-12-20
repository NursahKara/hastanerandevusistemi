import React, { Component } from 'react';
import {List} from "native-base";
import Item from '../component/Item';
export default class MedicationReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <List>
        <Item topText="Doç.Dr Ad Soyad" bottomText="Onkoloji Hst. İstanbul" rightTopText="24.09.2018 17:12" rightBottomText="İlaç Raporları"/>
        <Item topText="Doç.Dr Ad Soyad" bottomText="Onkoloji Hst. İstanbul" rightTopText="24.09.2018 17:13" rightBottomText="İlaç Raporları"/>
        <Item topText="Doç.Dr Ad Soyad" bottomText="Onkoloji Hst. İstanbul" rightTopText="24.09.2018 17:14" rightBottomText="İlaç Raporları"/>
        <Item topText="Doç.Dr Ad Soyad" bottomText="Onkoloji Hst. İstanbul" rightTopText="24.09.2018 17:15" rightBottomText="İlaç Raporları"/>
        <Item topText="Doç.Dr Ad Soyad" bottomText="Onkoloji Hst. İstanbul" rightTopText="24.09.2018 17:16" rightBottomText="İlaç Raporları"/>
        <Item topText="Doç.Dr Ad Soyad" bottomText="Onkoloji Hst. İstanbul" rightTopText="24.09.2018 17:17" rightBottomText="İlaç Raporları"/>
        <Item topText="Doç.Dr Ad Soyad" bottomText="Onkoloji Hst. İstanbul" rightTopText="24.09.2018 17:18" rightBottomText="İlaç Raporları"/>
        <Item topText="Doç.Dr Ad Soyad" bottomText="Onkoloji Hst. İstanbul" rightTopText="24.09.2018 17:19" rightBottomText="İlaç Raporları"/>
        <Item topText="Doç.Dr Ad Soyad" bottomText="Onkoloji Hst. İstanbul" rightTopText="24.09.2018 17:20" rightBottomText="İlaç Raporları"/>
        <Item topText="Doç.Dr Ad Soyad" bottomText="Onkoloji Hst. İstanbul" rightTopText="24.09.2018 17:21" rightBottomText="İlaç Raporları"/>
        </List>
    );
  }
}
