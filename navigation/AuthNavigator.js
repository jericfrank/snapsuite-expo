import { createStackNavigator } from "react-navigation";
import MobileAuthScreen from "../screens/MobileAuthScreen";

export default (AuthNavigator = createStackNavigator({
  SignIn: MobileAuthScreen
}));
