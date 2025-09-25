// const str = "programming";
// const str=[1, 2, 2, 3, 1, 4, 2];
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

