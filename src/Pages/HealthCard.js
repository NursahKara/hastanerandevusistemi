import React, { Component } from 'react';
import HeaderScreen from "./HeaderScreen";
import {Sty} from "./Style"
import { Container, Content, Icon, Text,Card,CardItem,  Left, Right } from 'native-base';

export default class HealthCard extends Component {
  render() {
    return (
      <Container>
        <HeaderScreen
          //fn={this.props.navigation.openDrawer}
          headerTitle={"Sağlık Kartı"}
        />
        <Content style={Sty.app.healthCardBg}>
        <Card>
            <CardItem  button onPress={()=>{this.props.navigation.navigate('AccountInfo')}} name="arrow-forward">
              <Left>
              <Icon active name="medal" />
              <Text>Kullanıcı Bilgileri</Text>
              </Left>
              <Right>
              <Icon name="arrow-forward"/>
              </Right>
             </CardItem>
           </Card>
        <Card>
            <CardItem  button onPress={()=>{this.props.navigation.navigate('AiledeVarolanHastaliklarPage')}} name="arrow-forward">
              <Left>
              <Icon active name="medal" />
              <Text>Ailede Varolan Hastalıklar</Text>
              </Left>
              <Right>
              <Icon name="arrow-forward"/>
              </Right>
             </CardItem>
           </Card>

           <Card>
            <CardItem button onPress={()=>{this.props.navigation.navigate('MedicinesContinuousPage')}} name="arrow-forward">
              <Left>
              <Icon active name="medal" />
              <Text>Sürekli Kullanılan İlaçlar</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
           </Card>

           <Card>
            <CardItem button onPress={()=>{this.props.navigation.navigate('EmergencyCallPage')}} name="arrow-forward">
              <Left>
              <Icon active name="medal" />
              <Text>Acil Durumda Aranacaklar</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
           </Card>

           <Card>
            <CardItem button onPress={()=>{this.props.navigation.navigate('AllergyPage')}} name="arrow-forward">
              <Left>
              <Icon active name="medal" />
              <Text>Alerjiler</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
           </Card>

           <Card>
            <CardItem button onPress={()=>{this.props.navigation.navigate('SurgeryPage')}} name="arrow-forward">
              <Left>
              <Icon active name="medal" />
              <Text>Ameliyatlar</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
           </Card>

           <Card>
            <CardItem button onPress={()=>{this.props.navigation.navigate('illnessesPage')}} name="arrow-forward">
              <Left>
              <Icon active name="medal" />
              <Text>Hastalıklar</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
           </Card>

           <Card>
            <CardItem>
              <Left>
              <Icon active name="medal" />
              <Text>Sağlık Göstergeleri</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
           </Card>

        </Content>
        

      </Container>
    );
  }
}