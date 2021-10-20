

console.log( 5 | 2 ); //Bitwise or
console.log( 1 && 2); // bitwise AND

const readpermition=4;
const whitepermition=2;
const exicutepermition=1;

let mypermition = 0;

mypermition= mypermition|readpermition|whitepermition;

console.log(mypermition);

let massage =(mypermition&readpermition)?'yes':'no';

console.log(massage);
