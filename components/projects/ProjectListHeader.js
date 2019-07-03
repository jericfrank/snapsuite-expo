import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { LinearGradient } from "expo";

export class ProjectListHeader extends Component {
  render() {
    return (
      <LinearGradient
        colors={["rgba(106, 27, 154, 0.9)", "rgba(41, 128, 185, 0.8)"]}
        start={{ x: 0, y: 0 }} // Diagonal greadiant https://medium.com/@chsvk/react-native-gradient-backgrounds-b9f1f14bfe7b
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.headerStyle}>
          <Text style={styles.headerText}>My Jobs (3)</Text>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  headerText: {
    textAlign: "right",
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold"
  },
  subText: {
    fontWeight: "100",
    color: "#FFF"
  },
  headerStyle: {
    marginTop: 0,
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: "center"
  }
});
