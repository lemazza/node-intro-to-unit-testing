const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('buzzer', function() {

  // test the normal case
  it('should should return number, fizz, buzz, or fizzbuzz', function() {

    const normalCases = [
      {num: 8, expected: 8},
      {num: 12, expected: 'fizz'},
      {num: 20, expected: 'buzz'},
      {num: 30, expected: 'fizz-buzz'}
    ];

    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      expect(answer).to.equal(input.expected);
    });
  });

  it('it should return error if not a number', function(){

    const edgeCases = [
      {num: 'hello'},
      {num: '5'},
      {num: false}
    ]

    edgeCases.forEach(function(input) {
      expect(function(){
        fizzBuzzer(input.num);
      }).to.throw(Error);
    });
  });
});