"use strict";
import { StyleSheet, AsyncStorage, Dimensions } from "react-native";
import { Fonts } from "../utils/fonts";

const { width } = Dimensions.get('window');

var StyleStorage = {
  //HealthCard - HealthCardInside - FirstAid - CallPage -Checkup(hepsi)
  //Pagelerinin Bg'si burada Veriliyor.(healthCardBg)

  app: {

    healthCardBg: {
      backgroundColor: "#f5f5f5"
    },
    InnerIcon: {
      marginStart: 15,
      opacity: 0.5,
    },
    InputStyle: {

      marginTop: 20,
      marginEnd: 15,


      borderTopWidth: 1,
      borderLeftWidth: 1,
      borderRightWidth: 1,
      borderBottomWidth: 1,

      borderColor: 'rgba(0,0,0,0.5)'

    },
    shadow: {
      shadowOffset: { width: 10, height: 10 },
      shadowColor: 'black',
      shadowOpacity: 1,
      elevation: 3,
      backgroundColor: "#0000"
    },

    bottom: {

      flex: 1,
      justifyContent: 'flex-end',
      marginBottom: 36
    },
    Bottombutton: {
      alignItems: "center",
      justifyContent: "center",
      marginEnd: 15,
      marginStart: 15


    },

    container: {
      alignItems: 'center',
      borderColor: "#d6d7da",
      borderWidth: 1.5
    },


    logo: {
      width: 200,
      height: 80,
      marginTop: "20%"
    },
    logout: {
      width: 30,
      height: 30,
      marginRight: "1%",
      marginTop: "2%"
    },
    footer: {
      backgroundColor: "white",
      borderWidth: 0.5
    },
    text: {
      marginTop: "5%",
      marginLeft: "70%",
      fontWeight: "bold"
    },
    view: {
      flex: 1
    }
  },
  //----------------------------- HomePage.js --------------------------------
  homePage: {

    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: 'black',
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.37,
      shadowRadius: 7.49,

      elevation: 12,
      margin: 5
    },
    button: {
      width: 100,
      height: 100,
      alignSelf: "center",
      backgroundColor: "transparent"
    },
    col: {
      backgroundColor: "white",
      marginTop: 65,
      marginHorizontal: 7,
      marginBottom: 7,
      justifyContent: "center",
      alignItems: "center"
    }
  },
 //----------------------------- GetServices.js --------------------------------
 getServices:{

  title: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
},
row: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  height: 56,
  paddingLeft: 25,
  paddingRight: 18,
  alignItems: 'center',
  backgroundColor: '#4975ba',
  marginTop:20
},

parentHr: {
  height: 2,
  color: 'white',
  width: '100%'
},
child: {
  backgroundColor: '#4975ba',
  padding: 16,
  alignItems: 'center'
},
icon: {
  color: 'white'
},
 
childHr: {
  height: 1,
  color: 'white',
  width: '100%'
},
center: {
  alignSelf: 'center',


},


 },
  //---------------------------- Footer ----------------------------------------
  footer: {
    footerTab: {
      backgroundColor: "white"
    },
    icon: {
      color: "black",
      opacity: 0.7
    },
    text: {
      color: "black",
      fontSize: 9
    },
    selectedIcon: {
      color: "blue",

    },
    selectedText: {
      color: "blue",
      fontSize: 9
    },
    button:{
      backgroundColor: '#d9e0e4'
    },
    text:{
    color: '#838080', 
    fontSize: 9 
    }
  },

  //-------------------------- Header and (MyBackButton Comp) --------------------------
  header: {
    image: {
      width: 15,
      height: 15,
      marginLeft: 5
    },
    title: {

      color: '#1F478A',
      fontSize: 18,
      fontWeight: 'bold',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center'


    },
    bgColorShadow: {

      backgroundColor: 'white',
      shadowColor: "#000",

      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,

      elevation: 7
    },

    left: {
      flex: 1
    },
    right: {
      flex: 1
    },
    body: {
      flex: 6
    },

    //MyBackButton Components
    MyBackButtonImage: {
      width: 35,
      height: 25
    }

  },
  //----------------------------------------- WELLCOME.js ------------------------------

  wellcome: {

    container: {
      alignSelf: 'center',
      width: '85%',
      flex: 0,
      flexDirection: 'column',
      justifyContent: 'center',
      marginTop: -30,
      backgroundColor: '#f4f4f4',
      shadowOffset: { width: 20, height: 20 },
      shadowColor: 'black',
      shadowOpacity: 1,
      elevation: 6,




      // alignItems: 'stretch'

    },
    bgColor: {
      backgroundColor: "white"
    },
    left: {
      flex: 1,
    },
    right: {
      flex: 1,
    },
    body: {
      flex: 5,
      justifyContent: 'center',
      alignItems: 'center'

    },
    image: {
      width: 25,
      height: 25
    },

    text: {
      fontSize: 14,
      marginBottom: 0,
      color: '#234789',
      fontStyle: 'italic',
      textAlign: 'left',
      fontWeight: 'bold',
      fontFamily: Fonts.MontSerrat
    },


  },
  //---------------------------------------- Login.js -------------------------------------
  login: {
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',

    },
    inner: {
      marginTop: 100,
      width: '85%',
     // height: '55%',
      backgroundColor: 'white',
      borderColor: 'black',
      borderRadius: 25

    },

    Shadow: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.00,

      elevation: 24,
    },

    ItemCenter: {
      marginVertical:5,
      alignItems: "center",
      justifyContent: "center"
    },

    listItem: {
      borderColor: 'transparent'
    },

    firstItem: {
      marginStart: 20,
      marginEnd: 20,
      marginTop: 20
    },

    item: {
      marginStart: 20,
      marginEnd: 20
    },

    col: {
      marginTop: -5
    },

    textSoft: {
      fontWeight: '100',
      fontSize: 14,

    },


    button: {

      borderRadius: 25,
      backgroundColor: '#283d80',
      marginHorizontal: 30,
    },

    bottomView: {
      borderBottomColor: 'black',
      borderBottomWidth: 0.8,
      margin: 15
    },

    createText: {

      fontSize: 18
    },

    forgotText: {

      fontSize: 12

    },

    /* form: {
         alignItems: "center",
     },
     logoImage: {
         marginTop: "25%",
         width: 300,
         height: 100
     },
 
     rememberMe: {
         flexDirection: "row",
         justifyContent: "center",
         alignItems: "center",
         marginTop: 20,
         marginLeft: 0
     },
     buttonForm: {
         marginTop: 70,
         justifyContent: "center",
         alignSelf: "center"
     },
     button : {
       paddingHorizontal:80
     },
     inputText: {
         marginTop: "25%"
     },
     switch: {
       marginLeft : 20
     },
     loadingView:{
       flex: 1, 
       padding: 20
   }*/
  },

  //----------------------------------------- Medicalrecords.js --------------------------
  medicalRecords: {
    text: {
      fontSize: 12
    }

  },

 


  //------------------------------- ForgotPasswordPage.js -----------------------------
  forgotPass: {
    logoView: {
      alignItems: "center",
      justifyContent: "center",
      paddingTop: 35
    },
    logo: {
      width: 75,
      height: 75
    },
    view: {
      alignItems: "center",
      justifyContent: "center",
      marginTop: 50
    },
    text: {
      opacity: 0.5,
      fontSize: 12
    },

  },
  //-------------------------------- CreateAccount.js ------------------------------
  createAccount: {

    logo: {
      width: 75,
      height: 75
    },
    view: {
      alignItems: "center",
      justifyContent: "center",
      paddingTop: 35
    },
  },
  //---------------------------------- CallPage.js ----------------------------------
  callPage: {
    form: {
      marginTop: '10%'
    },
    button: {
      width: 150,
      height: 150,
      alignSelf: "center",
      backgroundColor:"transparent",
    },
    logo: {
      backgroundColor:"transparent",
      width: 150,
      height: 150
    },
    text: {
      marginTop: '5%',
      fontSize: 17,
      width: '80%',
      alignSelf: "center",
      textAlign: 'center'
    },
  },
  //-------------------------------- Apppointments.js -------------------------------
  apppointments: {
    text: {
      fontSize: 19, color: 'blue',
      fontWeight: 'bold'
    },
    logo: {
      height: 75,
      width: 75,

    },
    button: {
      flexDirection: "row",

      justifyContent: "center",
      backgroundColor: "transparent"
    },
    view: {
      justifyContent: "center",
      alignItems: "center",


    },
    content: {
      marginTop: "30%"
    },
    textIcon: {

      opacity: 0.5,
      fontSize: 24,
      fontWeight: 'bold',
      fontStyle: 'italic',
      color: 'red'

    },

    footerButton: {
      justifyContent: "center",
      alignItems: "center",
      flexDirection: 'column',
      backgroundColor: 'transparent',
      height: 40,
      marginBottom: 2
    }

  },
  //---------------------------------- GetApppointments.js (Bölüm Seçme)
  getApppointments: {
    firstItem: {

      marginLeft: 20,
      marginRight: 20,
      marginTop: 20,

    },
    Item: {

      marginLeft: 20,
      marginRight: 20,


    },
    Input: {
      backgroundColor: "white"
    },
    Icon: {
      opacity: 0.5
    },
    marginTop: {
      marginTop: 20
    },
    list: {
      backgroundColor: "white",

    },
    text: {
      fontSize: 19
    }
  },
  getDateApppointments: {
    title: {
      color: "black",
      fontSize: 16,
      fontWeight: "bold",
      opacity: 0.8,
      textAlign: "center",


    },
    lastCol: {
      backgroundColor: "white",

    },
    col: {
      backgroundColor: "white",
      marginRight: 8,


    },
    text: {
      opacity: 0.4,
      fontSize: 18,
      marginTop: 12,
      textAlign: "center"

    },
    pickedText: {
      fontSize: 18,
      marginTop: 12,
      color: "green",
      textAlign: "center"
    },
    grid: {
      //margin:15,
      width: width,
      textAlign: 'center'

    }

  },
  //------------------------------- Tüm Checkup Sayfaları ------------------------
  checkUp: {
    logo: {
      width: '100%',
      height: 300,
      marginLeft: '2%'
    },
    title: {
      marginLeft: '2%',
      fontSize: 20,
      color: 'black',
      fontWeight: 'bold',
      marginTop: '4%'
    },
    titleText: {
      marginLeft: '4%',
      fontSize: 17,
      color: 'black',
      marginRight: '4%',
      marginTop: '4%'
    },
    questionText: {
      marginLeft: '2%',
      fontSize: 17,
      color: 'black',
      fontWeight: 'bold',
      marginRight: '4%',
      marginTop: '4%'
    },

    text: {
      marginLeft: '4%',
      fontSize: 17,
      color: 'black'
    },
    bottomTextFirst: {
      marginLeft: '4%',
      fontSize: 12,
      color: 'black',
      marginRight: '4%',
      marginTop: '4%'
    },
    bottomText: {
      marginLeft: '4%',
      fontSize: 12,
      color: 'black',
      marginRight: '4%'
    }

  },
  //----------------------------------- FirstAid Tüm Sayfalar ----------------------
  firstAid: {
    logo: {
      width: "100%",
      marginTop: 20
    },
    title: {
      marginLeft: '2%',
      fontSize: 23,
      color: 'blue'
    },
    firstText: {
      marginLeft: '2%',
      fontSize: 20,
      color: 'black'
    },
    text: {
      marginLeft: '4%',
      fontSize: 17,
      color: 'black'
    }
  },
  //------------------------------------- HealthCardInside Tüm Sayfalar -----------
  healthCard: {
    view: {
      marginTop: 30
    },
    logo: {
      height: 75,
      width: 75,
      opacity: 0.5
    },
    form: {
      marginTop: 25
    },
    firstListItem: {
      borderBottomWidth: 2,
      borderTopWidth: 2
    },
    listItem: {
      borderBottomWidth: 2
    },
    left: {
      flex: 1,
      alignItems: "flex-end"
    },
    body: {
      flex: 3,
      alignItems: "center"
    },
    right: {
      flex: 1,
      alignItems: "flex-start"
    },
    text: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#1F478A"
    },

  },
  //--------------------------------- AllergyPage.js ------------------------------
  allergyPage: {
    form: {
      marginTop: 20
    },
    textInput: {
      borderWidth: 0.6,
      marginRight: 5,
      marginLeft: 5
    },
    button: {
      borderRadius: 25,
      marginStart: 30,
      marginEnd: 30,
      marginTop: 30
    }
  },
  // --------------------------- AiledeVarolanHastalıklar.js ------------------
  varOlanHastaliklar: {
    form: {
      marginTop: 5
    },
    item: {
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center'
    },
  },
  // ------------------------------- HealthCardInside Add ile Başlayan Pageler------------
  addPages: {
    item: {
      marginStart: 20,
      marginEnd: 20,
      marginTop: 20
    },
    icon: {
      opacity: 0.5
    },
    button: {
      borderRadius: 25,
      marginStart: 30,
      marginEnd: 30,
      marginTop: 30
    },
    view: {
      flexDirection: 'row'
    }
  },
  //-------------------------------------HomePages Card.js--------------------------------------
  card: {
    view: {
      height: '100%',
      width: '100%',
    },
    content: {
      backgroundColor: '#f4f4f4',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      zIndex: 5
    },
    tOpacity: {
      borderRadius: 50,
      borderWidth: 5,
      borderColor: '#f4f4f4',
      overflow: 'hidden'
    },
    img: {
      width: 92,
      height: 92,
    },
    tView: {
      marginLeft: 10,
      marginRight: 5,
      backgroundColor: 'white',
      justifyContent: 'center',
      height: '50%',
      alignItems: 'center',
      flex: 7
    },
  },

  //---------------------------------- HospitalPageOne.js -----------------------------

  hospitalPageOne: {
    content: {
      backgroundColor: "#f5f5f5"
    },
    image: {
    width: 400,
      height: "30%",
      alignSelf:"center"
      
    },
    text: {
      marginLeft: '2%',
      fontSize: 17
    }
  },

  //--------------------------------------------Item ve DItem-----------------------------------------
  DItem:{
    topText: {
        fontSize: 18,  
        color: 'black',
       
    },
    bottomText:{
      opacity:.6
    },
    rightText:{
      fontSize: 16,  
      color: 'blue',
    fontWeight: 'bold'
    }
  }
}



 
export const Sty = {};
console.log(StyleStorage);
var ss, ts;
for (var key in StyleStorage) {
  if (StyleStorage.hasOwnProperty(key)) {
    ss = StyleStorage[key];
    console.log("processing:  " + key);
    /*
    ts = {};
    for(var subKey in ss) {
        if (ss.hasOwnProperty(subKey))
            console.log("processing:  "+key+"."+subKey);
            StyleSheet.create(ss[subKey]);
            ts[subKey] = StyleSheet.create(ss[subKey]);
    }
    Sty[key] = ts;  
    */
    Sty[key] = StyleSheet.create(ss);
  }
}
console.log(Sty);












