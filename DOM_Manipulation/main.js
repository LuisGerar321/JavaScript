const body = document.body

const section = document.querySelector('section')

const title  = document.createElement('h2');
const parag = document.createElement('p');

title.textContent =  "Another test";
parag.textContent = "This is a lorem text with some atributtes to enter to the message!!!!!!";


const divMessage = document.createElement("div");

divMessage.innerHTML =  " <img src =  'https://media4.giphy.com/media/f6hnhHkks8bk4jwjh3/giphy.gif'  >  </img>  "

section.appendChild( title);
section.appendChild ( parag)
section.appendChild(divMessage)

const modify = section.querySelector(".red")
modify.className =  "black"
console.log("this: ",modify);


console.log(section)

