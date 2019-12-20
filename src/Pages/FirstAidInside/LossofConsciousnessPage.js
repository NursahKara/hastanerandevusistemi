import React, { Component } from 'react';
import { View,Image } from 'react-native';
import HeaderScreen from "../HeaderScreen";
import { Container, Content, Text,Form} from 'native-base';
import { Sty } from '../Style';

export default class LossofConsciousnessPage extends Component {
  render()  {
    return (
        
      <Container>
        <HeaderScreen
          //fn={this.props.navigation.openDrawer}
          headerTitle={"Bilinç Kaybı"}
        />
        <Content style={Sty.app.healthCardBg}>
        <Form>
       <Text style={Sty.firstAid.title}>Bilinç kaybı</Text>
       <Text style={Sty.firstAid.firstText}>Yapılacaklar ;</Text>
       <Text style={Sty.firstAid.text}> * Hastanın/yaralının yaşam bulgularını değerlendirin.</Text>
       <Text style={Sty.firstAid.text}> * Hasta ya da yaralıyı sırt üstü yatırın, ayaklarını 30 cm. yukarı kaldırın.</Text>
       <Text style={Sty.firstAid.text}> * Tıbbi yardım çağırın (0216 457 37 37 ya da 112)</Text>
       <Text style={Sty.firstAid.text}> * Yardım gelinceye kadar hastanın yanında bekleyin.</Text>
       

       
        
     
      
       
       </Form>
       <View>
       <Image
       
        
      />

       </View>
        </Content>
     

      </Container>
      
     
    
  


    
    );
    }
}



