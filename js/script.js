// My function

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }


// Elements DOM

const timerElm = document.getElementById(`timer`)
const numbRandomElm = document.getElementById(`numbers`)
const userNumbElm = document.getElementById(`numb-utente`)
const btnElm = document.getElementById(`btn`)
const resultElm = document.getElementById(`risultato`)


let seconds = 5;
let numbCpu = [];



console.log(numbCpu)
const intervalID = setInterval(() => {
   
    if(seconds === 0) {
        clearInterval(intervalID);
        userNumbElm.classList.remove(`d-none`)
        resultElm.classList.remove(`d-none`)
        numbRandomElm.classList.add(`d-none`)
    }
    
    timerElm.innerHTML = seconds

    seconds--;
    console.log(seconds)
}, 1000);

for ( i = 1; i <= 5; i++) {
    const getNumber = getRndInteger(1, 100)
    numbCpu.push(getNumber)   
}

numbRandomElm.innerHTML = numbCpu
