
import React, { Component } from 'react';
import { Content, List,} from 'native-base';
import AItem from "../../component/AItem";

export default class MyAppointments extends Component {
    render() {
        const Navigate = this.props.navigate;

        return (

            <Content style={{marginLeft:'-3%',marginRight:'1%'}}>
                <List style ={{}}>
                <AItem  navigate={Navigate}  topText="Dr. Ad Soyad" bottomText="Nöroloji" centerText=" Onkoloji Hst Istanbul" rightTopText="30.12.2019" rightBottomText="15:20"></AItem>
                <AItem  navigate={Navigate}  topText="Dr. Ad Soyad" bottomText="Nöroloji" centerText=" Onkoloji Hst Istanbul" rightTopText="30.12.2019" rightBottomText="15:20"></AItem>
                <AItem  navigate={Navigate}  topText="Dr. Ad Soyad" bottomText="Nöroloji" centerText=" Onkoloji Hst Istanbul" rightTopText="30.12.2019" rightBottomText="15:20"></AItem>
                <AItem color= "#e7e3e3" navigate={Navigate}  topText="Dr. Ad Soyad" bottomText="Nöroloji" centerText=" Onkoloji Hst Istanbul" rightTopText="30.1.2019" rightBottomText="15:20"></AItem>
                <AItem color= "#e7e3e3" navigate={Navigate}  topText="Dr. Ad Soyad" bottomText="Nöroloji" centerText=" Onkoloji Hst Istanbul" rightTopText="30.1.2019" rightBottomText="15:20"></AItem>       
                </List>
            </Content>

        );
    }
}
