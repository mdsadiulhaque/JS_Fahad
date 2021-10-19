
//logical AND(&&)
//return ture if both operaands are true
console.log(true&&true);

console.log(false&&true);




let highincome=true;
let goodincome = true;
let eligiableForLone = highincome && goodincome;

console.log(eligiableForLone);

//logical or(||)
//Return TRUE if one of the operands is TRUE

let highincome1=true;
let goodincome2 = true;
let eligiableForLone1 = highincome || goodincome;

console.log(eligiableForLone1);



let highincome3=false;
let goodincome4 = true;
let eligiableForLone2 = highincome || goodincome;

console.log(eligiableForLone2);

// Not(!)

let applicationrefuze = ! eligiableForLone2;

console.log('applicationrefuze ::',applicationrefuze);

