import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { IconItem } from "./IconItem.js";

export class Icons extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.flex_container}>
        <View>
          {/* -- Button #1 */}
          <IconItem iconName="newjobs" />

          {/* -- Button #2 */}
          <IconItem iconName="myschedule" />
        </View>

        <View>
          {/* -- Button #3 */}
          <IconItem iconName="openjobs" />

          {/* -- Button #4 */}
          <IconItem iconName="cloedjobs" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex_container: {
    padding: 5,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  }
});
