
function myReduce(arr,fun){
    res=arr[0];
    for(let i=1;i<arr.length;i++){
          res= fun(res,arr[i])
    }
    return res;
}

function fun(a,b){
    return a+b;
}
console.log(myReduce([1,2,3,4,5],fun));