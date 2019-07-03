import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { LinearGradient } from "expo";

export class Header extends Component {
  render() {
    return (
      <LinearGradient
        colors={["rgba(106, 27, 154, 0.9)", "rgba(64, 108, 177, 0.7)"]}
        start={{ x: 0, y: 0 }} // Diagonal greadiant https://medium.com/@chsvk/react-native-gradient-backgrounds-b9f1f14bfe7b
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.headerStyle}>
          <Image
            style={styles.logoStyle}
            source={require("../../assets/images/Snap-suite-hz-white-sm.png")}
          />
          <Text style={styles.headerText}>Welcome Dwain!</Text>
          <Text style={styles.subText}>
            You currently have 5 open work orders
          </Text>
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
  logoStyle: {
    alignSelf: "center"
  },
  headerStyle: {
    marginTop: 0,
    paddingTop: 40,
    paddingBottom: 30,
    paddingRight: 40,
    alignItems: "center"
  }
});
