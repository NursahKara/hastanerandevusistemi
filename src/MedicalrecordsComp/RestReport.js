import React, { Component } from 'react';
import {List} from "native-base";
import Item from '../component/Item';
export default class RestReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <List>
        <Item topText="Doç.Dr Ad Soyad" bottomText="Onkoloji Hst. İstanbul" rightTopText="24.09.2018 17:12" rightBottomText="İstirahat Raporu"/>
        <Item topText="Doç.Dr Ad Soyad" bottomText="Onkoloji Hst. İstanbul" rightTopText="24.09.2018 17:13" rightBottomText="İstirahat Raporu"/>
        <Item topText="Doç.Dr Ad Soyad" bottomText="Onkoloji Hst. İstanbul" rightTopText="24.09.2018 17:14" rightBottomText="İstirahat Raporu"/>
        <Item topText="Doç.Dr Ad Soyad" bottomText="Onkoloji Hst. İstanbul" rightTopText="24.09.2018 17:15" rightBottomText="İstirahat Raporu"/>
        <Item topText="Doç.Dr Ad Soyad" bottomText="Onkoloji Hst. İstanbul" rightTopText="24.09.2018 17:16" rightBottomText="İstirahat Raporu"/>
        <Item topText="Doç.Dr Ad Soyad" bottomText="Onkoloji Hst. İstanbul" rightTopText="24.09.2018 17:17" rightBottomText="İstirahat Raporu"/>
        <Item topText="Doç.Dr Ad Soyad" bottomText="Onkoloji Hst. İstanbul" rightTopText="24.09.2018 17:18" rightBottomText="İstirahat Raporu"/>
        <Item topText="Doç.Dr Ad Soyad" bottomText="Onkoloji Hst. İstanbul" rightTopText="24.09.2018 17:19" rightBottomText="İstirahat Raporu"/>
        <Item topText="Doç.Dr Ad Soyad" bottomText="Onkoloji Hst. İstanbul" rightTopText="24.09.2018 17:20" rightBottomText="İstirahat Raporu"/>
        <Item topText="Doç.Dr Ad Soyad" bottomText="Onkoloji Hst. İstanbul" rightTopText="24.09.2018 17:21" rightBottomText="İstirahat Raporu"/>
        </List>
    );
  }
}
