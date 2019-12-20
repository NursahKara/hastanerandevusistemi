import React, { Component } from 'react';
import { View} from 'react-native';
import HeaderScreen from "../HeaderScreen";
import { Item,Input,Icon,Button ,Picker,Form,Text} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import {Sty} from '../Style';


export default class AddEmergencyContactPage extends Component {
    
    constructor(props) {
        super(props);
        this.state = {  
            selectedItem: undefined,
            selected1: 'key1',
            results: {
                items: []
            }
    }
        }
    
    onValueChange (value) {
        this.setState({
            selected1 : value
        });
    }

  render() {
    return (
      
      <ScrollView style={Sty.app.healthCardBg}>
        <HeaderScreen
          //fn={this.props.navigation.openDrawer}
          headerTitle={"Kişi Ekle"}
        />
      <Form>
      


      <Item style={Sty.addPages.item}>
      
              <Icon name='paper' style={Sty.addPages.icon}/>
              <Input  placeholder="Ad Soyad" />

            </Item>      
            


<View style={Sty.addPages.view}>

 
                     <Picker
                   

               mode="dropdown"
               placeholder="Yakınlık"
              
         
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >

              <Picker.Item label="Baba" value="key1" />
              <Picker.Item label="Abi" value="key2" />
              <Picker.Item label="Kardeş" value="key3" />
              <Picker.Item label="Diğer" value="key4" />
              <Picker.Item label="Kızı" value="key3" />
              <Picker.Item label="Diğer" value="key4" />
            </Picker>
            </View>
           
        



     
             <Item style={Sty.addPages.item}>

              <Icon name='md-contacts' style={Sty.addPages.icon}/>
              <Input  placeholder="Telefon"/>

            </Item>


         

            

      </Form>

      <Button style={Sty.addPages.button} full ><Text> Kişi Ekle</Text></Button>
  

             

        </ScrollView>
      
      
    );
  }
}