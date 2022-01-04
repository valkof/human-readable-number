module.exports = function toReadable (number) {
  let n = new Array(4).fill(0);
  let a1 = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine '];
  let a_1 = ['', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
  let a2 = ['', 'ten ', 'twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety '];
  let a3 = ['', 'one hundred ', 'two hundred ', 'three hundred ', 'four hundred ', 'five hundred ', 'six hundred ', 'seven hundred ', 'eight hundred ', 'nine hundred '];
  
  let string = String(number);
  for (let i = 1; i <= string.length; i++) {
    n[i] = Number(string[string.length - i]);
  };
  let propis = '';
  
  if ((n[2] * 10 + n[1]) < 20 && (n[2] * 10 + n[1]) > 10) {
    propis = (propis + a3[n[3]] + a_1[n[1]]).trim();
  } else if (number > 0){
    propis = (propis + a3[n[3]] + a2[n[2]] + a1[n[1]]).trim();
  } else propis = 'zero';
  return propis;
}