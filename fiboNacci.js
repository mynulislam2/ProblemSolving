function FiboNacci(Number) {
    if (typeof Number!="number") {
        return "Plese give a number";
}
else if(Number<2){
    return "give greter than 1"
}
    const fiboo=[0,1]
    for (let i = 2; i <=Number; i++) {
    fiboo[i]=fiboo[i-1]+fiboo[i-2]
    }
    return fiboo
}
const result= FiboNacci(1)
console.log(result)


// same problem different way





function fiboNacci(n) {
    if(n == 0) {
        return [0];
    }else if (n == 1) {
        return [0,1];
    }else {
        let fibo = fiboNacci(n - 1);
        let nextFibo = fibo[n - 1] + fibo[n - 2];
        fibo.push(nextFibo);
        return fibo;
    }
}
let result1 = fiboNacci(5);
console.log(result1);
