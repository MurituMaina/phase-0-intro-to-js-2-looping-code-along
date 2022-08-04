// // Code your solutions in this file

const name = [];
const messages =[];
function writeCards(name,event) {
  for (let i = 0; i < name.length; i++) {
    let re= `Thank you, ${name[i]}  for the wonderful,${event} gift! `;
    
    messages.push(re);
      }
      console.log(messages);
}

writeCards(["Guadalupe", "Ollie", "Aki"],"surprise");


function countDown (){
    let i =0;
    while (i<=10){
        console.log(i++);
    }
}
countDown();