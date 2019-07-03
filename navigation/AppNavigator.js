import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import DrawerNavigator from "./DrawerNavigator";
import AuthNavigator from "./AuthNavigator";
import AuthLoadingScreen from "../screens/AuthLoadingScreen";

export default createAppContainer(
  createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    Main: DrawerNavigator,
    Auth: AuthNavigator
  })
);
