var chai = require('chai'); 
var expect = chai.expect;
var Add= require('../app.js');


//replacing
describe('add', () => {

    it('should return sum replacing with new line', () => {
        expect(Add("1,\n,13" )).to.equal(36);
        console.log(Add("1,\n,13"));
      });
      
    it('should return sum replacing with new line', () => {
        expect(Add("1\n7,2\n3,13" )).to.equal(26);
        console.log(Add("1\n7,2\n3,13"));
      });
      it('should return sum of numbers', () => {
        expect(Add("1\n2 ,13" )).to.equal(16);
        console.log(Add("1\n2 ,13"));
      });
      it('should return sum of numbers replacing \n instead of ,', () => {
        expect(Add("1\n2\n5\n3")).to.equal(11);
        console.log(Add("1\n2\n5\n3"));
      });
      it('should return sum of numbers', () => {
        expect(Add("1\n2\n5\n3,13,8,\n20,1,\n3" )).to.equal(56);
        console.log(Add("1\n2\n5\n3,13,8,\n20,1,\n3"));
      });
  });
  