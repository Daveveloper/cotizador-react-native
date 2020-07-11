import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, SafeAreaView, StatusBar} from 'react-native';
import Form from './src/components/Form';
import colors from './src/utils/colors';
import Footer from './src/components/Footer';
import Resultado from './src/components/Resultado';

export default function App() {
  const [capital, setCapital] = useState(null);
  const [interes, setInteres] = useState(null);
  const [plazo, setPlazo] = useState(null);
  const [resultado, setResultado] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (capital && interes && plazo) {
      onSubmit();
    } else {
      reset();
    }
  }, [capital, interes, plazo]);

  const onSubmit = () => {
    reset();
    if (!capital || !interes || !plazo) {
      setErrorMessage('Debe llenar todos los campos!');
    } else {
      const i = interes / 100;
      const fee = capital / ((1 - Math.pow(i + 1, -plazo)) / i);
      setResultado({
        monthlyFee: fee.toFixed(2).replace('.', ','),
        total: (fee * plazo).toFixed(2).replace('.', ','),
      });
    }
  };

  const reset = () => {
    setErrorMessage('');
    setResultado(null);
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.header}>
        <View style={styles.background} />
        <Text style={styles.title}>COTIZADOR</Text>
        <Form
          setCapital={setCapital}
          setInteres={setInteres}
          setPlazo={setPlazo}
        />
      </SafeAreaView>
      <View>
        <Resultado
          capital={capital}
          interes={interes}
          plazo={plazo}
          resultado={resultado}
          errorMessage={errorMessage}
        />
      </View>
      <View style={styles.footer}>
        <Footer calculate={onSubmit} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 280,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
  background: {
    backgroundColor: colors.PRIMARY,
    height: 200,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'absolute',
    zIndex: -1,
  },
  footer: {
    flex: 1,
  },
});
