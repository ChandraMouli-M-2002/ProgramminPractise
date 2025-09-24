const str = "programming";
const duplicate={};

for(let i=0;i<str.length;i++){
    let chart=str[i];
    if(duplicate[chart]){
         duplicate[chart]++;
    }else{
        duplicate[chart]=1;
    }
}

// console.log(duplicate);

for(let abc in duplicate){
    // console.log(abc)
    if(duplicate[abc]>1){
        console.log(abc,"-",duplicate[abc])
    }
}

