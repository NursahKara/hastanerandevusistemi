import React, { Component } from 'react';
import { View,Image,StyleSheet} from 'react-native';
import HeaderScreen from "../HeaderScreen";
import {Sty} from '../Style';
import { Container, Content,  Button,  Text, Form,} from 'native-base';

export default class VucutmrPage extends Component {
  render() {
    return (
      <Container>
        <HeaderScreen
          //fn={this.props.navigation.openDrawer}
          headerTitle={"Tüm Vücut MR"}
        />
        <Content style={Sty.app.healthCardBg}>
        <Form>
        <Image
                style={Sty.checkUp.logo}
                source={require("../../image/tummr.jpg")}
              />
               <Text style={Sty.checkUp.titleText}>Tüm vücudun tek seansta, 45 dakikalık sürede görüntülenebildiği Tüm Vücut MR programı, radyasyonsuz ve yan etkisi olmayan
               bir check-up yöntemidir. Bu yöntem ile hastalık belirtileri oluşmadan erken dönemde sorunlu kitlelerin fark edilmesi sağlanabilmektedir.</Text>
              <Text style={Sty.checkUp.titleText}>Kanser riski ve endişesi taşıyan sağlıklı kişilerin de yararlanabileceği Tüm Vücut MR, klasik tarama yöntemlerinde inceleme 
              kapsamında olmayan bölgelerin de taranmasını sağlayarak, erken dönem bulguların tespit edilmesine olanak sağlamaktadır.</Text>
              <Text style={Sty.checkUp.titleText}></Text>
       
       <View style={Sty.app.bottom}>
          <Button full style={style=Sty.app.Bottombutton} full  ><Text> İLGİLENİYORUM</Text></Button>
        </View>

       </Form>
        </Content>
      </Container>
    );
 
  }

}
