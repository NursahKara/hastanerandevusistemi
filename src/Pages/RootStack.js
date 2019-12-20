//import { createStackNavigator } from 'react-navigation'; // 1.0.0-beta.27
import {createStackNavigator} from 'react-navigation-stack'

import Login from "../Pages/Login";
import MainPage from "../Pages/MainPage";
import ForgotPasswordPage from "../Pages/ForgotPasswordPage";
import CreateAccount from "../Pages/CreateAccount";
import HomePage from '../Pages/HomePage';
import CallPage from "../Pages/CallPage";
import HealthCard from "../Pages/HealthCard";

import FirstAidPage from "../Pages/FirstAidPage";

import OTPChecking from "./OTPChecking";
import GetService from "./GetService";
import GetDoctor from "./GetDoctor";
import GetDateApppointments from "./GetDateApppointments";
import DoctorCV from "./DoctorCv";
import HospitalLocation from "./HospitalLocation";



import HealthPractices from "./HealthPractices";
import Apppointments from "./Apppointments";
import Medicalrecords from "./Medicalrecords";
import AiledeVarolanHastaliklarPage from "./HealthCardInside/AiledeVarolanHastaliklarPage";
//FirstAidInside
import AlerjikReaksiyonPage from "../Pages/FirstAidInside/AlerjikReaksiyonPage";
import FaintingPage from "../Pages/FirstAidInside/FaintingPage";
import SprainPage from "../Pages/FirstAidInside/SprainPage";
import SuffocationPage from "../Pages/FirstAidInside/SuffocationPage";
import LossofConsciousnessPage from "../Pages/FirstAidInside/LossofConsciousnessPage";
//HealthCardInside
import SurgeryPage from '../Pages/HealthCardInside/SurgeryPage'
import MedicinesContinuousPage from "../Pages/HealthCardInside/MedicinesContinuousPage";
import AllergyPage from "../Pages/HealthCardInside/AllergyPage";
import AddSurgeryPage from "../Pages/HealthCardInside/AddSurgeryPage";
import AddMedicinePage from "../Pages/HealthCardInside/AddMedicinePage";
import AddEmergencyContactPage from "../Pages/HealthCardInside/AddEmergencyContactPage";
import illnessesPage from "../Pages/HealthCardInside/illnessesPage";
import AddillnessesPage from "../Pages/HealthCardInside/AddillnessesPage";
import EmergencyCallPage from "../Pages/HealthCardInside/EmergencyCallPage";
import AccountInfo from "../Pages/HealthCardInside/AccountInfo";
//HealthPracticeInside
import CheckupErkekPage from "../Pages/HealtPracticeInside/CheckupErkekPage";
import CheckupKadinPage from "../Pages/HealtPracticeInside/CheckupKadinPage";
import GenetikCheckupPage from "../Pages/HealtPracticeInside/GenetikCheckupPage";
import VucutmrPage from "../Pages/HealtPracticeInside/VucutmrPage";
import KanserTaramasiPage from "../Pages/HealtPracticeInside/KanserTaramasiPage";











const RootStack = createStackNavigator(
    {
        Login: {
            screen: Login,
        },
      
        GetService: {
            screen: GetService,
        },
       ForgotPasswordPage:{
            screen:ForgotPasswordPage
        },
      CreateAccount: {
          screen:CreateAccount
        },
        OTPChecking:{
            screen:OTPChecking
        },
       
        HomePage: {
            screen: HomePage,
        },
        illnessesPage: {
            screen: illnessesPage,
        },
        AddillnessesPage: {
            screen: AddillnessesPage,
        },
        AddSurgeryPage: {
            screen: AddSurgeryPage,
        },
        SurgeryPage: {
            screen: SurgeryPage,
        },
        AddEmergencyContactPage:{
            screen:AddEmergencyContactPage,
        },
        AllergyPage:{
            screen:AllergyPage,
        },

        MedicinesContinuousPage:{
            screen:MedicinesContinuousPage,
        },
        EmergencyCallPage:{
            screen:EmergencyCallPage,
        },
        AddMedicinePage:{
            screen:AddMedicinePage
        },
   
        CallPage: {
            screen: CallPage,
        },
      
        FirstAidPage: {
            screen: FirstAidPage,
        },
        
        AlerjikReaksiyonPage: {
            screen: AlerjikReaksiyonPage,
        },
        HealthCard: {
            screen: HealthCard,
        },
        HealthPractices: {
            screen: HealthPractices,
        },
        Apppointments: {
            screen: Apppointments,
        }, 
        Medicalrecords: {
            screen: Medicalrecords,
        },
        AiledeVarolanHastaliklarPage: {
            screen: AiledeVarolanHastaliklarPage,
        },
     
        CheckupErkekPage: {
            screen: CheckupErkekPage,
        },
        FaintingPage: {
            screen: FaintingPage,
        },
        LossofConsciousnessPage:{
            screen: LossofConsciousnessPage,

        },
        SuffocationPage:{
            screen: SuffocationPage,
        },
        SprainPage:{
            screen: SprainPage,
        },
        CheckupKadinPage:{
            screen: CheckupKadinPage,
        },
        GenetikCheckupPage:{
            screen: GenetikCheckupPage,
        },
        VucutmrPage:{
            screen: VucutmrPage,
        },
        GetDoctor:{
            screen:GetDoctor,

        },
        GetDateApppointments:{
            screen:GetDateApppointments,
        },
        KanserTaramasiPage:{
            screen:KanserTaramasiPage,
        },
        AccountInfo:{
            screen:AccountInfo,
        },
        DoctorCV:{
            screen:DoctorCV,
        },
        MainPage:{
            screen:MainPage,
        },
        HospitalLocation:{
            screen: HospitalLocation,
        }
     



    },
    {
        mode: 'modal',
  //  initialRouteName:'MainPage',
        headerMode: 'none',
    }
);

export default RootStack; 