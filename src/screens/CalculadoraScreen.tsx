import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import Boton from '../components/Boton';
import {styles} from '../theme/appTheme';
import {CONSTS} from '../utils/constants';
import {useCalculation} from '../hooks/useCalculation';

const CalculadoraScreen = () => {
  const {
    lastNumber,
    number,
    clear,
    changeSymbol,
    deleteNumber,
    btnDivide,
    addNumber,
    btnTimes,
    btnMinus,
    btnPlus,
    calculation,
  } = useCalculation();

  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View style={styles.calculadoraContainer}>
        {lastNumber !== '0' && (
          <Text
            style={styles.resultadoPequeno}
            numberOfLines={1}
            adjustsFontSizeToFit>
            {lastNumber}
          </Text>
        )}

        <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
          {number}
        </Text>

        {/* Button row */}
        <View style={styles.filaBotones}>
          <Boton texto="C" color={CONSTS.colors.lightGrey} action={clear} />
          <Boton
            texto="+/-"
            color={CONSTS.colors.lightGrey}
            action={changeSymbol}
          />
          <Boton
            texto="Del"
            color={CONSTS.colors.lightGrey}
            action={deleteNumber}
          />
          <Boton texto="/" color={CONSTS.colors.orange} action={btnDivide} />
        </View>
        {/* Button row */}
        <View style={styles.filaBotones}>
          <Boton texto="7" action={addNumber} />
          <Boton texto="8" action={addNumber} />
          <Boton texto="9" action={addNumber} />
          <Boton texto="X" color={CONSTS.colors.orange} action={btnTimes} />
        </View>
        {/* Button row */}
        <View style={styles.filaBotones}>
          <Boton texto="4" action={addNumber} />
          <Boton texto="5" action={addNumber} />
          <Boton texto="6" action={addNumber} />
          <Boton texto="-" color={CONSTS.colors.orange} action={btnMinus} />
        </View>
        {/* Button row */}
        <View style={styles.filaBotones}>
          <Boton texto="1" action={addNumber} />
          <Boton texto="2" action={addNumber} />
          <Boton texto="3" action={addNumber} />
          <Boton texto="+" color={CONSTS.colors.orange} action={btnPlus} />
        </View>
        <View style={styles.filaBotones}>
          <Boton texto="0" ancho action={addNumber} />
          <Boton texto="." action={addNumber} />
          <Boton texto="=" color={CONSTS.colors.orange} action={calculation} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CalculadoraScreen;
