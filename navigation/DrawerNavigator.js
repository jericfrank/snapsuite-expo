import React from "react";
import { createStackNavigator, createDrawerNavigator } from "react-navigation";

import { Button, Text, Icon, Footer, FooterTab } from "native-base";

import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import SettingsScreen from "../screens/SettingsScreen";
import SideBar from "../components/SideBar";
import Home from "../screens/home/Home.js";
import ProjectList from "../screens/projects/ProjectList.js";
import ProjectDetails from "../screens/projects/ProjectDetails";

const HomeStack = createStackNavigator({
  //Home: Home
  Home: {
    screen: ProjectList,
    navigationOptions: {
      header: null
    }
  },
  ProjectDetails: {
    screen: ProjectDetails,
    navigationOptions: {
      header: null
    },
  }
},{
  mode: 'modal',
});

const LinksStack = createStackNavigator({
  Links: LinksScreen
});

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
});

export default createDrawerNavigator(
  {
    Home: HomeStack,
    Links: LinksStack,
    Settings: SettingsStack,
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
