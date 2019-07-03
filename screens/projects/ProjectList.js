import React, { Component } from "react";
import { ImageBackground, View, Text, StatusBar } from "react-native";
import { ProjectListHeader } from "../../components/projects/ProjectListHeader.js";
import { ProjectListItem } from "../../components/projects/ProjectListItem.js";
import { FlatList } from "react-native-gesture-handler";

export default class ProjectList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    StatusBar.setHidden(true);
  }

  //   _renderItem = ({ item }) => <ProjectList />;

  render() {
    const {navigation} = this.props;
    return (
      <ImageBackground
        source={require("../../assets/images/app-background.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <View>
          <ProjectListHeader />
          <ProjectListItem
            onPressDetails={() => navigation.navigate('ProjectDetails')}
          />
          {/* <FlatList data={["a,b,c,d,e"]} renderItem={this._renderItem} /> */}
        </View>
      </ImageBackground>
    );
  }
}
