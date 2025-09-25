function reverse(num){
    let rev=0;
    while(num>0){
        let Ldigit=num%10;
        rev=rev*10+Ldigit;
        console.log(num/10);
        num=Math.floor(num/10);
    }
    return rev;
}

console.log(reverse(1234))