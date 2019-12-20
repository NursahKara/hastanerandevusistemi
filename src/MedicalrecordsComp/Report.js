import React, { Component } from 'react';
import { List } from "native-base";
import Item from '../component/Item';
export default class Report extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <List>
                <Item topText="Doç.Dr Ad Soyad" bottomText="Onkoloji Hst. İstanbul" rightTopText="24.09.2018 17:12" rightBottomText="Raporlar" />
                <Item topText="Doç.Dr Ad Soyad" bottomText="Onkoloji Hst. İstanbul" rightTopText="24.09.2018 17:13" rightBottomText="Raporlar" />
                <Item topText="Doç.Dr Ad Soyad" bottomText="Onkoloji Hst. İstanbul" rightTopText="24.09.2018 17:14" rightBottomText="Raporlar" />
                <Item topText="Doç.Dr Ad Soyad" bottomText="Onkoloji Hst. İstanbul" rightTopText="24.09.2018 17:15" rightBottomText="Raporlar" />
                <Item topText="Doç.Dr Ad Soyad" bottomText="Onkoloji Hst. İstanbul" rightTopText="24.09.2018 17:16" rightBottomText="Raporlarr" />
                <Item topText="Doç.Dr Ad Soyad" bottomText="Onkoloji Hst. İstanbul" rightTopText="24.09.2018 17:17" rightBottomText="Raporlar" />
                <Item topText="Doç.Dr Ad Soyad" bottomText="Onkoloji Hst. İstanbul" rightTopText="24.09.2018 17:18" rightBottomText="Raporlar" />
                <Item topText="Doç.Dr Ad Soyad" bottomText="Onkoloji Hst. İstanbul" rightTopText="24.09.2018 17:19" rightBottomText="Raporlar" />
                <Item topText="Doç.Dr Ad Soyad" bottomText="Onkoloji Hst. İstanbul" rightTopText="24.09.2018 17:20" rightBottomText="Raporlar" />
                <Item topText="Doç.Dr Ad Soyad" bottomText="Onkoloji Hst. İstanbul" rightTopText="24.09.2018 17:21" rightBottomText="Raporlar" />
            </List>
        );
    }
}
