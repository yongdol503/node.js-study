function sum(a,b){ //함수 선언식
    return a+b;
}

const sum2=function(a,b){ //함수 표현식
    return a+b;
}

console.log(sum(11,22));
console.log(sum2(11,22));

//Arrow Function
const arrow_sum=(a,b)=>a+b;

const arrow_sum2=(a,b)=>{
    const result=a+b;
    return result;
}

const no_param=()=>console.log('no parameter');

const one_param=(a)=>console.log('one parameter :',a);

const one_param2=a=>console.log('one parameter :',a);

console.log(arrow_sum(11,22));
console.log(arrow_sum2(11,22));
console.log(no_param());
console.log(one_param(11));
console.log(one_param2(11));