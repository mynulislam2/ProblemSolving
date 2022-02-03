function onlyPositive(givenNumber) {
    let storePostiveNum=[]
    for (let i = 0; i < givenNumber.length; i++) {
        const element = givenNumber[i];
if (element>0) {
    storePostiveNum.push(element)
}
else{
    break
}
    }
    return storePostiveNum
}
const Numbers=[1,23,4,354,454,66,-44,6,43,5]
const result=onlyPositive(Numbers)
console.log(result)