import React, { Component } from 'react';
import HeaderScreen from "../HeaderScreen";
import { Container, Content, Text, Form} from 'native-base';
import { Sty } from '../Style';

export default class AlerjikReaksiyonPage extends Component {
  render() {
    return (
      <Container>
        <HeaderScreen
          //fn={this.props.navigation.openDrawer}
          headerTitle={"Alerjik Reaksiyon"}
        />
        <Content style={Sty.app.healthCardBg}>
        <Form>
       <Text style={Sty.firstAid.title}>Alerjik Reaksiyon</Text>
       <Text style={Sty.firstAid.firstText}>Yapılacaklar ;</Text>
       <Text style={Sty.firstAid.text}>* Hastayı alerji yaptığını bildiğiniz maddelerin bulunduğu yerlerden uzaklaşın.</Text>
       <Text style={Sty.firstAid.text}>* Reaksiyon hafif ise antihistaminik ilaç verin.</Text>
       <Text style={Sty.firstAid.text}>* Deride geniş ve kırmızı kabarıkık olduysa kaşımayın, evinizde kaşıntıyı giderici ilaç varsa kullanın.</Text>
       <Text style={Sty.firstAid.text}>* Şuur yerinde değilse, kişi yeterli derecede solunum yapamıyorsa, öne doğru meyilli olacak şekilde yana yatırınız.</Text>
       <Text style={Sty.firstAid.text}>* Eğer bu basit önlemlerle alerjik reaksiyon geçmiyorsa, tıbbı yardımi çağırın (444 97 24 yada 112)</Text>
       </Form>
        </Content>
      </Container>
    );
  }
}