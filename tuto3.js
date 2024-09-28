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







