function PrimeNumber(n) {
    if(n <= 2 ){
        return console.log(`${n} is a prime number`)
    }
    let res;
     for(let i = 2;i < n;i++){
        res = n%i; 
        if(res===0){
            return console.log(`${n} is not a prime number`)
        }   
    }
    return console.log(`${n} is a prime number`)
  
}

PrimeNumber(31);
PrimeNumber(30);
PrimeNumber(45);
PrimeNumber(15);
PrimeNumber(2);
PrimeNumber(3);


