function maxinum(arr){
    let max=arr[0];

    // for(let i=0;i<arr.length;i++){
    //     if(arr[i]>max){
    //         max=arr[i]
    //     }
    // }

    for(let num of arr){
        if(num < max){
            max=num;
        }
    }
    return max;
}

console.log(maxinum([10, 25, 3, 99, 42]))