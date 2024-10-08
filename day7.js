/* CHALLANGE day 7:
Date : october 8 - 2024

pair product

Write a function, pairProduct, that takes in an array and a target product as arguments.
The function should return an array containing a pair of indices whose elements multiply to the given target. 
The indices returned must be unique.

Be sure to return the indices, not the elements themselves.
There is guaranteed to be one such pair whose product is the target. */

const pairProduct = (numbers, targetProduct) => {

    let previousNumbersObj = {};
    
    for(let i = 0; i < numbers.length ; i++){
      const number = numbers[i];
      const complementNumber = targetProduct / number;
      if(complementNumber in previousNumbersObj){
        return [previousNumbersObj[complementNumber],i];
      }else{
        previousNumbersObj[number] = i;
      }
    }
    // todo
  };
  
  module.exports = {
    pairProduct,
  };