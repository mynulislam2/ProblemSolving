// Imagine Jhon invest $5,000 in a savings account at an annula interest reate of 7% for 5 years.
// Now How much money did  Interest He earned
function InterestCalculation(Principle,Rate,Time) {
    const I=Math.round(Principle*Rate*Time);

    return console.log(I)
}
InterestCalculation(5000,0.07,5)