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
let result = fiboNacci(12);
console.log(result);