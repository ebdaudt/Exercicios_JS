const button = document.getElementById('button');
const output = document.getElementById('output');
let contador = 0

button.addEventListener("click", () => {
    contador++
    output.innerHTML = contador
})

// ------------EX2--------------- //

const input = document.getElementById("input");

input.addEventListener("keypress", (e) => {
    alert("digitou")
})

// ------------EX3----------------------//

const button2 = document.getElementById('button2');

// button2.addEventListener("click", () => {
//     alert("clicou")
// })

// -----------EX4--------------------- //

const img = document.getElementById("img");

img.addEventListener("mouseover", () => {
    alert("Inter");
})
