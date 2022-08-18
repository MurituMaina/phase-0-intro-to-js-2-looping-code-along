// // Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"];
let messages = [];
function writeCards(names, event){
  let firstMessage= [];
  for(let i =0; i<names.length; i++) {
  firstMessage.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  // console.log(messages.push(firstMessage));
// return messages;
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


 // let i =0;
  // while(i<nameV.length)  { 
  //   // if(i<name.length){
  // messages.unshift( `Thank you, ${name[i]}  for the wonderful,${event} gift! `);
  //   i++;

    // console.log(messages);\
        // }

// writeCards(name,"surprise");
