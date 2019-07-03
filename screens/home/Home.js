import React, { Component } from "react";
import { ImageBackground, View, Text, StatusBar } from "react-native";
import { Header } from "../../components/_headers/Header.js";
import { Icons } from "../../components/home/Icons.js";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    StatusBar.setHidden(true);
  }

  render() {
    return (
      <ImageBackground
        source={require("../../assets/images/app-background.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <Header />
        <Icons />
      </ImageBackground>
    );
  }
}
