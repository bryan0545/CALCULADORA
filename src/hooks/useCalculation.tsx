import {useRef, useState} from 'react';

enum Operators {
  plus,
  minus,
  times,
  divide,
}

export const useCalculation = () => {
  const [lastNumber, setLastNumber] = useState('0');
  const [number, setnumber] = useState('0');
  const lastCalculation = useRef<Operators>();

  const clear = () => {
    setnumber('0');
    setLastNumber('0');
  };

  const changeSymbol = () => {
    if (number.includes('-')) {
      setnumber(number.replace('-', ''));
    } else {
      setnumber('-' + number);
    }
  };

  const addNumber = (newNumber: string) => {
    if (number.includes('.') && newNumber === '.') {
      return;
    }

    if (number.startsWith('0') || number.startsWith('-0')) {
      if (newNumber === '.') {
        setnumber(number + newNumber);
      } else if (newNumber === '0' && number.includes('.')) {
        setnumber(number + newNumber);
      } else if (newNumber !== '0' && !number.includes('.')) {
        setnumber(newNumber);
      } else if (newNumber === '0' && !number.includes('.')) {
        setnumber(number);
      } else {
        setnumber(number + newNumber);
      }
    } else {
      setnumber(number + newNumber);
    }
  };

  const deleteNumber = () => {
    if (number.length > 1) {
      if (number.includes('-') && number.length === 2) {
        setnumber('0');
      } else if (number.includes('-')) {
        setnumber(number.slice(0, -1));
      } else {
        setnumber(number.slice(0, -1));
      }
    } else {
      setnumber('0');
    }
  };

  const changeLastNumber = () => {
    if (number.endsWith('.')) {
      setLastNumber(number.slice(0, -1));
    } else {
      setLastNumber(number);
    }
    setnumber('0');
  };

  const btnPlus = () => {
    changeLastNumber();
    lastCalculation.current = Operators.plus;
  };

  const btnMinus = () => {
    changeLastNumber();
    lastCalculation.current = Operators.minus;
  };

  const btnTimes = () => {
    changeLastNumber();
    lastCalculation.current = Operators.times;
  };

  const btnDivide = () => {
    changeLastNumber();
    lastCalculation.current = Operators.divide;
  };

  const calculation = () => {
    const num1 = Number(number);
    const num2 = Number(lastNumber);

    switch (lastCalculation.current) {
      case Operators.plus:
        setnumber(`${num1 + num2}`);
        break;
      case Operators.minus:
        setnumber(`${num1 - num2}`);
        break;

      case Operators.times:
        setnumber(`${num1 * num2}`);
        break;

      case Operators.divide:
        if (num2 !== 0) {
          setnumber(`${num1 / num2}`);
        } else {
          setLastNumber('Error Div');
        }
        setLastNumber('0');
        break;
    }
  };

  return {
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
  };
};
