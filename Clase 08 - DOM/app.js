
// ========== DOM =======

// console.log( document.body )


// const titulo = document.getElementById('titulo')
// const contenedor = document.getElementById('content')
// const listItems = document.getElementsByClassName('item')


const titulo = document.getElementById('titulo')
const contenido = document.getElementById('content')
const lista = document.getElementById('lista')
const items = document.getElementsByClassName('item')


// const usuario = prompt('Bienvenido, ingrese su nombre por favor.')

// titulo.innerText = 'Bienvenido ' + usuario
titulo.innerText = 'Bienvenido Conrado'

contenido.innerHTML = "<p>Bienvenidos a la clase de <span class='font-gigante'>DOM</span> <br/>hola mundo <b>estrellita</b></p>"

contenido.className = "container my-5"

// contenido.classList.add('p-5')
// contenido.classList.remove('my-5')

// console.log(items)

// for (const item of items) {
//     console.log(item)
//     item.classList.add('bg-item')
// }

Array.from(items).forEach((item, i) => {
    item.classList.add('bg-item-' + i)
})



// CREAR ELEMENTOS
const div = document.createElement('div')
div.classList = "container my-5 text"
div.innerHTML = "<h2>Hola mundo</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, vero culpa? Perspiciatis similique sit non quia numquam! Et unde magnam, minus officiis voluptatum laboriosam ipsum doloribus quae excepturi in iure.</p>"
console.log(div)

contenido.append(div)


// === AGREGAR ELEMENTO A LA LISTA ===

// const nombre = prompt('Ingresá tu nombre')

// const li = document.createElement('li')
// li.className = 'item'
// li.innerText = nombre
// lista.append(li)

const agregarMiembroALaLista = () => {
    const nombre = prompt('Ingresá el nombre')
    const li =document.createElement('li')
    li.classList = 'item'
    li.innerText = nombre

    const lista = document.getElementById('equipo')
    lista.append(li)
}

// for (let i = 1; i <= 3; i++) {
//     agregarMiembroALaLista()
// }


const equipo = ['Conrado', 'Juan Carlos', 'Pepe', 'Steve Jobs', 'Ronnie']

equipo.forEach((miembro, i) => {
    const li =document.createElement('li')
    li.className = 'item'
    li.classList.add('bg-item-' + i)
    li.innerText = miembro

    const lista = document.getElementById('equipo')
    lista.append(li)
})


// contenido.remove()

// document.body.append(contenido)


// const lis = Array.from(document.getElementsByTagName('li'))

// lis.forEach((li) => li.remove())



// =========== ejemplo productos ================

const productos = [
    {
        id: 1,
        nombre: "Producto 1",
        precio: 1500,
        talle: "L",
        img: './img/producto-1.png'
    },
    {
        id: 2,
        nombre: "Producto 2",
        precio: 2500,
        talle: "S",
        img: './img/producto-2.png'
    },
    {
        id: 3,
        nombre: "Producto 3",
        precio: 3500,
        talle: "XS"
    },
    {
        id: 4,
        nombre: "Producto 4",
        precio: 4500,
        talle: "XL"
    },
    {
        id: 5,
        nombre: "Producto 5",
        precio: 5500,
        talle: "L"
    },
    {
        id: 6,
        nombre: "Producto 6",
        precio: 6500,
        talle: "L"
    },
    {
        id: 7,
        nombre: "Producto 7",
        precio: 7500,
        talle: "L"
    },
    {
        id: 8,
        nombre: "Producto 8",
        precio: 8500,
        talle: "L"
    }
]

// console.log(productos)

// const producto1 = {
//     id: 1,
//     nombre: "Producto 1",
//     precio: 1500,
//     talle: "L"
// }


// console.log( document.querySelector('#articulo[data-id="coderhouse"]') )

const containerProductos = document.querySelector('#productos')

productos.forEach((producto) => {
    const div = document.createElement('div')
    div.className = 'producto'
    
    // div.innerHTML = "<h3>"+ producto1.nombre + "</h3><p>Precio: " + producto1.precio + "</p><small>Talle : " + producto1.talle + "</small>"
    
    //template string
    
    div.innerHTML = `
            <img src="https://via.placeholder.com/200"/>
            <h3 class="title-producto">${producto.nombre}</h3>
            <p>Precio: ${producto.precio}</p>
            <small>Talle: ${producto.talle}</small>
            `
    
    containerProductos.append(div)
})

