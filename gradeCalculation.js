function gradingSystem(Number) {
    if (Number>=80) {
        return console.log("Congratulation you have got A+")
    } 
    else if (Number>=70) {
        return console.log("You have got A Grade")
    }
    else if (Number>=60) {
        return console.log("You have got A- Grade")
        
    }
    else if (Number>=50) {
        return console.log("You have got B Grade")

    }
    else if (Number>=40) {
        return console.log("You have got C Grade")

    }
    else if (Number>=33) {
        return console.log("You have got D Grade")

    }
    else{
        return console.log("Sorry you are failed")

    }
}
gradingSystem(90)