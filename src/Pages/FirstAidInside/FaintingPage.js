import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { View,Image ,TouchableHighlight} from 'react-native';
import HeaderScreen from "../HeaderScreen";
import { Col, Row, Grid } from 'react-native-easy-grid';
import {Linking} from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text,Card,CardItem, ListItem, Form, List, Left, Right, Body } from 'native-base';
import { Sty } from '../Style';
export default class FaintingPage extends Component {
  render()  {
    return (
        
      <Container>
        <HeaderScreen
          //fn={this.props.navigation.openDrawer}
          headerTitle={"Bayılma"}
        />
        <Content style={Sty.app.healthCardBg}>
        <Form>
       <Text style={Sty.firstAid.title}>Bayılma</Text>
       <Text style={Sty.firstAid.firstText}>Yapılacaklar ;</Text>
       <Text style={Sty.firstAid.text}>* Hastayı sırtüstü yatırarak, ayaklarını 30 cm. yukarı kaldırın.</Text>
       <Text style={Sty.firstAid.text}>* Solunum yolu açıklığını kontrol edin.</Text>
       <Text style={Sty.firstAid.text}>* Vücudunu sıkan giysileri gevşetin.</Text>
       <Text style={Sty.firstAid.text}>* Kusma varsa yan pozisyonda tutun.</Text>
       <Text style={Sty.firstAid.text}>* Tıbbi yardım çağırın (444 97 24 ya da 112).</Text>

       
        
     
      
       
       </Form>
       <View>
         
       
       </View>
       <View>
       <Image
       
        style={Sty.firstAid.logo}
        source={require('../../image/bayılma.png')}
      />

       </View>
        </Content>
     

      </Container>
      
     
    
  


    
    );
    }
}



