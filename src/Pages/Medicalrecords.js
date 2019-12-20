import React, { Component } from 'react';
import HeaderScreen from "./HeaderScreen";
import { Container, Content, Header, Tabs, Tab, ScrollableTab } from 'native-base';
import All from "../MedicalrecordsComp/All";
import Examination from "../MedicalrecordsComp/Examination";
import MedicationReport from "../MedicalrecordsComp/MedicationReport";
import Epicrisis from "../MedicalrecordsComp/Epicrisis";
import RestReport from "../MedicalrecordsComp/RestReport";
import Prescription from "../MedicalrecordsComp/Prescription";
import Report from "../MedicalrecordsComp/Report";
import RadiologicalReports from "../MedicalrecordsComp/RadiologicalReports";
import LaboratoryReports from "../MedicalrecordsComp/LaboratoryReports";
export default class MedicalRecords extends Component {
  render() {

    return (
      <Container>
        <HeaderScreen />
        <Tabs renderTabBar={() => <ScrollableTab />}>

          <Tab heading="Tümü">
            <Content>
              <All />
            </Content>
          </Tab>
          <Tab heading="Muayene">
            <Content>
              <Examination />
            </Content>
          </Tab>
            
          <Tab heading="Reçeteler">
            <Content>
              <Prescription/>
            </Content>
          </Tab>
          <Tab heading="Raporlar">
            <Content>
              <Report />
            </Content>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}















