import React, { Component } from 'react';
import HeaderScreen from "../HeaderScreen";
import { Item,Form,Text,Input,Icon,Button,DatePicker } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import { Sty } from '../Style';

export default class AddillnessesPage extends Component {

    constructor(props) {
        super(props);
        this.state = { chosenDate: new Date() };
        this.setDate = this.setDate.bind(this);
      }
      setDate(newDate) {
        this.setState({ chosenDate: newDate });
      }

  render() {
    return (
      
      <ScrollView style={Sty.app.healthCardBg}>
        <HeaderScreen
          //fn={this.props.navigation.openDrawer}
          headerTitle={"Hastalık Ekle"}
        />
      <Form>

      <Item style={Sty.addPages.item}>
      
              <Icon name='medkit' style={Sty.addPages.icon}/>
              <Input  placeholder="Hastalık Adı" />
     </Item>

            <Item style={Sty.addPages.item}>

              <Icon name='clock' style={Sty.addPages.icon}/>
              <Input  placeholder="Tarih">

              <Text>
              Tarih: {this.state.chosenDate.toString().substr(4, 12)}
            </Text>

              </Input>

            </Item>


            <DatePicker
            defaultDate={new Date(this.Date)}
            minimumDate={new Date(1950, 1, 1)}
            maximumDate={new Date(2020, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Select date"
            textStyle={{ color: "blue" }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={this.setDate}
            disabled={false}
            />
          

            <Button style={Sty.addPages.button} full >
                <Text> Hastalık Ekle</Text>
                </Button>

      </Form>
  

        </ScrollView>
      
      
    );
  }
}