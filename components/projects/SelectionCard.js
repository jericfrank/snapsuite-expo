import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { Card, Text } from 'native-base';
import RNPickerSelect from 'react-native-picker-select';
import CheckBox from 'react-native-check-box';

const styles = StyleSheet.create({
  contentWrapper: {
    padding: 15,
  },
  headTitle: {
    color: '#ffffff',
    paddingBottom: 5
  },
  checkBoxStyle: {
    marginTop: 10,
  },
  rightText: {
    color: '#ffffff'
  }
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 15,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#cecece',
    backgroundColor: '#ffffff',
    color: 'black',
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: '#cecece',
    backgroundColor: '#ffffff',
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

const SelectionCard = ({ title, color, boxColor, options }) => {
  return (
    <Card style={{ ...styles.contentWrapper, backgroundColor: color }}>
      <Text style={ styles.headTitle }>{title}</Text>
      <RNPickerSelect
        items={options}
        value={1}
        onValueChange={value => console.log(value)}
        style={{
          ...pickerSelectStyles,
          iconContainer: {
            top: 15,
            right: 12,
          },
        }}
        useNativeAndroidPickerStyle={false}
        Icon={() => <AntDesign name='caretdown' size={12} color='gray' />}
      />
      <CheckBox
        isChecked
        style={styles.checkBoxStyle}
        checkedCheckBoxColor={boxColor}
        checkBoxColor='#777777'
        onClick={() => {}}
        rightText='Work being done by contractor'
        rightTextStyle={styles.rightText}
      />
      <CheckBox
        style={styles.checkBoxStyle}
        checkedCheckBoxColor={boxColor}
        checkBoxColor='#777777'
        onClick={() => {}}
        rightText='Emergency job'
        rightTextStyle={styles.rightText}
      />
    </Card>
  );
};

export default SelectionCard;