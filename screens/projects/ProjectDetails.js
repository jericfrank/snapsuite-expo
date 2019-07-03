import React, { Component } from 'react';
import { StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { View } from 'native-base';

import SelectionCard from '../../components/projects/SelectionCard';
import InternalNotes from '../../components/projects/InternalNotes';

const imgSource = require('../../assets/images/app-background.jpg');

const styles = StyleSheet.create({
  imgBackground: {
    width: '100%',
    height: '100%',
  },
  contentWrapper: {
    padding: 15,
  }
});

class ProjectDetails extends Component {
  render() {
    const statusOptions = [
      {
        key: 1,
        label: 'Completed (100%)',
        value: 1,
      },
      {
        key: 2,
        label: 'On going',
        value: 2,
      },
    ];
    const jobOptions = [
      {
        key: 1,
        label: 'Job Type 1',
        value: 1,
      },
      {
        key: 2,
        label: 'Job Type 2',
        value: 2,
      },
    ];
    return (
      <ImageBackground
        source={ imgSource }
        style={ styles.imgBackground }
      >
        <ScrollView>
          <View style={ styles.contentWrapper }>
            <SelectionCard
              title='Status'
              color='#68c374'
              boxColor='#3f7c46'
              options={ statusOptions }
            />
            <SelectionCard
              title='Job Type'
              color='#5d2483'
              boxColor='#ffffff'
              options={ jobOptions }
            />
            <InternalNotes title='Internal Notes' />
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

export default ProjectDetails;