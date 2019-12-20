import React, { Component } from 'react';
import {Image} from 'react-native';
import HeaderScreen from "../HeaderScreen";
import { Container,  Content,  Button,Text,Form} from 'native-base';
import { Sty } from '../Style';

export default class CheckupErkekPage extends Component {
  render() {
    return (
      <Container>
        <HeaderScreen
          //fn={this.props.navigation.openDrawer}
          headerTitle={"Check Up/Erkek"}
        />
        <Content style={Sty.app.healthCardBg}>
        <Form>
        <Image
                style={Sty.checkUp.logo}
                source={require("../../image/erkekup.jpg")}
              />
               <Text style={Sty.checkUp.titleText}>Erkeklere özel olarak hazırlanan Check Up programımızdan yararlanarak gelecekte ortaya çıkabilecek
              sağlık risklerine karşı önlem alabilir, erken tanı ve tedavi olanağından yararlanabilirsiniz.</Text>
              <Text style={Sty.checkUp.titleText}>Doktora gitmek için sağlık sorunları yaşamayı beklemeyin! </Text>
              <Text style={Sty.checkUp.titleText}>Sağlıklı olma halinizi korumak için Check Up programımıza katılabilirsiniz.</Text>
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