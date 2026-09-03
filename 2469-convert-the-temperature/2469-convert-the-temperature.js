/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    const kelvin = celsius + 273.15;
    const fahrenhiet = celsius * 1.80 + 32.00
    return [kelvin, fahrenhiet];
};