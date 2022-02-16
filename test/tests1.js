var chai = require('chai'); 
var expect = chai.expect;
var Add= require('../app.js');

//testcase  1
describe('Function tests', () => {
  it('should return zero for empty string', () => {
    expect(Add("[]")).to.equal(0);  
    console.log(Add("[]"));         
});
it('should return zero for empty string', () => {
  expect(Add("0")).to.equal(0);  
  console.log(Add("0"));         
});
  it('should return zero for empty string', () => {
    expect(Add("")).to.equal(0);  
    console.log(Add(""));         
});
  //test case2
  it('should return -1 if it is one number', () => {
    expect(Add("1.001")).to.equal(-1); 
    console.log(Add("1.001"));  
            
    });
    it('should return -1 if it is one number', () => {
      expect(Add("1/5")).to.equal(-1); 
      console.log(Add("1/5"));  
              
      });

    it('should return -1 if it is one number', () => {
      expect(Add("-2")).to.equal(-1); 
       console.log(Add("-2"));  
            
    });
    it('should return -1 if it is one number', () => {
      expect(Add("8")).to.equal(-1); 
       console.log(Add("8"));  
            
    });
    //test case 3
    it('should return sum of numbers', () => {
      expect(Add("2.3,3.5")).to.equal(5.8);
      console.log(Add("2.3,3.5"));
    });
    it('should return sum of numbers', () => {
      expect(Add("-2,3")).to.equal(1);
      console.log(Add("-2,3"));
    });
    it('should return sum of  two numbers', () => {
     expect(Add("1,3")).to.equal(4);
      console.log(Add("1,3"));

});
});