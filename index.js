// // Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"];
let messages = [];
function writeCards(names, event){
  let firstMessage= [];
  for(let i =0; i<names.length; i++) {
  firstMessage.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
 messages =[...firstMessage]
  console.log(messages);
  return messages;
}
writeCards(names, "surprise")

function countDown (){
    let i =0;
    while (i<=10){
        console.log(i++);
    }
}
countDown();