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
const numbOneElm = document.getElementById(`numb1`)
const numbTwoElm = document.getElementById(`numb2`)
const numbThreeElm = document.getElementById(`numb3`)
const numbForElm = document.getElementById(`numb4`)
const numbFiveElm = document.getElementById(`numb5`)




let seconds = 30;
let numbCpu = "";
let numbCpuArray = []
for ( i = 1; i <= 5; i++) {
    const getNumber = getRndInteger(1, 100)
    numbCpu += "<div class = \"numbers\">" + getNumber.toString() + "</div>"
    numbCpuArray.push(getNumber)
}
numbRandomElm.innerHTML = numbCpu
console.log(numbCpuArray)




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

let userNmb = [];
let result = [];


btnElm.addEventListener(`click`, function(even) {
    even.preventDefault()
    userNmb.push(Number(numbOneElm.value))
    userNmb.push(Number(numbTwoElm.value))
    userNmb.push(Number(numbThreeElm.value))
    userNmb.push(Number(numbForElm.value))
    userNmb.push(Number(numbFiveElm.value))
   

let message;

    for( i = 0; i < userNmb.length; i++) {
        
        if(numbCpuArray.includes(userNmb[i])) {
            result.push(userNmb[i])
            message =`Hai indovinato  ${result.length} numeri! (${result})`
            resultElm.innerHTML = message           
        }  
           
    }    

})








// var duration = 15 * 1000;
// var animationEnd = Date.now() + duration;
// var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

// function randomInRange(min, max) {
// return Math.random() * (max - min) + min;
// }

// var interval = setInterval(function() {
// var timeLeft = animationEnd - Date.now();

// if (timeLeft <= 0) {
//     return clearInterval(interval);
// }

// var particleCount = 50 * (timeLeft / duration);
// // since particles fall down, start a bit higher than random
// confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
// confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
// }, 250);