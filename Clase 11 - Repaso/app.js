
const texto = "Hola Mundo"


if (texto) {
    console.log("Verdadero")
} else {
    console.log("Falso")
}

// FALSY
// false, 0, null, "", undefined, NaN


// ITERADORES


for (let i = 0; i < 5; i++) {
    // algo
}

// while (true) {
//     console.log("algo")
// }

const numeros = [1, 2, 3, 4]

for (const num of numeros) {
    console.log(num)
}

numeros.forEach(n => console.log(n))

window.addEventListener('scroll', (e) => {
    console.log(e)
})