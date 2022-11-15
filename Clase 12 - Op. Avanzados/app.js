

let temperatura = 33
// let mensaje = ''

// if (temperatura >= 22) {
//     mensaje = "Dia caluroso"
// } else {
//     mensaje = "Día fresco"
// }

// op. ternario

// condicion ? caso1 : caso2
// temperatura >= 28 ? mostrarMensaje("Día caluroso") : mostrarMensaje("Día fresco")
// temperatura >= 28
//     ? mostrarMensaje("Día caluroso") 
//     : temperatura >= 16 
//         ? mostrarMensaje("Día agradable")
//         : mostrarMensaje("Día fresco")

const mostrarMensaje = (msg) => {
    console.log(msg)
}

const mensaje = temperatura >= 28 ? 'Día caluroso' : 'Día fresco'

console.log(mensaje)

const usuario = {
    nombre: 'Conrado Lanusse',
    rol: 'Tutor'
}


const permitirAcceso = () => {
    alert("Acceso al sistema concedido")
}

// && AND
// condicion && resultado
usuario.rol === 'Profesor' && permitirAcceso()

const admin = usuario.nombre === 'Conrado Lanusse' && true
// if (usuario.rol === 'Profesor') {
//     permitirAcceso()
// }

// console.log(admin)

// || OR
//  operador1 || operador2
// operador1 !== falsy

const or = null || "Chau mundo"

console.log(or)

const productos = [
    {
        id: 1,
        nombre: 'Producto 1'
    },
    {
        id: 2,
        nombre: 'Producto 2'
    },
    {
        id: 3,
        nombre: 'Producto 3'
    },
    {
        id: 4,
        nombre: 'Producto 4'
    },
    {
        id: 5,
        nombre: 'Producto 5'
    },
    {
        id: 6,
        nombre: 'Producto 6'
    },
]

const buscarProducto = (id) => {
    // const item = productos.find(producto => producto.id === id)
    // if (item) {
    //     return item
    // } else {
    //     return {error: 'Producto no encontrado'}
    // }

    return productos.find(producto => producto.id === id) || {error: 'Producto no encontrado'}
}

// const busqueda = buscarProducto(4)
// const busqueda = {...buscarProducto(4)}
// busqueda.nombre = "AFÑLkdañsk 4"
// console.log(busqueda)
// console.log(productos)


// const tutor = {
//     nombre: 'Matias',
//     edad: 55
// }

// const tutor = {
//     curso: {
//         inicio: 'mañana'
//     }
// }

// console.log( tutor?.curso?.inicio || 'No existe la propiedad')

// DESESTRUCTURACIÓN DE OBJETOS
// DESESTRUCTURACIÓN DE OBJETOS
// DESESTRUCTURACIÓN DE OBJETOS
// DESESTRUCTURACIÓN DE OBJETOS


const estudiante = {
    ch__full__name: 'Ines Diaz',
    edad: 20,
    cursos: {
        dw: 'completado',
        javascript: 'en curso',
        react: 'próximo'
    } 
}

// let nombre = estudiante.nombre
// let edad = estudiante.edad
// let cursos = estudiante.curso

const { ch__full__name: nombre, edad, cursos: { react: rjs } } = estudiante 

// console.log(rjs)

// const container = document.querySelector(`#container`)

// const { nombre, error } = buscarProducto(32)

// container.innerHTML = nombre || error


// window.addEventListener('click', ( {x, y} ) => {
//     // const x = event.x
//     // const y = event.y
//     // const { x, y } = event
//     console.log('X: ', x, 'Y: ', y)
// })

const select = document.querySelector(`#select`)

select.addEventListener('change', ( { target: {value} } ) => {
    // const { target: {value} } = e
    console.log(value)
})


const nombres = ["Juan", "Julieta", "Carlos", "Mariela"]
const masNombres = ["Ines", "Maria", "Agustin", "Martin"]

const estudiantes = [...masNombres, ...nombres]

console.log(estudiantes)

const estudianteObj = {
    ...estudiantes
}

const miObj = {}

estudiantes.forEach((est, i) => {
    miObj["est" + i] = est
})

// console.log(miObj)

// console.log(estudianteObj)

// const [a, b] = nombres
// const [,, a, b] = nombres

// console.log(a, b)

// console.log( nombres )
// console.log( nombres[0], nombres[1], nombres[2], nombres[3] )
// console.log( ...nombres )

const numeros = [10, 4, 8, 2, 9, 0, 1, 11, 6]

// console.log( Math.max(numeros) )
// console.log( Math.max(10, 4, 8, 2, 9, 0, 1, 11, 6) )
// console.log( Math.max(...numeros) )

const estudiante2 = {
    name: 'Ines Diaz',
    edad: 20,
    cursos: {
        dw: 'completado',
        javascript: 'en curso',
        react: 'próximo'
    } 
}

const estudiante3 = {
    ...estudiante2,
    name: 'Nica Britos',
    cumpleanios: 'mañana',
    salario: 500
}

// console.log(estudiante3)

// const sumar = ( a, b, ...num ) => {
//     console.log(a)
//     console.log(b)
//     console.log(num)
// }

// console.log( sumar("hola", "mundo", 20, 4, 6, 8, 19) )

const sumar = (...num) => {
    return num.reduce((acc, n) => acc + n)
}

console.log( sumar(4, 6, 7, 9) )
console.log( sumar(4, 6, 7, 9, 10, 33, -50, -87) )
console.log( sumar(...numeros) )

const listado = (...strings) => {
    let output = ''
    strings.forEach(s => output += s + '\n')

    return output
}

console.log( listado(...estudiantes) )