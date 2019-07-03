import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Card, Text, View } from 'native-base';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  contentWrapper: {
    padding: 15,
  },
  header: {
    height: 30
  },
  headerDetail: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logButton: {
    fontWeight: 'bold',
    color: '#5d2483'
  },
});

const noteStyles = StyleSheet.create({
  contentWrapper: {
    padding: 10,
    backgroundColor: '#5d2483'
  },
  textDetails: {
    fontSize: 14,
    color: '#ffffff',
  },
  editIcon: {
    color: '#ffffff'
  },
});

const NoteItem = ({ description, date }) => (
  <Card style={noteStyles.contentWrapper}>
    <View style={{ marginBottom: 15  }}>
      <Text style={noteStyles.textDetails}>{description}</Text>
    </View>
    <View style={styles.headerDetail}>
      <Text style={noteStyles.editIcon}>
        <MaterialCommunityIcons name='square-edit-outline' size={18} color='#ffffff' /> EDIT
      </Text>
      <Text style={noteStyles.textDetails}>{date}</Text>
    </View>
  </Card>
);

const InternalNotes = ({ title }) => {
  return (
    <Card style={styles.contentWrapper}>
      <View style={styles.header}>
        <View style={styles.headerDetail}>
          <Text>{title}</Text>
          <Text style={styles.logButton}>
            <AntDesign name='plus' size={18} color='#5d2483' /> ADD NEW NOTE
          </Text>
        </View>
      </View>
      <ScrollView style={{ height: 300 }}>
        {/* item list */}
        <NoteItem description='Note description goes here, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei' date='Oct 29, 2018' />
        <NoteItem description='Note description goes here, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei' date='Oct 29, 2018' />
        <NoteItem description='Note description goes here, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei' date='Oct 29, 2018' />
        <NoteItem description='Note description goes here, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei' date='Oct 29, 2018' />
        <NoteItem description='Note description goes here, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei' date='Oct 29, 2018' />
        <NoteItem description='Note description goes here, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei' date='Oct 29, 2018' />
        <NoteItem description='Note description goes here, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei' date='Oct 29, 2018' />
        <NoteItem description='Note description goes here, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei' date='Oct 29, 2018' />
      </ScrollView>
    </Card>
  );
};

export default InternalNotes;