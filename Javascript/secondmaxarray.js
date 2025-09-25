function secondMax(arr){
    FMax=-Infinity; SMax=-Infinity;
    FMin=Infinity; SMin=Infinity;

    for (let num of arr){
        if(num>FMax){
            SMax=FMax;
            FMax=num; 
        }else if(num>SMax && num !== FMax){
            SMax=num;
        }
    }

    for (let num of arr){
        if(num<FMin){
            SMin=FMin;
            FMin=num; 
        }else if(num<SMin && num !== FMin){
            SMin=num;
        }
    }

    return {SMax,SMin};
}

console.log(secondMax([10,5,78,98,1,29]));