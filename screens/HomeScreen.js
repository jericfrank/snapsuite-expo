import React from "react";
import { Platform, StyleSheet, Image } from "react-native";

import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import * as MailComposer from "expo-mail-composer";
import {
  Container,
  Header,
  Left,
  Icon,
  Right,
  Button,
  Body,
  Content,
  Text,
  ActionSheet,
  Spinner,
  Toast
} from "native-base";

export default class HomeScreen extends React.Component {
  state = {
    hasCameraPermission: null,
    hasCameraRollPermission: null,
    selectedImage: null,
    imagePickerLoading: false,
    uploading: false,
    responseText: "",
    sendEmailLoading: false
  };

  BASE_URL = `https://f9808f3a-6aa3-4645-88d8-34599a1f9426.mock.pstmn.io`;
  ACTION_BUTTONS = ["Open Camera", "Choose from Gallery", "Cancel"];
  CANCEL_INDEX = 2;

  static navigationOptions = {
    header: null
  };

  getOrAskPermissions = async (permissionType, rejectMessage) => {
    let cameraPermission = await Permissions.getAsync(permissionType);
    if (cameraPermission.status !== "granted") {
      cameraPermission = await Permissions.askAsync(permissionType);
      if (cameraPermission.status !== "granted") {
        alert(rejectMessage);
        return false;
      } else {
        return true;
      }
    } else {
      return true;
    }
  };

  componentDidMount = async () => {
    let cameraPermission = await this.getOrAskPermissions(
      Permissions.CAMERA,
      "Sorry! We cannot capture images without Camera Permissions."
    );
    this.setState({ hasCameraPermission: cameraPermission });

    let cameraRollPermission = await this.getOrAskPermissions(
      Permissions.CAMERA_ROLL,
      "Sorry! We cannot select images from Gallery without Camera Roll Permissions."
    );
    this.setState({ hasCameraRollPermission: cameraRollPermission });
  };

  render() {
    return (
      <Container>
        <Header style={styles.headerContainer}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon name="menu" style={styles.menuIcon} />
            </Button>
          </Left>
          <Body>
            <Image
              source={require("../assets/images/white-logo.png")}
              style={
                Platform.OS === "ios"
                  ? { ...{ height: 30, width: 30, marginBottom: 5 } }
                  : {
                      ...{
                        height: 30,
                        width: 30,
                        marginBottom: 5,
                        marginLeft: "auto",
                        marginRight: 15
                      }
                    }
              }
            />
          </Body>
          <Right />
        </Header>
        <Content padder style={styles.bodyContainer}>
          {this.renderContent()}
        </Content>
      </Container>
    );
  }

  renderContent = () => {
    if (this.state.selectedImage) {
      return this.renderSelectedImage();
    } else if (this.state.responseText.length > 1) {
      return this.renderResponseContent();
    } else {
      return this.renderTakePicture();
    }
  };

  renderTakePicture = () => {
    return (
      <React.Fragment>
        <Image
          source={require("../assets/images/pdf-illus.png")}
          style={{
            height: 350,
            width: 350,
            marginBottom: 5,
            alignSelf: "center"
          }}
        />
        <Button
          full
          dark
          style={{ marginTop: 10 }}
          onPress={() => this._handleTakePicture()}
        >
          {!this.state.imagePickerLoading && <Text>Take a Picture</Text>}
          {this.state.imagePickerLoading && <Spinner color="white" />}
        </Button>
      </React.Fragment>
    );
  };

  renderSelectedImage = () => {
    return (
      <React.Fragment>
        <Image
          source={{ uri: this.state.selectedImage.uri }}
          style={{
            height: 500,
            width: 400,
            marginBottom: 5,
            alignSelf: "center"
          }}
        />
        <Button
          full
          dark
          style={{ marginTop: 10 }}
          onPress={this._handleSendImage}
        >
          {!this.state.uploading && <Text>Send</Text>}
          {this.state.uploading && <Text>Sending...</Text>}
        </Button>
      </React.Fragment>
    );
  };

  renderResponseContent = () => {
    return (
      <React.Fragment>
        <Text>{this.state.responseText}</Text>
        <Button
          full
          dark
          style={{ marginTop: 10 }}
          onPress={() => this._handleSendEmail()}
        >
          {!this.state.sendEmailLoading && <Text>Send Email</Text>}
          {this.state.sendEmailLoading && <Spinner color="white" />}
        </Button>
      </React.Fragment>
    );
  };

  _handleSendEmail = () => {
    MailComposer.composeAsync({
      body: this.state.responseText
    });
  };

  _handleActionSheetClicked = async buttonIndex => {
    this.setState({ imagePickerLoading: true });
    try {
      if (buttonIndex === 0) {
        let result = await ImagePicker.launchCameraAsync({
          allowsEditing: false
        });
        this.setState({ imagePickerLoading: false });
        if (!result.cancelled) {
          this.setState({ selectedImage: result });
        }
      } else if (buttonIndex === 1) {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: false
        });
        this.setState({ imagePickerLoading: false });
        if (!result.cancelled) {
          this.setState({ selectedImage: result });
        }
      }
    } catch (error) {
      alert(error);
      this.setState({ imagePickerLoading: false });
    }
  };

  _handleTakePicture = () => {
    ActionSheet.show(
      {
        options: this.ACTION_BUTTONS,
        cancelButtonIndex: this.CANCEL_INDEX,
        title: "Take a picture"
      },
      this._handleActionSheetClicked.bind(this)
    );
  };

  _handleSendImage = async () => {
    this.setState({ uploading: true });
    const result = this.state.selectedImage;
    let localUri = result.uri;
    let filename = localUri.split("/").pop();

    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;
    console.log("TYPE", type);

    let formData = new FormData();
    formData.append("photo", { uri: localUri, name: filename, type });
    //  https://027d3ad9.ngrok.io/api/upload
    fetch(
      `https://snapsuiteai.azurewebsites.net/api/OCR?code=kvxrXU5nZInw5PcH3TzuzYRmizqcaBw/ZZUjjOsk0jzapUzX5lnVUA==`,
      {
        method: "POST",
        body: formData
      }
    )
      .then(resp => {
        this.setState({ selectedImage: null, uploading: false });
        if (resp.status === 200) {
          Toast.show({
            text: "Image Upload Successfully!",
            buttonText: "Okay",
            type: "success",
            duration: 3000
          });
        } else {
          Toast.show({
            text: "Unable to upload image. Please try again later.",
            buttonText: "Okay",
            type: "danger",
            duration: 3000
          });
        }
        return resp.json();
      })
      .then(respJson => {
        console.log(respJson);
        this.setState({
          responseText: respJson.data
        });
      })
      .catch(err => {
        Toast.show({
          text: `Unable to process image. Please try again later: ${err}`,
          buttonText: "Okay",
          type: "danger",
          duration: 3000
        });
      });
  };
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: Platform.OS === "android" ? 20 : 30,
    height: 80,
    backgroundColor: "#053c5d"
  },
  bodyContainer: {
    flexDirection: "column",
    flex: 1
  },
  menuIcon: {
    color: "#fff"
  },
  cameraStyle: {
    flex: 1
  },
  backButtonStyle: {
    marginBottom: 10
  }
});
