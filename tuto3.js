//CONTROL FLOW TUTORIAL 

//------------- for loops ----------------

//for(let i = 0/* inisialization var*/ ; i < 5/* condition */ ; i++) {

//console.log ('in loop: ', i);

//} // a code block 
//console.log('loop finished');


const list = ['aida' , 'safaa' , 'happy' ];

for (let i = 0 ; i < list.length ; i++) { 
    //METHOD1
    console.log(list[i]);
    //METHOD2
    let html = `<div>${list[i]}</div>`;
    console.log(html);
}

//------------- WHILE loops ----------------
let i = 0;

while(i < list.length) {
    console.log ('name number ' , i , 'is :' , list[i]);
    i++;}
console.log('end');

//------------- DO loops ----------------

do{
    console.log('value number ' , i ,);
    i++;
} while (i < list.length); //return the number of elements in the list

// ---------------- if statements ----------------

const agge = 20;

if (agge > 20){
    console.log("age is over 20");
} else {
    console.log("age is more than 20");
}


const liste = ['a', 'b', 'c'];

if (liste.length == 3){
    console.log( "the elements are " , liste[0] , liste[1] , liste[2]);
}
  

password = 'pass';
if (password.length >= 10) {
    console.log( "the password is longer enough!");
} else if (password.length >= 8) {
    console.log( "this password is in the right length" )
} else {
    console.log( "choose a different password" );

}





