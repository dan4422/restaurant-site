const checkbox = document.querySelector(".register")
const password = document.querySelector(".create-password")
const delivery = document.querySelector(".delivery")
const pu = document.querySelector(".pu")
const de = document.querySelector(".de")

checkbox.addEventListener("change", (e) => {
    if (e.target.checked) {
        password.style = 'display: block'
    } else {
        password.style = 'display: none'
    }
})

pu.addEventListener("change", (e) => {
    if (e.target.checked) {
        delivery.style = 'display: none'
    }
})

de.addEventListener("change", (e) => {
    delivery.style = 'display: block'
})

