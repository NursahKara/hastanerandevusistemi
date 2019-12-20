import React from 'react';
import { createAppContainer } from 'react-navigation'; // 1.0.0-beta.27

import RootStack from "./src/Pages/RootStack"

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}