const Add = function (numbers) {
  let delimeter = ","
  if(numbers.match(/\/\//)){
    const delPrefix = numbers.split("//")[1]
    delimeter = delPrefix[0]
    numbers = delPrefix.substring(1).replace(/\n/,"");
    const regexp = new RegExp(`${delimeter}`)
    numbers = numbers.replace(regexp, delimeter)
    
  }
  if(numbers.match(/\n/)){
    numbers = numbers.replace(/\n/g,",");
    
  }
 let nums=numbers.split(delimeter).filter(i => i.length>0)
 let negatives= []

  nums = nums.map(i=>{
    const val= parseInt(i);
    if(val<0)
    negatives.push(val)
   return val
  });
  if(negatives.length>0)
  throw Error(`negatives not allowed, [${negatives}]`)


if(nums.length ==0){
  return 0;
}
if(nums.length ==1){
  return -1;
}
if (nums.length>1 ){
  let sum = 0;
  for ( let i = 0; i < nums.length; i++){
    sum += nums[i];
  }
  return sum;
}
console.log(nums)
}
  module.exports = Add;

