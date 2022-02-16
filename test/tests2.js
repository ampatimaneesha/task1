var chai = require('chai'); 
var expect = chai.expect;
var Add= require('../app.js');


//testcase with positive numbers
describe('add', () => {
      
    it('should return sum ', () => {
        expect(Add("5.2,7.3,8.1" )).to.equal(20.6);
        console.log(Add("5.2,7.3,8.1"));
      });
      it('should return sum ', () => {
        expect(Add("23,-13" )).to.equal(10);
        console.log(Add("23,-13"));
      });


    
    it('should return sum ', () => {
      expect(Add("1,3,7,2,3,13" )).to.equal(29);
      console.log(Add("1,3,7,2,3,13"));
    });
    it('should return sum of  three numbers', () => {
        expect(Add("1,2,7" )).to.equal(10);
        console.log(Add("1,2,7"));
      });
      it('should return sum of numbers', () => {
        expect(Add("22,48" )).to.equal(70);
        console.log(Add("22,48"));
      });
  });

