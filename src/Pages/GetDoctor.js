import React, { Component } from 'react';
import HeaderScreen from "./HeaderScreen";
import { Sty } from "./Style";
import { Container, Input, Item, Icon, Text, CardItem, Card, Left, Right, Body, Thumbnail, List, ListItem } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

export default class GetDoctor extends Component {
    render() {
        return (
            <Container style={Sty.app.healthCardBg}>
                <HeaderScreen
                    //fn={this.props.navigation.openDrawer}
                    headerTitle={"Bölüm Doktorları"} />
                <Item style={Sty.getApppointments.firstItem}>
                    <Input style={Sty.getApppointments.Input} placeholder="Doktor Ara">
                        <Icon name="search" style={Sty.getApppointments.Icon}></Icon>
                    </Input>
                </Item>
                <Text style={Sty.getApppointments.firstItem}>Servisler / Doktorlar </Text>
                <ScrollView>
                    <List style={[Sty.getApppointments.list, Sty.getApppointments.marginTop]}>
                        <ListItem thumbnail button onPress={() => { this.props.navigation.navigate('GetDateApppointments') }} >
                            <Left>
                                <Thumbnail square source={{ uri: 'https://istanbulonkoloji.com/Content/UserFiles/doctor/small/alper-ozkan-v3373.jpg' }} />
                            </Left>
                            <Body>
                                <Text style={Sty.getApppointments.text}>Prof.Dr. Nuri TASALI</Text>
                     
                                <Text note numberOfLines={1}>Onkoloji Hst. İstanbul</Text>
                            </Body>
                            <Right>
                                <Icon name="arrow-forward">

                                </Icon>
                            </Right>
                        </ListItem>
                    </List>
                    <List style={Sty.getApppointments.list}>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={{ uri: 'https://istanbulonkoloji.com/Content/UserFiles/doctor/small/nuri-tasali-6l106.jpg' }} />
                            </Left>
                            <Body>
                                <Text style={Sty.getApppointments.text}>
                                    Prof.Dr. Berkay Enes Şencan</Text>
                     
                                <Text note numberOfLines={1}>Onkoloji Hst. İstanbul</Text>
                            </Body>
                            <Right>
                                <Icon name="arrow-forward"></Icon>
                            </Right>
                        </ListItem>
                    </List>
                    <List style={Sty.getApppointments.list}>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={{ uri: 'https://istanbulonkoloji.com/Content/UserFiles/doctor/small/alper-ozkan-v3373.jpg' }} />
                            </Left>
                            <Body>
                                <Text style={Sty.getApppointments.text} >
                                    Prof.Dr. Muhammed Bera  Kutay</Text>

                                <Text note numberOfLines={1}>Onkoloji Hst. İstanbul</Text>
                            </Body>
                            <Right>
                                <Icon name="arrow-forward">
                                </Icon>
                            </Right>
                        </ListItem>
                    </List>
                </ScrollView>
            </Container>
        );
    }
}
