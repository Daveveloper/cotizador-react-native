import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import colors from '../utils/colors';

export default function Form(props) {
  const {setCapital, setInteres, setPlazo} = props;

  return (
    <View style={styles.viewform}>
      <View style={styles.viewInputs}>
        <TextInput
          placeholder="cantidad"
          keyboardType="numeric"
          style={styles.input}
          onChange={(e) => setCapital(e.nativeEvent.text)}
        />
        <TextInput
          placeholder="% interes"
          keyboardType="numeric"
          style={[styles.input, styles.inputPercentage]}
          onChange={(e) => setInteres(e.nativeEvent.text)}
        />
      </View>
      <View>
        <Text style={styles.text}>Plazo:</Text>
        <RNPickerSelect
          placeholder={{label: 'Elige un plazo'}}
          style={pickerSelectStyles}
          onValueChange={(value) => setPlazo(value)}
          items={[
            {label: '3 meses', value: 3},
            {label: '6 meses', value: 6},
            {label: '12 meses', value: 12},
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewform: {
    position: 'absolute',
    bottom: 35,
    width: '85%',
    paddingHorizontal: 30,
    backgroundColor: colors.PRIMARY_DARK,
    borderRadius: 30,
    height: 180,
    justifyContent: 'center',
  },
  viewInputs: {
    flexDirection: 'row',
  },
  input: {
    backgroundColor: 'white',
    height: 50,
    borderWidth: 1,
    borderColor: colors.PRIMARY,
    borderRadius: 5,
    width: '60%',
    marginRight: 5,
    marginLeft: -5,
    marginBottom: 10,
    color: colors.PRIMARY_DARK,
    paddingHorizontal: 20,
  },
  inputPercentage: {
    width: '40%',
    marginLeft: 2,
  },
  text: {
    color: '#fff',
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: '#fff',
    borderRadius: 8,
    color: 'white',
    paddingRight: 30,
    backgroundColor: '#fff',
  },
});
