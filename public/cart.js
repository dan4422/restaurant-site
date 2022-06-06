const total = document.querySelector(".total")
let cost = document.querySelectorAll('.cost')
let sum = 0
for (let i = 0; i < cost.length; i++){
    sum += parseInt(cost[i].innerText.slice(1))
}
total.innerText = `$${sum}`