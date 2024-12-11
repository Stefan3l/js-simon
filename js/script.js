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



let seconds = 5;
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
let message = "";

btnElm.addEventListener(`click`, function(even) {
    even.preventDefault()
    userNmb.push(Number(numbOneElm.value))
    userNmb.push(Number(numbTwoElm.value))
    userNmb.push(Number(numbThreeElm.value))
    userNmb.push(Number(numbForElm.value))
    userNmb.push(Number(numbFiveElm.value))
   

    for( i = 0; i < userNmb.length; i++) {
       
        if(numbCpuArray.includes(userNmb[i])) {
            result.push(userNmb[i])

        }
        message =`Hai indovinato  ${result.length} numeri! (${result})`
        resultElm.innerHTML = message

    }
    console.log(result.length)
})






