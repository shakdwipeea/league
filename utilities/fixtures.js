module.exports = function(random) {
  var fixtures = [];
  var even = false,
      odd = false;
  if(random.length % 2 === 0) {
    even = true;
    odd = false;
  } else {
    even = false;
    odd = true;
  }


  if(even) {
    
    
    while(random.length) {
      var number1 = random[Math.floor(Math.random() * random.length)];
      var number2;
      number2 = number1;
      while(number1 === number2)
        number2 = random[Math.floor(Math.random() * random.lengtht )];
      console.log('Here' + random + 'Number1 '+ number1 + 'Number2' + number2);
      random.splice(random.indexOf(number1),1);
      random.splice(random.indexOf(number2),1);
      console.log(random);
      fixtures.push([number1,number2]);
    }
  }
  return fixtures;
}
