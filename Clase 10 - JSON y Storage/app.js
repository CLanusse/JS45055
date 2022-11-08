


// localStorage.setItem("profesor", "Conrado Lanusse")
// localStorage.setItem('tutor', 'Matias')
// localStorage.setItem('numero', 45)
// localStorage.setItem('booleano', true)

// const tutor = localStorage.getItem('tutor') 
// const numero = Number( localStorage.getItem('numero') ) 
// const booleano = Boolean( localStorage.getItem('booleano') )
// const pokemon = localStorage.getItem('pokemon') 

// console.log(typeof tutor, tutor)
// console.log(typeof numero, numero)
// console.log(typeof booleano, booleano)




const tituloBienvenida = document.querySelector(`#bienvenida`)
const logoutBtn = document.querySelector(`#logout`)

const checkearUsuario = () => {
    
    let usuarioLS = localStorage.getItem('usuario')
    let usuario = ''

    if (usuarioLS) {
        usuario = usuarioLS
    } else {
        usuario = prompt('Ingrese su nombre')
        localStorage.setItem('usuario', usuario)
    }

    tituloBienvenida.innerHTML = `Bienvenido <b>${usuario}</b>` 
}


checkearUsuario()

logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('usuario')
    checkearUsuario()
})







const myForm = document.querySelector('#my-form')
const inputNombre = myForm.querySelector('input[type=text]')
const inputNota = myForm.querySelector('input[type=number]')


let estudiantes = []

const estudiantesLS = JSON.parse(localStorage.getItem('estudiantes'))

console.log(estudiantesLS)

if (estudiantesLS !== null) {
    estudiantes = estudiantesLS
}

myForm.addEventListener('submit', (event) => {
    event.preventDefault()

    // if (inputNombre.value === '' || inputNota.value === '') {
    //     return
    // }


    const usuario = {
        id: estudiantes.length,
        nombre: inputNombre.value,
        nota: inputNota.value
    }

    estudiantes.push(usuario)
    localStorage.setItem('estudiantes', JSON.stringify(estudiantes))

    console.log(estudiantes)

    myForm.reset()


})


const productos = [
    { id: 1,  producto: "Arroz", precio: 125 },
    {  id: 2,  producto: "Fideo", precio: 70 },
    {  id: 3,  producto: "Pan"  , precio: 50},
    {  id: 4,  producto: "Flan" , precio: 100}
]


// const productosJSON = JSON.stringify(productos)

// console.log(productos)
// console.log(productosJSON)
// console.log(typeof productosJSON)

// localStorage.setItem('productos', productosJSON)

localStorage.setItem('productos', JSON.stringify(productos) )