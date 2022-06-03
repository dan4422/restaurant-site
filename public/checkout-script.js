const checkbox = document.querySelector(".register")
const password = document.querySelector(".create-password")
const delivery = document.querySelector(".delivery")
const pu = document.querySelector(".pu")
const de = document.querySelector(".de")
const req = document.querySelector(".required")

checkbox.addEventListener("change", (e) => {
    if (e.target.checked) {
        password.style = 'display: block'
        req.required = this.checked
    } else {
        password.style = 'display: none'
    }
})

pu.addEventListener("change", (e) => {
    if (e.target.checked) {
        req.required = false
        delivery.style = 'display: none'
        
    }
})

de.addEventListener("change", (e) => {
    delivery.style = 'display: block'
    req.required = true
})

