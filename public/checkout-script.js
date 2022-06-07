const checkbox = document.querySelector(".register")
const password = document.querySelector(".create-password")
const delivery = document.querySelector(".delivery")
const pu = document.querySelector(".pu")
const de = document.querySelector(".de")
const reqP = document.querySelector(".required-password")
const reqA = document.querySelector(".required-address")
const reqC = document.querySelector(".required-city")
const reqS = document.querySelector(".required-state")

checkbox?.addEventListener("change", (e) => {
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







