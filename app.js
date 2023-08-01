// esta es mi función que suma dos números
const sum = (a, b) => {
  return a + b;
};

const fromEuroToDollar = function(valueInEuro) {
  // convertimos el valor a dólares
  let valueInDollar = valueInEuro * 1.2;
  // retornamos el valor
  return valueInDollar;
};

const fromDollarToYen = function(valueInDollar) {
  let valueInYen = valueInDollar * 106.5;
  //
  return valueInYen;
};

const fromYenToPound = function(valueInYen) {
  let valueInPound = valueInYen * 0.008; 
  return valueInPound;
};

module.exports = {
  sum,
  fromEuroToDollar,
  fromDollarToYen,
  fromYenToPound,
};




