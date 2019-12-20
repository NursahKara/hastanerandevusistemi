import React, { Component } from 'react';
import HeaderScreen from "./HeaderScreen";
import { Container, Content, Icon, Text,Card,CardItem, Left, Right } from 'native-base';
import { Sty } from './Style';
import HFooter from "../HomePageComp/HFooter";
export default class FirstAidPage extends Component {
  render() {
    return (
      <Container>
        <HeaderScreen
          //fn={this.props.navigation.openDrawer}
          headerTitle={"ONKOLOJİ"}
        />
        <Content style={Sty.app.healthCardBg}>
        
              <Card>
              <CardItem button onPress={()=>{this.props.navigation.navigate('AlerjikReaksiyonPage')}} name="arrow-forward" >                          
              <Left>
              <Icon active name="medkit" />
              <Text >AlerjikReaksiyon</Text>
              </Left>
              <Right>
              <Icon name="arrow-forward" />
              </Right>
              
         
             </CardItem>
           </Card>


           <Card>
           <CardItem button onPress={()=>{this.props.navigation.navigate('FaintingPage')}} name="arrow-forward" >
              <Left>
              <Icon active name="medkit" />
              <Text>Bayılma</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
           </Card>


           <Card>
           <CardItem button onPress={()=>{this.props.navigation.navigate('LossofConsciousnessPage')}} name="arrow-forward" >
              <Left>
              <Icon active name="medkit" />
              <Text>Bilinç Kaybı</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
           </Card>


           <Card>
           <CardItem button onPress={()=>{this.props.navigation.navigate('SuffocationPage')}} name="arrow-forward" >
              <Left>
              <Icon active name="medkit" />
              <Text>Boğulma</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
           </Card>


           <Card>
           <CardItem button onPress={()=>{this.props.navigation.navigate('SprainPage')}} name="arrow-forward" >
              <Left>
              <Icon active name="medkit" />
              <Text>Burkulma</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
           </Card>


          

        </Content>

        
        <HFooter navigate={this.props.navigation}></HFooter> 
   
      </Container>
    );
  }
}