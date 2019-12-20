import React, { Component } from 'react';
import { Image } from 'react-native';
import HeaderScreen from "../HeaderScreen";
import { Container,  Content, Button,  Text,  Form } from 'native-base';
import { Sty } from '../Style';

export default class GenetikCheckupPage extends Component {
  render() {
    return (
      <Container>
        <HeaderScreen
          //fn={this.props.navigation.openDrawer}
          headerTitle={"Genetik Check Up"}
        />
        <Content style={Sty.app.healthCardBg}>
        <Form>
        <Image
                style={Sty.checkUp.logo}
                source={require("../../image/genetik.jpg")}
              />
               <Text style={Sty.checkUp.titleText}>Genetik Check Up hastalıklara olan yatkınlığınızı, çocuklarınıza geçebilecek genlerinizi, ileride oluşabilecek risk durumlarınızı
               öğrenmenizi ve önceden önlem almanızı amaçlayan bir programdır.</Text>

              <Text style={Sty.checkUp.titleText}>Genetik Check Up Analizi ile çevresel faktörler nedeniyle karşılaşabileceğimiz hastalıkları önlemek, başlangıç süresini uzatmak, yaşam süremizi daha 
              sağlıklı geçirmek, taşıyıcılık riskimizi ya da çocuklarımıza geçirebileceğimiz hastalıklar ve bunun riskleri hakkında bilgi sahibi olmak, ilaçlara karşı bünyemizin vereceği
              tepkiyi öğrenmek artık mümkün.</Text>
              <Text style={Sty.checkUp.titleText}>Tüm kişisel bilgilerin güvencede olduğu Genetik Check Up programı, uzmanlar tarafından detaylı bir aile ağacı çizilerek yorumlanır
              .Alınan tükürük örneği ile DNA incelenmesi oluşturulur ve size özel hazırlanan "Kişisel Genetik Rapor" kaliteli ve sağlıklı bir yaşam sürmenize yardımcı olur.</Text>
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