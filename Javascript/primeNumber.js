function primeNumber(num){
    if(num < 2) return false;

    for(let i=2;i<num;i++){
        if(num%2===0)return true;
        break;
    }
    return false;
    
}

console.log(primeNumber(7));