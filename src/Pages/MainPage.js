import React, { Component } from 'react';
import {View,} from "react-native";

import { Sty } from "../Pages/Style";
import MyDoctors from "./AppointmentsPages/MyDoctors";
import { Footer, FooterTab, Button, Icon, Text,Container,Header,Content } from 'native-base';
export default class MainPage extends Component {

    render() {
        const Navigate = this.props.navigate;
        return (
       
          
            <Footer >
                <FooterTab style={Sty.footer.footerTab} >
                  <Button vertical>
                  <Icon style={{color: "#838080"}} name="apps" />
                  <Text style={Sty.footer.text}>Anasayfa</Text>
                  </Button>

                <MyDoctors navigate={this.props.navigation}/>
                <Button vertical>
                  <Icon style={{color: "#838080"}} name="apps" />
                  <Text style={Sty.footer.text}>Anasayfa</Text>
                  </Button>

                <MyDoctors navigate={this.props.navigation}/>

                <Button vertical>
                  <Icon style={{color: "#838080"}} name="apps" />
                  <Text style={Sty.footer.text}>Anasayfa</Text>
                  </Button>

                <MyDoctors navigate={this.props.navigation}/>

                <Button vertical>
                  <Icon style={{color: "#838080"}} name="apps" />
                  <Text style={Sty.footer.text}>Anasayfa</Text>
                  </Button>

                <MyDoctors navigate={this.props.navigation}/>


                    {/* <Button vertical onPress={() => { Navigate.navigate('HomePage') }}>
                        <Icon style={{color: "#838080"}} name="apps" />
                        <Text style={Sty.footer.text}>Anasayfa</Text>
                    </Button> */}
                    {/* <Button  vertical onPress={() => { Navigate.navigate('CallPage') }} >
                        <Image
                            style={Sty.wellcome.image}
                            source={require("../image/alo.png")} />
                        <Text style={Sty.footer.text}>Çağrı Merkezi</Text>
                    </Button>
                    <Button vertical onPress={() => { Navigate.navigate('HospitalPage') }}>
                        <Image
                            style={Sty.wellcome.image}
                            source={require("../image/hastaneKonum.png")} />
                        <Text style={Sty.footer.text}>Konum</Text>
                    </Button>
                    <Button vertical onPress={() => { Navigate.navigate('FirstAidPage') }} >
                        <Image
                            style={Sty.wellcome.image}
                            source={require("../image/ilkyardim.png")} />
                        <Text style={Sty.footer.text}>İlk Yardım</Text>
                    </Button> */}
                </FooterTab>
            </Footer>
          
                    );
    }
}