let a=[1,2,3];
let b=[4,5,6];

let c=[...a,...b];
console.log(c);

//for objects

let o1={a:1,b:2}
let o2={c:1,d:2}

let o3={...o1,...o2}
console.log(o3)

//q1

let l1=[1,2,4,5];

l2=[...l1.slice(0,2),3,...l1.slice(2,4)];
console.log(l2);

//q2

let ob1={a:1,b:2};
let ob2={c:3}

let ob3={...ob1,...ob2,...ob1,...ob2};
console.log(ob3);


