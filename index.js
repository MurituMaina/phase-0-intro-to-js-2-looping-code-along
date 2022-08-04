// // Code your solutions in this file

const name = [];
const messages =[];
// let re =[];
function writeCards(name,event) {
//   for (let i = 0; i < name.length; i++) 
  let i =0;
  while(i<name.length)
  {
    messages.push( `Thank you, ${name[i++]}  for the wonderful,${event} gift! `);
      }
    console.log(messages);
//     AssertionError: expected undefined to deeply equal [ …(3) ]
// at Context.<anonymous> (test/indexTest.js:17:77)

    // re.push(messages);
    // console.log(re);
}

writeCards(["Guadalupe", "Ollie", "Aki"],"surprise");

function countDown (){
    let i =0;
    while (i<=10){
        console.log(i++);
    }
}
countDown();