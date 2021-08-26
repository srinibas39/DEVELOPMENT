let a=[13,20,30,40,55];


function isEven(x){
    return x%2==0;
}

let evenList=a.filter(isEven);
console.log(evenList);