


const usuario = localStorage.getItem('usuario')

const bienvenida = document.querySelector(`#bienvenida`)

bienvenida.innerHTML = `Bienvenido <b>${usuario}</b>`
console.log(usuario)




// const productosJSON = localStorage.getItem('productos')
// const productos = JSON.parse(productosJSON)

// const productos = JSON.parse( localStorage.getItem('productos') )

// console.log(productosJSON)
// console.log(productos)


// for (const producto of productos) {
//     console.log(producto)
// }

// ============================
const estudiantesContainer = document.querySelector(`#estudiantes`)

const estudiantes = JSON.parse( localStorage.getItem('estudiantes') )

console.log(estudiantes)

estudiantes.forEach((est, index) => {
    let status = ''
    if (est.nota >= 7) {
        status = 'En curso'
    } else {
        status = 'Al horno'
    }

    const li = document.createElement('li')
    li.id = "est" + est.id
    li.innerHTML = `
        <h4>${est.nombre}</h4>
        <p>Nota: ${est.nota}</p>
        <p>Estado: ${status}</p>
    `

    const btn = document.createElement('button')
    btn.innerText = 'X'
    btn.addEventListener('click', () => {
        // let index = estudiantes.indexOf(est)
        estudiantes.splice(index, 1)
        
        estudiantesContainer.querySelector('#est' + est.id).remove()
        localStorage.setItem('estudiantes', JSON.stringify(estudiantes))
    })

    li.append(btn)

    estudiantesContainer.append(li)
})

const btnLimpiar = document.querySelector(`#limpiarLista`)

btnLimpiar.addEventListener('click', () => {
    estudiantes.length = 0

    localStorage.setItem('estudiantes', JSON.stringify(estudiantes))
    estudiantesContainer.innerHTML = ''
})