function pageRequirements(firstBook,secondBook,thirdBook) {
    const book1=100
    const book2=200
    const book3=300
const totalPage=book1*firstBook+book2*secondBook+book3*thirdBook
return totalPage
}
const result=pageRequirements(5,7,10)
console.log(result)