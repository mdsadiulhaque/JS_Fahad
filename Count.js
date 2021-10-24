
// const isActive=true;
// const name = 'Fahad';
// if (isActive)
// console.log('Hello');

const array = [0, null, underfined,'', 2, 3];

function countTruthy(array){

    let count =0;
for (let value of array)
if(value)

count++;
return count;


}
