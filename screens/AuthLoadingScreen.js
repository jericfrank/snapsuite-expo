import React from "react";
import { AsyncStorage, StyleSheet, Image } from "react-native";
import * as Progress from "react-native-progress";
import { Container, Body, Root } from "native-base";

export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem("ss-userToken");
    this.props.navigation.navigate(true ? "Main" : "Auth");
  };

  render() {
    return (
      <Root style={styles.container}>
        <Container>
          <Body style={styles.bodyContainer}>
            <Image
              source={require("../assets/images/icon.png")}
              style={{ width: 80, height: 80 }}
            />
            <Progress.Bar indeterminate={true} width={200} color="#333" />
          </Body>
        </Container>
      </Root>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bodyContainer: {
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly"
  }
});
