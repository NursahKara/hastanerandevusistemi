import React, { Component } from 'react';
import HeaderScreen from "./HeaderScreen";
import { Container, Tab, Tabs, Icon, Text, View } from 'native-base';
import { Sty } from './Style';
import MyDoctors from './AppointmentsPages/MyDoctors';
import MyAppointments from './AppointmentsPages/MyAppointments';
import ClinicFollowUp from './AppointmentsPages/ClinicFollowUp';


export default class Apppointments extends Component {
  state = {
    page: 0
  }
  // componentDidMount(){
  //   this.focusListener=this.props.navigation.addListener('didFocus',()=>{
  //           const Page= this.props.navigation.getParam("page",0);
  //   this.setState({page:Page});
  //   console.log(Page);

  //   })

  // }
  // componentWillUnmount(){
  //   this.focusListener.remove();
  // }
  render() {

    return (
      <Container>
        <HeaderScreen
          //fn={this.props.navigation.openDrawer}
          headerTitle={"Randevu"} />
        <Tabs initialPage={this.state.page}>
          <Tab heading="Doktorlarım" tabStyle={{ backgroundColor: '#4975ba' }} textStyle={{ color: 'white' }} activeTabStyle={{ backgroundColor: '#4976BA' }} activeTextStyle={{ color: 'white', fontWeight: 'bold' }}>
            <MyDoctors navigate={this.props.navigation} />
          </Tab>
         
          <Tab heading="Planlı Takip" tabStyle={{ backgroundColor: '#4976BA' }} textStyle={{ color: 'white' }} activeTabStyle={{ backgroundColor: '#4976BA' }} activeTextStyle={{ color: 'white', fontWeight: 'bold' }}>
            <ClinicFollowUp navigate={this.props.navigation} />
          </Tab>
        </Tabs>
        <View style={{ height: 20, flexDirection: 'row', justifyContent: 'center' }}>
          <View style={{ height: 76, width: 76, borderRadius: 38, backgroundColor: '#4975ba', alignItems: 'center', justifyContent: 'center', marginTop: -55 }}
            onTouchStart={() => { this.props.navigation.navigate('GetService') }}>
            <Icon type="Octicons" name="plus" style={{ fontSize: 30, color: 'white' }} />
          </View>
        </View>
        <View style={{ height: 30, flexDirection: 'row', justifyContent: 'center' }}>
          <Text style={Sty.apppointments.textIcon}>RANDEVU AL</Text>
        </View>
      </Container>
    );
  }
}














