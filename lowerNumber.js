function LowerNumber(Number) {
    let checkNumber=Number[0]
    for (let i = 0; i < Number.length; i++) {
        let element = Number[i];
        if (element<checkNumber) {
            checkNumber=element
        }
    }
    return console.log("here is the lowest",checkNumber)
}
const Number=[20,30,100,65,6,7]
LowerNumber(Number)