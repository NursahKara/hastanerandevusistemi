import React, { Component } from 'react';
import { View,Image } from 'react-native';
import HeaderScreen from "../HeaderScreen";
import { Container, Content, Text, Form} from 'native-base';
import { Sty } from '../Style';

export default class SprainPage extends Component {
  render()  {
    return (
        
      <Container>
        <HeaderScreen
          //fn={this.props.navigation.openDrawer}
          headerTitle={"Burkulma"}
        />
        <Content style={Sty.app.healthCardBg}>
        <Form>
       <Text style={Sty.firstAid.title}>Burkulma</Text>
       <Text style={Sty.firstAid.firstText}>Yapılacaklar ;</Text>
       <Text style={Sty.firstAid.text}>* Sıkıştırıcı bir bandajla burkulan eklemi tespit edin.</Text>
       <Text style={Sty.firstAid.text}>* Şişliği azaltmak için burkulan bölgeyi kalp seviyesinden yukarı kaldırın.</Text>
       <Text style={Sty.firstAid.text}>* Soğuk uygulama yapılır.</Text>
       <Text style={Sty.firstAid.text}>* Kusma varsa yan pozisyonda tutun.</Text>
       <Text style={Sty.firstAid.text}>* Tıbbi yardım çağırın (216 457 37 37 ya da 112).</Text>

       
        
     
      
       
       </Form>
       <View>
       <Image
       
        style={Sty.firstAid.logo}
        source={require('../../image/burkulma.png')}
      />

       </View>
        </Content>
     

      </Container>
      
     
    
  


    
    );
    }
}



