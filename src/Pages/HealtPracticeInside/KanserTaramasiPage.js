import React, { Component } from 'react';
import { Image } from 'react-native';
import HeaderScreen from "../HeaderScreen";
import { Container, Content, Button, Text, Form } from 'native-base';
import { Sty } from '../Style';

export default class GenetikCheckupPage extends Component {
    render() {
        return (
            <Container>
                <HeaderScreen
                    //fn={this.props.navigation.openDrawer}
                    headerTitle={"Kanser Taraması"}
                />
                <Content style={Sty.app.healthCardBg}>
                    <Form>
                        <Image
                            style={Sty.checkUp.logo}
                            source={require("../../image/genetik.jpg")}
                        />
                        <Text style={Sty.checkUp.titleText}>Kanserin erken evrede teşhisi, kanser tedavisinin başarısını artırıyor.
                        Kanserin erken teşhisi için kişinin herhangi bir yakınması olmasa dahi rahim ağzı, meme, kalın bağırsak ve
               prostat kanserleri için kanser tarama testleri yaptırması önem taşıyor.</Text>

               <Text style={Sty.checkUp.titleText}></Text>
               <Text style={Sty.checkUp.titleText}></Text>
               <Text style={Sty.checkUp.titleText}></Text>



                      {/* //  <Text style={Sty.checkUp.bottomText}>Genetik Check Up programı 18 yaş üstü bireylere uygulanmaktadır.</Text> */}


                        <Button full >

                            <Text>İlgileniyorum</Text>
                        </Button>


                    </Form>
                </Content>
            </Container>
        );
    }
}