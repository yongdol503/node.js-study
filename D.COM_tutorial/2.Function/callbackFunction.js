const plus=(a,b)=>a+b;

const minus=(a,b)=>a-b;

let p=plus;

console.log(typeof(p));

console.log(plus(11,22));
console.log(p(11,22));

const calculate=(a,b,func)=>func(a,b);

console.log(calculate(11,22,plus));
console.log(calculate(11,22,minus));