function fact(num){
    let fac=1;

    for(let i=1;i<=num;i++){
        fac *= i;
    }

    return fac;
}

console.log(fact(5));