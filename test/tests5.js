var chai = require('chai'); 
var expect = chai.expect;
var Add= require('../app.js');

describe('test5', () => {
    it('should throw error', () => {
        expect(()=>{Add("//;\n-13;4;14;7" )}).to.throw("negatives not allowed, [-13]");
        // console.log(Add("//;\n13;4;14;7"));
      });
      it('should throw error', () => {
        expect(()=>{Add("//;\n-13;-4;-14;7" )}).to.throw("negatives not allowed, [-13,-4,-14]");
        // console.log(Add("//;\n13;4;14;7"));
      });
     
  })