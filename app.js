// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, euroToUsd, fromDollarToYen, fromEuroToDollar, fromYenToPound };

function euroToUsd(euro) {
 
    if (euro < 0){
      console.log("not negative values are allowed")
      return
    }

    return euro * 6
}

console.log(euroToUsd(-1))

function fromDollarToYen(dollar){
  return dollar * 127.9
}

function fromEuroToDollar(euro){
  return euro * 1.2
}

function fromYenToPound(yen){
  return yen * 0.8
}