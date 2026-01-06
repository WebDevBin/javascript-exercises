const convertToCelsius = function(degF) {
  const degC = (degF - 32) * (5 / 9);
  return Math.round(degC * 10) / 10;
};

const convertToFahrenheit = function(degC) {
  const degF = (degC * 9 / 5) + 32;
  return Math.round(degF * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
