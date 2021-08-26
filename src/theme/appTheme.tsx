import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  calculadoraContainer: {
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'flex-end',
  },
  fondo: {
    flex: 1,
    backgroundColor: 'black',
  },
  resultado: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
  },
  resultadoPequeno: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 30,
    textAlign: 'right',
  },

  filaBotones: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
});
