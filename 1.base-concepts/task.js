"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b**2-4*a*c;

  if(discriminant === 0) {
    arr.push(-b / (2*a))
  }

  if(discriminant > 0) {
    arr.push((-b + Math.sqrt(discriminant) )/(2*a), (-b - Math.sqrt(discriminant) )/(2*a)) 
  }

  return arr
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if(isNaN(percent) || isNaN(contribution) || isNaN(amount) ) {
    return false
  }

  let p = percent / 100 / 12;
  let s = amount - contribution;
  let payMonths = s * (p + (p / (((1 + p)**countMonths) - 1)));

  return +(payMonths * countMonths).toFixed(2)

}