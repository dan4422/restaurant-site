const checkbox = document.querySelector(".register")
const password = document.querySelector(".create-password")
const delivery = document.querySelector(".delivery")
const pu = document.querySelector(".pu")
const de = document.querySelector(".de")
const reqP = document.querySelector(".required-password")
const reqA = document.querySelector(".required-address")
const reqC = document.querySelector(".required-city")
const reqS = document.querySelector(".required-state")

const total = document.querySelector(".total")
let cost = document.querySelectorAll('.cost')
let sum = 0
for (let i = 0; i < cost.length; i++){
    sum += parseInt(cost[i].innerText.slice(1))
}
total.innerText = `$${sum}`

checkbox.addEventListener("change", (e) => {
    if (e.target.checked) {
        password.style = 'display: block'
        reqP.required = true
    } else {
        reqP.required = false
        password.style = 'display: none'
    }
})

pu.addEventListener("change", (e) => {
    if (e.target.checked) {
        reqA.required = false
        reqC.required = false
        reqS.required = false
        delivery.style = 'display: none'
    }
})

de.addEventListener("change", (e) => {
    delivery.style = 'display: block'
    reqA.required = true
    reqC.required = true
    reqS.required = true
})







