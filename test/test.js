var assert = require('chai').assert;
var spawnSync = require('child_process').spawnSync;
var greeting = require('../printGreeting.js');

describe('check result', function(){
  //testing if importing module works
  "use strict";
  it('should return Hello Jessica', function(){
    var result = greeting.greet('Jessica');
    assert.equal(result, 'Hello Jessica', 'import fails');
  });
  //testing for process argument passing
  it('should call node greeting.js Jessica in terminal and check if stdout is a match', function(){
    var output = spawnSync('node',['greeting.js', 'Jessica']);
    var greetMessage = output.stdout.toString();
    assert.equal(greetMessage, 'Hello Jessica\n','fail to process argument');
  });
});
