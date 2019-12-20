import React, { Component } from 'react';
import { View,Image} from 'react-native';
import HeaderScreen from "../HeaderScreen";
import { Container, Content,Text, Form} from 'native-base';
import { Sty } from '../Style';

export default class SuffocationPage extends Component {
  render()  {
    return (
        
      <Container>
        <HeaderScreen
          //fn={this.props.navigation.openDrawer}
          headerTitle={"Boğulma"}
        />
        <Content style={Sty.healthCardBg}>
        <Form>
       <Text style={Sty.firstAid.title}>Boğulma</Text>
       <Text style={Sty.firstAid.firstText}>Yapılacaklar ;</Text>
       <Text style={Sty.firstAid.text}>* Bilinç kontrolü yapın.</Text>
       <Text style={Sty.firstAid.text}>* Hastanın yaşamsal bulgularını değerlendirin.</Text>
       <Text style={Sty.firstAid.text}>* Tıbbi yardım çağırın (0216 457 37 37 ya da 112).</Text>
       <Text style={Sty.firstAid.text}>* Yaşam bulgularını izleyin.</Text>


       <Text style={Sty.firstAid.title}>Suda Boğulma</Text>
       <Text style={Sty.firstAid.firstText}>Yapılacaklar ;</Text>
       <Text style={Sty.firstAid.text}>* Ağızdan ağza ya da ağızdan buruna solunumun suda yaptırılması mümkündür ve bu uygulamaya su içerisinde iken başlayın.</Text>
       <Text style={Sty.firstAid.text}>* Bu uygulama derin sularda mümkün olmayabilir, bu nedenle hastayı/yaralıyı hızla sığ suya doğru çekin.</Text>
       <Text style={Sty.firstAid.text}>* Suda boğulma özellikle soğuk suda gerçekleşmişse, 20-30 dakika geçse bile yapay solunum ve kalp masajına başlayın.</Text>
       <Text style={Sty.firstAid.text}>* Tıbbi yardım çağırın (0216 457 37 37 ya da 112).</Text>



       <Text style={Sty.firstAid.firstText}>Yapılmayacaklar ;</Text>
       <Text style={Sty.firstAid.text}>* Boğulma suya atlama sonucu gerçekleşmişse, boğulma riskinin yanı sıra genel vücut travması ya da omurga kırıkları da akla gelmelidir. 
       Bu nedenle müdahaleler sırasında başın hareket ettirilmemesi, aksine sabitlenmesi gereklidir.</Text>





     
      
       
       </Form>
       






       <View>
       <Image
       
        style={{width:"100%",marginBottom:10}}
        source={require('../../image/bogulma.png')}
      />

       </View>
       <View>


       </View>
        </Content>
     

      </Container>
      
     
    
  


    
    );
    }
}



