import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {CONSTS} from '../utils/constants';

interface IProps {
  texto: string;
  color?: string;
  ancho?: boolean;
  action: (numero: string) => void;
}

const Boton = ({
  texto,
  color = CONSTS.colors.darkGrey,
  ancho = false,
  action,
}: IProps) => {
  return (
    <TouchableOpacity onPress={() => action(texto)}>
      <View
        style={{
          ...styles.boton,
          backgroundColor: color,
          width: ancho ? 180 : 80,
        }}>
        <Text
          style={{
            ...styles.textoBoton,
            color:
              color === CONSTS.colors.darkGrey
                ? CONSTS.colors.white
                : CONSTS.colors.black,
          }}>
          {texto}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Boton;

const styles = StyleSheet.create({
  boton: {
    height: 80,
    backgroundColor: CONSTS.colors.darkGrey,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 8,
  },

  textoBoton: {
    color: CONSTS.colors.white,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '500',
  },
});
