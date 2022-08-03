const ftoc = function(temp) {
  let celsius_temp = (5/9)*(temp - 32);
  return ( Number.isInteger(celsius_temp) ? 
    celsius_temp : celsius_temp.toFixed(1))*1;
};

const ctof = function(temp) {
  let farenheight_temp = (9 * temp)/5 + 32;
  return ( Number.isInteger(farenheight_temp) ? 
  farenheight_temp : farenheight_temp.toFixed(1))*1;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
