function myMap(arr,fun){
    let myList=[];
    for(let i=0;i<arr.length;i++){
        myList.push(fun(arr[i])) ;
    }
    return myList;
}

function fun(x){
    return 2*x;
}
let a=[1,2,3,4,5];
console.log(myMap(a,fun));

function myFilter(arr,fun2){
    let myList=[];
    for(let i=0;i<arr.length;i++){
            if(fun2(arr[i])){
                myList.push(arr[i]); 
            }
        
    }
    return myList;
}
function fun2(x){
    return x%2==0;
}
console.log(myFilter(a,fun2));
