function isLeapYear(year) {
    const calculation1=year%4;
    const calculation2=year%100;
    const calculation3=year%400;

if (calculation3===0 || (calculation1===0 && calculation2!==0)) {
    return console.log("It's a leap year")
} else {
    return console.log("sorry, It is not a leap year")
}
}
isLeapYear(2021)