import React, { Component } from "react";
import {
  Image,
  StyleSheet,
  TouchableHighlight,
  View,
  Text
} from "react-native";

const iconPropConfig = {
  newjobs: {
    title: "New Jobs",
    icon: require("../../assets/images/icons/icon_new_jobs.png"),
    bgColor: "#58aff2"
  },
  openjobs: {
    title: "Open Jobs",
    icon: require("../../assets/images/icons/icon_open_jobs.png"),
    bgColor: "#5d2483"
  },
  myschedule: {
    title: "My Schedule",
    icon: require("../../assets/images/icons/icon_myschedule_jobs.png"),
    bgColor: "#41bc51"
  },
  cloedjobs: {
    title: "Closed Jobs",
    icon: require("../../assets/images/icons/icon_closed_jobs.png"),
    bgColor: "#f8a74c"
  }
};

export class IconItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var iconProp = iconPropConfig[this.props.iconName];

    return (
      <TouchableHighlight
        style={[styles.flex_item, { backgroundColor: iconProp.bgColor }]}
        onPress={() => this.props.navigate("ProjectRT")}
      >
        <View>
          <Text style={styles.itemText}> {iconProp.title} </Text>
          <Image style={styles.imageIcon} source={iconProp.icon} />
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  flex_item: {
    margin: 5,
    borderRadius: 5,
    height: 150,
    width: 190,
    padding: 10,
    alignItems: "center"
  },
  itemText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 4
  },
  imageIcon: {
    height: 100,
    width: 100
  }
});
