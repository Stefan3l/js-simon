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

btnElm.addEventListener(`click`, function(even) {
    even.preventDefault()
    userNmb.push(numbOneElm.value)
    userNmb.push(numbTwoElm.value)
    userNmb.push(numbThreeElm.value)
    userNmb.push(numbForElm.value)
    userNmb.push(numbFiveElm.value)
    console.log(userNmb)

    for( i = 0; i <= userNmb.length; i++) {
        console.log(userNmb[i], numbCpuArray)
        if(numbCpuArray.includes(userNmb[i])) {
            result.push(userNmb[i])
    
            console.log("ciao")
        }
        console.log(result)
    }
})







