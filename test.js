// import the function sum from the app.js file
//const { default: test } = require('node:test');
const { sum, euroToUsd, fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test('sum, and euroToUsd', () => {
    expect(euroToUsd(5)).toBe(30)
});

test('converting from dollar to yen', () => {
    expect(fromDollarToYen(10)).toBe(1279)
})

test('converting from euro to dollar', () =>{
    expect(fromEuroToDollar(100)).toBe(120)
})

test('converting from yen to british pound', () =>{
    expect(fromYenToPound(100)).toBe(80)
})
