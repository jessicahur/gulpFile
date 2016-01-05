var greeting = require('./printGreeting');
if(process.argv.length === 3){
  var output = greeting.greet(process.argv[2]);
  console.log(output);
}

