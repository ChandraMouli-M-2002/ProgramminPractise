function bubble(arr){
     for(let i=0;i<arr.length;i++){
        // console.log('outter',arr)
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
            }
            console.log('inner  ',arr)
        }
        
     }
     return arr;
     
}

console.log(bubble([20,5,30, 3, 8, 4, 2,1]));