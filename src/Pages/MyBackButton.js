import React from 'react';
import { Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import {Button} from 'native-base';
import {Sty} from "./Style";

class MyBackButton extends React.Component {
  render() {
    return <Button transparent
     onPress={() => { this.props.navigation.goBack() }}>
         <Image
               

              
               style={Sty.header.MyBackButtonImage}
               source={require("../image/Back-icon.png")}
               />
               </Button>;
  
        
        
  }
}

// withNavigation returns a component that wraps MyBackButton and passes in the
// navigation prop
export default withNavigation(MyBackButton);