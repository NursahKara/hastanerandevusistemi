import React, { Component } from 'react';
import HeaderScreen from "./HeaderScreen";
import { Sty } from "./Style";


import { Container, List, ListItem, Thumbnail, Text, Left, Body, Right, Button,Content } from 'native-base';


import { Dimensions, StyleSheet, View } from 'react-native';


const { width } = Dimensions.get('window');
export default class DoctorCv extends Component {
    render() {
        return (
            <Container style={Sty.app.healthCardBg}>
                <HeaderScreen
                    //fn={this.props.navigation.openDrawer}
                    headerTitle={"Doktor Özgeçmişi"} />

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

                    </ListItem>

                </List>
            
                    <Content style={{backgroundColor:'white', marginVertical:15}}>
                        <View style={{margin:10}}>
                    <Text style={{ color: '#1b448f', marginLeft: 20, fontSize: 18, marginTop: 10,fontWeight:'bold' }}>Özgeçmiş</Text>
                    <Text style={{ color: '#7a7a7a' }}>
                        1996-2000  Trakya Üniversitesi Tıp Fakültesi Radyoloji A.D.    Araştırma Görevlisi {"\n"}
                        2000-2007  PTT Eğitim ve Araştırma Hastanesi  Uzman Doktor{"\n"}
                        2007-2009  Maltepe Üniversitesi Tıp Fakültesi Radyoloji A.D.  Uzman Doktor{"\n"}
                        2009-2012  Maltepe Üniversitesi Tıp Fakültesi Radyoloji A.D.  Yardımcı Doçent Doktor{"\n"}
                        2012-2017  Maltepe Üniversitesi Tıp Fakültesi Radyoloji A.D.  Doçent Doktor{"\n"}
                        2017-Halen Maltepe Üniversitesi Tıp Fakültesi Radyoloji A.D.  Profesör Doktor
                    </Text>
                    <Text style={{ color: '#1b448f', marginLeft: 20, fontSize: 18, marginTop: 10,fontWeight:'bold' }}>Üyelikler</Text>
                    <Text style={{ color: '#7a7a7a' }}>
Türk Radyoloji Derneği {"\n"}European Society of Radiology{"\n"}Türk Manyetik Rezonans Derneği{"\n"}Tıp Bilişimi Derneği{"\n"}Türk Akciğer Kanseri Derneği{"\n"}
European Society of Oncologic Imaging
                    </Text>
                    <Text style={{ color: '#1b448f', marginLeft: 20, fontSize: 18, marginTop: 10,fontWeight:'bold' }}>Yabancı Diller</Text>
                    <Text style={{ color: '#7a7a7a' }}>İngilizce</Text>
                    <Text style={{ color: '#1b448f', marginLeft: 20, fontSize: 18, marginTop: 10,fontWeight:'bold' }}>Yayınlar</Text>
                    <Text style={{ color: '#7a7a7a' }}>
                        Meme Kanserinde dinamik MR özellikleri ile histopatolojik prognostik faktörler arasındaki ilişkinin değerlendirilmesi{"/n"}
                        [Dr.Gül Yüksel - Maltepe Üniversitesi Tıp Fakültesi Radyoloji A.D]{"/n"}
                        (Devam ediyor)</Text></View>
                   </Content>
           

            </Container>
        );
    }
}
