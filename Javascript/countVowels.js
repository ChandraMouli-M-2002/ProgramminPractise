function countvowle(str){
    let count=0;
    const vowel="aeiouAEIOU"
    for(let ch of str){
        if(vowel.includes(ch)){
            count++;
        }
    }
    return count;
}


console.log(countvowle('aeidco'))