import React, { Component } from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button } from "native-base";

const projectItemPropConfig = {
  overduejobs: {
    title: "Overdue",
    bgColor: "#58aff2"
  },
  newjobs: {
    title: "New",
    bgColor: "#5d2483"
  }
};

export class ProjectListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var iconProp = projectItemPropConfig[this.props.iconName];
    const { onPressDetails } = this.props;

    return (
      <View style={styles.flex_ProjectItem}>
        <View style={styles.itemHeader}>
          <Text style={styles.imageIcon}>
            <Icon name="exclamation-circle" size={25} color="#FFFFFF" />
          </Text>
          <Text style={styles.itemHeaderText}>WO23223</Text>
          <Text style={styles.itemHeaderSmallText}> 2 hours ago</Text>
        </View>

        {/* Company Info */}
        <View style={styles.itemContentContainer}>
          <View style={styles.lineSeparator}>
            <Text>
              <Text style={styles.itemCompanyText}>Stples</Text>
              <Text style={styles.itemOverdue}> (Overdue)</Text>
            </Text>
            <Text style={styles.itemText}>550 Pendant Drive, Missauga</Text>
            <Text style={styles.itemText}>ON L5T 2W6</Text>
          </View>

          {/* Job Description */}
          <View>
            <Text style={styles.itemTextBold}>John Smith (Supervisor)</Text>
            <Text style={styles.itemText}>(989) 454-6565</Text>
            <Text style={styles.itemText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
          </View>

          {/* Call to Action*/}
          <View style={styles.itemButtons}>
            <Button primary style={styles.buttonPadding} onPress={ onPressDetails }>
              <Icon name="info" size={25} color="#FFFFFF" />
              <Text style={styles.buttonText}> Details </Text>
            </Button>

            <Button info style={styles.buttonPadding}>
              <Icon name="check" size={25} color="#FFFFFF" />
              <Text style={styles.buttonText}> Accept </Text>
            </Button>

            <Button light style={styles.buttonPadding}>
              <Icon name="phone" size={25} color="#333333" />
              <Text style={styles.buttonTextLight}> Call </Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex_ProjectItem: {
    margin: 15,
    borderRadius: 3,
    backgroundColor: "#FFFFFF"
  },
  itemHeader: {
    backgroundColor: "#f2555c",
    padding: 12,
    width: "100%",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    flexDirection: "row"
  },
  itemHeaderText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    width: 250
  },
  itemHeaderSmallText: {
    color: "#FFFFFF",
    fontSize: 13,
    alignSelf: "flex-end"
  },
  itemContentContainer: {
    padding: 15
  },
  itemCompanyText: {
    color: "#5e2483",
    fontSize: 22,
    marginLeft: -5
  },
  lineSeparator: {
    paddingBottom: 10,
    borderBottomColor: "#cbc7c7",
    borderBottomWidth: 1,
    marginBottom: 10
  },
  itemOverdue: {
    color: "#f2555c",
    fontSize: 16
  },
  buttonPadding: {
    paddingLeft: 10,
    paddingRight: 10
  },
  buttonPaddingLight: {
    paddingLeft: 10,
    paddingRight: 10
  },
  buttonText: {
    color: "#FFFFFF",
    paddingLeft: 5,
    fontSize: 18
  },
  buttonTextLight: {
    color: "#333333",
    paddingLeft: 5,
    fontSize: 18
  },
  itemButtons: {
    flexDirection: "row",
    padding: 5,
    justifyContent: "space-evenly",
    color: "#FFFFFF",
    marginTop: 10
  },
  itemNew: {
    color: "#1ba8e0",
    fontSize: 16
  },
  itemText: {
    color: "#1c1b1b",
    fontSize: 16,
    lineHeight: 23
  },
  itemTextBold: {
    fontWeight: "bold",
    fontSize: 16
  },
  imageIcon: { paddingRight: 5 }
});
