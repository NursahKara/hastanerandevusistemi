import React, { Component } from 'react';
import HeaderScreen from "./HeaderScreen";
import { Sty } from "./Style";
import {Alert} from "react-native";
import Toast from 'react-native-simple-toast';
import { Container, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

//import { ScrollView } from 'react-native-gesture-handler';
import { ScrollView, Dimensions, StyleSheet, View } from 'react-native';
import { Grid, Col } from 'react-native-easy-grid';

const { width } = Dimensions.get('window');
export default class GetDateApppointments extends Component {
    constructor(props){
        super(props);
    }
    paging=() =>{Toast.show('Başarıyla Tamamlandı');
    this.props.navigation.navigate('Apppointments',{page:1});
    console.log('afsfasafaf')}
    render() {
        const planDate=this.props.navigation.getParam("PlanDate","");
        console.log(planDate);
        return (
            <Container style={Sty.app.healthCardBg}>
                <HeaderScreen
                    //fn={this.props.navigation.openDrawer}
                    headerTitle={"Randevu Al"} />

                <List style={[Sty.getApppointments.list, Sty.getApppointments.marginTop]}>
                    <ListItem thumbnail>
                        <Left>
                            <Thumbnail square source={{ uri: 'https://istanbulonkoloji.com/Content/UserFiles/doctor/small/alper-ozkan-v3373.jpg' }} />
                        </Left>
                        <Body>
                            <Text style={Sty.getApppointments.text}>
                                Prof.Dr. Nuri TASALI
                     </Text>
                            <Text note numberOfLines={1}>Onkoloji Hst. İstanbul</Text>
                        </Body>
                        <Right>
                            <Button transparent onPress={()=>{this.props.navigation.navigate('DoctorCV')}}>
                                <Text style={{
                                    fontSize: 20
                                }

                                }>CV</Text>
                            </Button>
                        </Right>

                    </ListItem>

                </List>
                <ScrollView horizontal={true}
                    pagingEnabled={true} style={Sty.getApppointments.marginTop}>
                    <Body >
                        <Grid style={Sty.getDateApppointments.grid}>

                            <ScrollView >

                                <Col style={Sty.getDateApppointments.col}>

                                    <Body>
                                        
                                        <Text style={Sty.getDateApppointments.title}>24 eylül {"\n"} Salı</Text>
                                        <Text onPress={() => Alert.alert(
  'Randevu Onayı',
  '24 Eylül Saat 09.00 randevunuzu onaylıyor musunuz?',
  [
 //   {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
    {
      text: 'Çıkış',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {text: 'Onaylıyorum', onPress: () => Toast.show('Başarıyla Tamamlandı')},
  ],
  {cancelable: false},
)}  style={Sty.getDateApppointments.text}>09:00</Text>
                                        <Text  onPress={() => Alert.alert(
  'Randevu Onayı',
  '24 Eylül Saat 10.00 randevunuzu onaylıyor musunuz?',
  [
 //   {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
    {
      text: 'Çıkış',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {text: 'Onaylıyorum', onPress: () =>this.paging()},

  ],
  {cancelable: false},
)} style={Sty.getDateApppointments.pickedText}>10:00</Text>
                                        <Text  style={Sty.getDateApppointments.text}>11:00</Text>
                                        <Text  style={Sty.getDateApppointments.text}>12:00</Text>
                                        <Text  style={Sty.getDateApppointments.pickedText}>13:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>14:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>15:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>16:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>17:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>18:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>19:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>09:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>10:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>11:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>12:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>13:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>14:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>15:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>16:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>17:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>18:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>19:00</Text>


                                    </Body>
                                </Col>
                            </ScrollView>
                            <ScrollView>
                                <Col style={Sty.getDateApppointments.col}>
                                    <Body>
                                        <Text style={Sty.getDateApppointments.title}>25 eylül {"\n"} Çarşamba</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>09:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>10:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>11:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>12:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>13:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>14:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>15:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>16:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>17:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>18:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>19:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>09:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>10:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>11:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>12:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>13:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>14:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>15:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>16:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>17:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>18:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>19:00</Text>

                                    </Body>
                                </Col>
                            </ScrollView>
                            <ScrollView>
                                <Col style={Sty.getDateApppointments.lastCol}>
                                    <Body>
                                        <Text style={Sty.getDateApppointments.title}>26 eylül {"\n"} Perşembe</Text>
                                        <Text style={Sty.getDateApppointments.text}>09:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>10:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>11:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>12:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>13:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>14:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>15:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>16:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>17:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>18:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>19:00</Text>

                                        <Text style={Sty.getDateApppointments.text}>09:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>10:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>11:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>12:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>13:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>14:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>15:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>16:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>17:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>18:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>19:00</Text>


                                    </Body>

                                </Col>

                            </ScrollView>
                        </Grid>

                    </Body>
                    <Body >
                        <Grid style={Sty.getDateApppointments.grid}>
                            <ScrollView>
                                <Col style={Sty.getDateApppointments.col}>

                                    <Body>
                                        <Text style={Sty.getDateApppointments.title}>24 eylül {"\n"} Salı</Text>
                                        <Text style={Sty.getDateApppointments.text}>09:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>10:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>11:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>12:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>13:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>14:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>15:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>16:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>17:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>18:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>19:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>09:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>10:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>11:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>12:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>13:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>14:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>15:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>16:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>17:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>18:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>19:00</Text>
                                    </Body>
                                </Col>
                            </ScrollView>
                            <ScrollView>
                                <Col style={Sty.getDateApppointments.col}>
                                    <Body>
                                        <Text style={Sty.getDateApppointments.title}>25 eylül {"\n"} Çarşamba</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>09:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>10:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>11:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>12:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>13:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>14:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>15:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>16:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>17:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>18:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>19:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>09:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>10:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>11:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>12:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>13:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>14:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>15:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>16:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>17:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>18:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>19:00</Text>

                                    </Body>
                                </Col>
                            </ScrollView>
                            <ScrollView>
                                <Col style={Sty.getDateApppointments.lastCol}>
                                    <Body>
                                        <Text style={Sty.getDateApppointments.title}>26 eylül {"\n"} Perşembe</Text>
                                        <Text style={Sty.getDateApppointments.text}>09:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>10:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>11:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>12:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>13:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>14:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>15:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>16:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>17:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>18:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>19:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>09:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>10:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>11:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>12:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>13:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>14:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>15:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>16:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>17:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>18:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>19:00</Text>

                                    </Body>

                                </Col>
                            </ScrollView>

                        </Grid>

                    </Body>
                    <Body >
                        <Grid style={Sty.getDateApppointments.grid}>
                            <ScrollView>
                                <Col style={Sty.getDateApppointments.col}>

                                    <Body>
                                        <Text style={Sty.getDateApppointments.title}>24 eylül {"\n"} Salı</Text>
                                        <Text style={Sty.getDateApppointments.text}>09:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>10:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>11:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>12:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>13:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>14:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>15:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>16:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>17:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>18:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>19:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>09:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>10:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>11:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>12:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>13:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>14:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>15:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>16:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>17:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>18:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>19:00</Text>
                                    </Body>
                                </Col>
                            </ScrollView>
                            <ScrollView>
                                <Col style={Sty.getDateApppointments.col}>
                                    <Body>
                                        <Text style={Sty.getDateApppointments.title}>25 eylül {"\n"} Çarşamba</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>09:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>10:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>11:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>12:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>13:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>14:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>15:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>16:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>17:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>18:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>19:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>09:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>10:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>11:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>12:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>13:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>14:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>15:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>16:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>17:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>18:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>19:00</Text>

                                    </Body>
                                </Col>
                            </ScrollView>
                            <ScrollView>
                                <Col style={Sty.getDateApppointments.lastCol}>
                                    <Body>
                                        <Text style={Sty.getDateApppointments.title}>26 eylül {"\n"} Perşembe</Text>
                                        <Text style={Sty.getDateApppointments.text}>09:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>10:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>11:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>12:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>13:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>14:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>15:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>16:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>17:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>18:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>19:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>09:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>10:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>11:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>12:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>13:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>14:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>15:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>16:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>17:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>18:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>19:00</Text>


                                    </Body>

                                </Col>
                            </ScrollView>

                        </Grid>

                    </Body>
                    <Body style={StyleSheet.slidingPage}>
                        <Grid style={Sty.getDateApppointments.grid}>
                            <ScrollView>
                                <Col style={Sty.getDateApppointments.col}>

                                    <Body>
                                        <Text style={Sty.getDateApppointments.title}>24 eylül {"\n"} Salı</Text>
                                        <Text style={Sty.getDateApppointments.text}>09:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>10:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>11:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>12:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>13:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>14:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>15:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>16:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>17:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>18:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>19:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>09:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>10:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>11:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>12:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>13:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>14:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>15:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>16:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>17:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>18:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>19:00</Text>
                                    </Body>
                                </Col>
                            </ScrollView>
                            <ScrollView>
                                <Col style={Sty.getDateApppointments.col}>
                                    <Body>
                                        <Text style={Sty.getDateApppointments.title}>25 eylül {"\n"} Çarşamba</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>09:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>10:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>11:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>12:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>13:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>14:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>15:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>16:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>17:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>18:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>19:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>09:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>10:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>11:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>12:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>13:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>14:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>15:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>16:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>17:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>18:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>19:00</Text>

                                    </Body>
                                </Col>
                            </ScrollView>
                            <ScrollView>
                                <Col style={Sty.getDateApppointments.lastCol}>
                                    <Body>
                                        <Text style={Sty.getDateApppointments.title}>26 eylül {"\n"} Perşembe</Text>
                                        <Text style={Sty.getDateApppointments.text}>09:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>10:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>11:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>12:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>13:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>14:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>15:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>16:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>17:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>18:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>19:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>09:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>10:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>11:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>12:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>13:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>14:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>15:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>16:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>17:00</Text>
                                        <Text style={Sty.getDateApppointments.text}>18:00</Text>
                                        <Text style={Sty.getDateApppointments.pickedText}>19:00</Text>

                                    </Body>

                                </Col>
                            </ScrollView>

                        </Grid>

                    </Body>
                </ScrollView>

            </Container>
        );
    }
}
