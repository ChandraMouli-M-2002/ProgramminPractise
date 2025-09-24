function finbonacci(num){
    if(num <=0 ) return[]; 
    if(num === 1 ) return[0];
    
    let feb=[0,1];
    for (let i=2;i<=num;i++){
        feb[i]=feb[i-1]+feb[i-2];
    }

    return feb;
}

console.log(finbonacci(10)); 