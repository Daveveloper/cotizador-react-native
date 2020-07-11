import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Resultado({
  errorMessage,
  capital,
  interes,
  plazo,
  resultado,
}) {
  return (
    <View style={styles.content}>
      {resultado && (
        <View style={styles.boxResult}>
          <Text style={styles.title}>Resumen</Text>
          <Value label="Cantidad:" value={`$ ${capital}`} />
          <Value label="Interes:" value={`${interes} %`} />
          <Value label="Plazo:" value={`${plazo} meses`} />
          <Value label="Mensualidad:" value={`$ ${resultado.monthlyFee}`} />
          <Value label="Total a pagar:" value={`$ ${resultado.total}`} />
        </View>
      )}
      <View>
        <Text style={styles.error}>{errorMessage}</Text>
      </View>
    </View>
  );
}

const Value = ({label, value}) => {
  return (
    <View style={styles.value}>
      <Text>{label}</Text>
      <Text style={styles.bold}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    marginTop: 0,
  },
  error: {
    textAlign: 'center',
    color: 'crimson',
    fontWeight: 'bold',
    fontSize: 20,
  },
  boxResult: {
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  value: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
  },
  bold: {
    fontWeight: 'bold',
  },
});
