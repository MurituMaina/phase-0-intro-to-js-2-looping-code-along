// // Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"];
let messages = [];
// function writeCards(names, event){
//   let firstMessage= [];
//   // for(let i =0; i<names.length; i++)
//   for(let name of names) {
//   firstMessage.push(`Thank you, ${name}, for the wonderful ${event} gift!`);
//   }
//  messages =[...firstMessage]
//   console.log(messages);
//   return messages;
// }
// writeCards(names, "surprise")

function writeCards(names, event){
  let m = []
  for(let na of names){
    m.push(`Thank you, ${na}, for the wonderful ${event} gift!`)
  }
  messages=[...m]
  console.log(messages)
  return messages
 }
writeCards(names, "surprise")
// writeCards(names, "surprise")
// writeCards(names, "surprise")

function countDown (){
    let i =0;
    while (i<=10){
        console.log(i++);
    }
}
countDown();