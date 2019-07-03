import React from "react";
import { StyleSheet, FlatList, AsyncStorage } from "react-native";
import { Container, Content, Text, ListItem } from "native-base";
const routes = [
  { key: "Main" },
  { key: "Links" },
  { key: "Settings" },
  { key: "Log Out" }
];
export default class SideBar extends React.Component {
  render() {
    return (
      <Container style={styles.sidebarContainer}>
        <Content>
          <FlatList
            data={routes}
            renderItem={({ item }) => {
              return (
                <ListItem
                  button
                  onPress={() => {
                    if (item.key === "Log Out") {
                      AsyncStorage.clear();
                      this.props.navigation.navigate("Auth");
                    } else {
                      this.props.navigation.navigate(item.key);
                    }
                  }}
                >
                  <Text>{item.key}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  sidebarContainer: {
    flex: 1,
    marginTop: 50,
    flexDirection: "row",
    alignItems: "flex-start"
  }
});
