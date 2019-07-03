import React from "react";
import { StyleSheet, Text } from "react-native";
import { Camera, Permissions, ImagePicker } from "expo";
import { Button, View, Icon } from "native-base";

import Layout from "../constants/Layout";

export default class CameraView extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={styles.cameraContainer}>
          <Camera
            style={{
              flexDirection: "row",
              alignItems: "flex-end",
              flex: 1
            }}
            type={this.state.type}
            ref={ref => {
              this.camera = ref;
            }}
          >
            <View
              style={{
                flexDirection: "row",
                flex: 1,
                justifyContent: "space-between",
                backgroundColor: "transparent",
                marginBottom: 15
              }}
            >
              <Button
                rounded
                transparent
                onPress={() => {
                  this.setState({
                    type:
                      this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                  });
                }}
              >
                <Icon name="reverse-camera" style={styles.sideIcon} />
              </Button>

              <Button
                rounded
                transparent
                style={{ marginTop: -15 }}
                onPress={() => {
                  this.setState({
                    type:
                      this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                  });
                }}
              >
                <Icon name="camera" style={styles.cameraIcon} />
              </Button>

              <Button
                rounded
                transparent
                onPress={() => {
                  this.setState({
                    type:
                      this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                  });
                }}
              >
                <Icon name="image" style={styles.sideIcon} />
              </Button>
            </View>
          </Camera>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  cameraContainer: {
    height: Layout.window.height - 150
  },
  cameraIcon: {
    color: "#fff",
    fontSize: 55,
    marginBottom: -12
  },
  sideIcon: {
    color: "#fff",
    fontSize: 25
  }
});
