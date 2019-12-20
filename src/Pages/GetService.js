import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Alert } from "react-native";
import { Grid, Row } from 'native-base';
import SearchBar from 'react-native-search-bar';
import { Sty } from "./Style";

import HeaderScreen from "./HeaderScreen";

import Icon from "react-native-vector-icons/MaterialIcons";

export default class GetService extends Component {
  //  _onChangeText = text => { this.setState({name: text,})};

  toggleExpand1 = () => {
    this.setState({
      expanded1: !this.state.expanded1,
      expanded2: false,

    })

  }
  toggleExpand2 = (text) => {
    this.setState({
      expanded2: !this.state.expanded2,
      expanded1: !this.state.expanded1,
      name: text
    })
    console.log(text);
    console.log(text == "Jinekoloji");
  }
constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      expanded1: false,
      expanded2: false,
      name: 'Bölüm Seçiniz',
    }
  }
  doctorPermission = () => {
if (this.state.name == "Jinekoloji") {
      Alert.alert(
        'Uyarı!',
        'Bu doktordan seçim yapamazsınız.',
        [

          { text: 'Tamam', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false },
      );
    } else {
      this.props.navigation.navigate('GetDateApppointments');

    }
  }
  render() {

    return (
      <View>
        <HeaderScreen
        //fn={this.props.navigation.openDrawer}
        //headerTitle={"İSTANBUL ONKOLOJİ HASTANESİ "} 
        >
        </HeaderScreen>

        <TouchableOpacity style={Sty.getServices.row} onPress={() => this.toggleExpand1()}>
          <Grid>
            <Row style={Sty.getServices.center}>
              <Text style={Sty.getServices.title}>{this.state.name}</Text></Row>
            <Row style={Sty.getServices.center}>
              <Icon style={Sty.getServices.icon} name={this.state.expanded1 ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                size={30} color='#d3d3d3' />
            </Row>
          </Grid>
        </TouchableOpacity>
        <View style={Sty.getServices.parentHr} />
        {
          this.state.expanded1 &&
          <View>
            <SearchBar
              //https://github.com/umhan35/react-native-search-bar
              ref="searchBar"
              placeholder="Bölüm ara"
            // onChangeText={}
            // onSearchButtonPress={}
            // onCancelButtonPress={}
            />
            <View onTouchStart={() => this.toggleExpand2("Beslenme ve Diyet")} style={Sty.getServices.child}>
              <Text style={Sty.getServices.icon} >Beslenme ve Diyet</Text>
            </View>
            <View style={Sty.getServices.childHr} />

            <View onTouchStart={() => this.toggleExpand2("Jinekoloji")} style={Sty.getServices.child}>
              <Text style={Sty.getServices.icon}>Jinekoloji</Text>
            </View>
            <View style={Sty.getServices.childHr} />

            <View onTouchStart={() => this.toggleExpand2("Nöroloji")} style={Sty.getServices.child}>
              <Text style={Sty.getServices.icon}>Nöroloji</Text>
            </View>
            <View style={Sty.getServices.childHr} />

            <View style={Sty.getServices.child} onTouchStart={() => this.toggleExpand2("Algoloji")}>
              <Text style={Sty.getServices.icon}>Algoloji</Text>
            </View>
            <View style={Sty.getServices.parentHr} />

            {/* <View style={styles.child}>
                  <Text>{this.props.data}bölüm5</Text>
                </View>
                <View style={styles.parentHr} /> */}
          </View>
        }

        <TouchableOpacity style={Sty.getServices.row} >
          <Grid>
            <Row style={Sty.getServices.center}>
              <Text style={Sty.getServices.title}>Doktor Seçiniz</Text></Row>
            <Row style={Sty.getServices.center}>
              <Icon style={Sty.getServices.icon} name={this.state.expanded2 ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                size={30} color='#d3d3d3' />
            </Row>
          </Grid>
        </TouchableOpacity>
        <View style={Sty.getServices.parentHr} />
        {
          this.state.expanded2 &&
          <View>
            <SearchBar
              ref="searchBar"
              placeholder="Doktor Ara"
            // onChangeText={}
            // onSearchButtonPress={}
            // onCancelButtonPress={}
            />
            <View style={Sty.getServices.child}
              onTouchStart={() => this.doctorPermission()}>
              <Text style={Sty.getServices.icon} >doktor1</Text>
            </View>
            <View style={Sty.getServices.childHr} />

            <View style={Sty.getServices.child}
              onTouchStart={() => this.doctorPermission()}>
              <Text style={Sty.getServices.icon}>doktor 2</Text>
            </View>
            <View style={Sty.getServices.childHr} />

            <View style={Sty.getServices.child}
              onTouchStart={() => this.doctorPermission()}>
              <Text style={Sty.getServices.icon}>doktor 3</Text>
            </View>
            <View style={Sty.getServices.childHr} />

            <View style={Sty.getServices.child}
              onTouchStart={() => this.doctorPermission()}>

              <Text style={Sty.getServices.icon}>doktor 4</Text>
            </View>
            <View style={Sty.getServices.parentHr} />
          </View>
        }
      </View>
    )
  }
}
