import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import Boton from '../components/Boton';
import {styles} from '../theme/appTheme';
import {CONSTS} from '../utils/constants';

const CalculadoraScreen = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View style={styles.calculadoraContainer}>
        <Text style={styles.resultadoPequeno}>1,500.000</Text>
        <Text style={styles.resultado}>1,500.000</Text>

        {/* Button row */}
        <View style={styles.filaBotones}>
          <Boton texto="C" color={CONSTS.colors.lightGrey} />
          <Boton texto="+/-" color={CONSTS.colors.lightGrey} />
          <Boton texto="Del" color={CONSTS.colors.lightGrey} />
          <Boton texto="/" color={CONSTS.colors.orange} />
        </View>
        {/* Button row */}
        <View style={styles.filaBotones}>
          <Boton texto="7" />
          <Boton texto="8" />
          <Boton texto="9" />
          <Boton texto="X" color={CONSTS.colors.orange} />
        </View>
        {/* Button row */}
        <View style={styles.filaBotones}>
          <Boton texto="4" />
          <Boton texto="5" />
          <Boton texto="6" />
          <Boton texto="-" color={CONSTS.colors.orange} />
        </View>
        {/* Button row */}
        <View style={styles.filaBotones}>
          <Boton texto="1" />
          <Boton texto="2" />
          <Boton texto="3" />
          <Boton texto="+" color={CONSTS.colors.orange} />
        </View>
        <View style={styles.filaBotones}>
          <Boton texto="0" ancho />
          <Boton texto="." />
          <Boton texto="=" color={CONSTS.colors.orange} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CalculadoraScreen;
