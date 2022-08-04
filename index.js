// // Code your solutions in this file

const name = ["Guadalupe", "Ollie", "Aki"];
const messages =[];
function writeCards(name,event) {
  for (let i = 0; i < name.length; i++) {
    let re= `Thank you, ${name[i]}  for the wonderful,${event} gift! `;
    
    messages.push(re);
      }
      console.log(messages);
  return name;
}

writeCards(name,"surprise");


function countDown (){
    let i =0;
    while (i<=10){
        console.log(i++);
    }
}
countDown();