
const contenedorProductos = document.querySelector(`#contenedor-productos`)
const contenedorCarrito = document.querySelector(`#carrito-contenedor`)
const contadorCarrito = document.querySelector(`#contadorCarrito`)
const contadorPrecioTotal = document.querySelector(`#precioTotal`)

const carrito = []

// stockProductos.forEach((producto) => {
    
//     const div = document.createElement('div')
//     div.className = 'producto'

//     div.innerHTML = `
//             <img src=${producto.img} alt="">
//             <h3>${producto.nombre}</h3>
//             <p>${producto.desc}</p>
//             <p>Talle: ${producto.talle}</p>
//             <p class="precioProducto">Precio: $${producto.precio}</p>
//             <button onclick="agregarAlCarrito(${producto.id})" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
//     `

//     contenedorProductos.append(div)
// })

stockProductos.forEach((producto) => {

    const div = document.createElement('div')
    div.className = 'producto'

    div.innerHTML = `
            <img src=${producto.img} alt="">
            <h3>${producto.nombre}</h3>
            <p>${producto.desc}</p>
            <p>Talle: ${producto.talle}</p>
            <p class="precioProducto">Precio: $${producto.precio}</p>
    `

    const button = document.createElement('button')
    button.className = "boton-agregar"
    button.innerHTML = `Agregar <i class="fas fa-shopping-cart"></i>`

    button.addEventListener('click', () => {
        agregarAlCarrito(producto.id)
    })

    div.append(button)

    contenedorProductos.append(div)
})

// agregar al carrito

const agregarAlCarrito = (id) => {
    const producto = stockProductos.find( (item) => item.id === id )
    carrito.push(producto)

    Swal.fire({
        icon: 'success',
        title: 'Producto agregado al carrito',
        toast: true,
        timer: 1500,
        showConfirmButton: false,
        position: 'bottom-left'
    })
    console.log(carrito)
    renderCarrito()
}




const renderCarrito = () => {
    renderListadoCarrito()
    renderCantidadCarrito()
    renderTotalCarrito()
}

const renderListadoCarrito = () => {
    contenedorCarrito.innerHTML = ''

    carrito.forEach((producto) => {
        const div = document.createElement('div')
        div.className = "productoEnCarrito"
        div.innerHTML = `
            <p>${producto.nombre}</p>
            <p>Precio: $${producto.precio}</p>
            <button class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `
    
        contenedorCarrito.append(div)
    })
}

const renderCantidadCarrito = () => {
    contadorCarrito.innerText = carrito.length
}

const renderTotalCarrito = () => {
    let total = 0

    carrito.forEach((producto) => {
        total += producto.precio
    })

    contadorPrecioTotal.innerText = total
}

// const renderTotalCarrito = () => {
//     contadorPrecioTotal.innerText = carrito.reduce((acc, producto) => acc += producto.precio, 0)
// }


// vaciar carrito
const btnVaciar = document.querySelector(`#vaciarCarrito`)

btnVaciar.addEventListener('click', () => {
    Swal.fire({
        title: 'Está seguro?',
        text: 'Esta acción no es reversible',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, estoy seguro',
        cancelButtonText: 'No, cancelar'
    }).then((result) => {
        
        if (result.isConfirmed) {        
            Swal.fire({
                title: 'Carrito vaciado',
                icon: 'success',
                confirmButtonText: 'Ok',
                timer: 1500
            })

            carrito.length = 0
            renderCarrito()
        }
    })
})