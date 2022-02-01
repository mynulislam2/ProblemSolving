function LargestNum(Number) {
  let LargestNumber=Number[0]
    for (let i = 0; i < Number.length; i++) {
        let element = Number[i];
        if (element>LargestNumber) {
            LargestNumber=element
        }
    }
    return console.log(LargestNumber) 

}
Number=[2,30,60,20,40,50]
LargestNum(Number)
