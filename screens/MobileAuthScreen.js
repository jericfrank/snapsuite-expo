import React from "react";
import { StyleSheet, Image, AsyncStorage } from "react-native";
import {
  Button,
  Container,
  Content,
  Text,
  Form,
  Toast,
  Item,
  Icon,
  Spinner
} from "native-base";
import PhoneInput from "react-native-phone-input";
import OTPInputView from "@twotalltotems/react-native-otp-input";

export default class MobileAuthScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  BASE_URL = `https://f9808f3a-6aa3-4645-88d8-34599a1f9426.mock.pstmn.io`;

  constructor(props) {
    super(props);

    this.state = {
      phoneValid: false,
      phoneType: "",
      phoneNumber: "",
      phoneShowError: false,
      isLoading: false,
      showOTPInput: false
    };

    this.updateInfo = this.updateInfo.bind(this);
  }

  updateInfo() {
    this.setState({
      phoneValid: this.phone.isValidNumber(),
      phoneType: this.phone.getNumberType(),
      phoneNumber: this.phone.getValue()
    });
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content contentContainerStyle={styles.bodyContainer}>
          <Image
            source={require("../assets/images/icon.png")}
            style={{ width: 60, height: 60, marginBottom: 30, marginTop: -200 }}
          />
          {this.renderInput()}
        </Content>
      </Container>
    );
  }

  renderInput() {
    if (this.state.showOTPInput) {
      return this.renderOTPInput();
    } else {
      return this.renderPhoneNumberInput();
    }
  }

  renderOTPInput() {
    return (
      <React.Fragment>
        <OTPInputView
          style={{ width: "80%", height: 200 }}
          pinCount={4}
          code=""
          autoFocusOnLoad={true}
          // codeInputFieldStyle={styles.borderStyleBase}
          // codeInputHighlightStyle={styles.borderStyleHighLighted}
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled={code => {
            console.log(`Code is ${code}, you are good to go!`);
          }}
        />
        <Button dark full onPress={this._signInAsync}>
          {!this.state.isLoading && <Text>Verify</Text>}
          {this.state.isLoading && <Spinner color="#fff" />}
        </Button>
      </React.Fragment>
    );
  }

  renderPhoneNumberInput() {
    return (
      <React.Fragment>
        <Form style={styles.formStyle}>
          <Text style={styles.textLabel}>Phone Number</Text>
          <Item
            style={styles.inputStyle}
            success={this.state.phoneValid}
            error={this.state.phoneShowError}
          >
            <PhoneInput
              ref={ref => {
                this.phone = ref;
              }}
              onChangePhoneNumber={this._handlePhoneNumberChange}
            />
            {this.state.phoneValid && (
              <Icon name="checkmark-circle" style={{ marginLeft: -20 }} />
            )}
            {this.state.phoneShowError && (
              <Icon name="close-circle" style={{ marginLeft: -20 }} />
            )}
          </Item>
        </Form>
        <Button dark full onPress={this._handleSendOTP}>
          {!this.state.isLoading && <Text>Send OTP</Text>}
          {this.state.isLoading && <Spinner color="#fff" />}
        </Button>
      </React.Fragment>
    );
  }

  _handlePhoneNumberChange = phoneNumber => {
    this.setState({ phoneShowError: false });
    // Don't need to call this for inputs less that 5 digits
    if (phoneNumber.length > 4) {
      this.updateInfo();
    }
  };

  _handleSendOTP = async () => {
    this.setState({ isLoading: true });
    if (this.phone.isValidNumber()) {
      fetch(`${this.BASE_URL}/verify-otp`, {
        method: "POST",
        data: {
          phone: this.state.phoneNumber,
          type: this.state.phoneType
        }
      }).then(resp => {
        console.log(resp.data);
        if (resp.status === 200) {
          Toast.show({
            text: "OTP sent to the given mobile number",
            buttonText: "Okay",
            duration: 3000,
            position: "bottom"
          });
          this.setState({ showOTPInput: true, isLoading: false });
        } else {
          Toast.show({
            text: "Unable to send OTP. Please try again later.",
            buttonText: "Okay",
            duration: 3000,
            type: "danger",
            position: "bottom"
          });
          this.setState({ isLoading: false });
        }
      });
    } else {
      this.setState({ phoneShowError: true, isLoading: false });
    }
  };


  // SignIn Logic, navigate to /screens/home/MainMenu
  _signInAsync = async () => {
    this.setState({ isLoading: true });
    setTimeout(async () => {
      this.setState({ isLoading: false });
      await AsyncStorage.setItem("userToken", "abc");
      this.props.navigation.navigate("Main");
    }, 3000);
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bodyContainer: {
    padding: 10,
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
    justifyContent: "center"
  },
  formStyle: {
    alignSelf: "stretch",
    marginBottom: 30
  },
  textLabel: {
    marginBottom: 10,
    marginHorizontal: 10,
    color: "#444",
    fontSize: 13
  },
  inputStyle: {
    paddingBottom: 5
  },
  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1
  },

  underlineStyleHighLighted: {
    borderColor: "#053c5d"
  }
});
