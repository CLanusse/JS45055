
// == selectores ==

const productosContainer = document.querySelector('#contenedor-productos')
const carritoContenedor = document.querySelector('#carrito-contenedor')

const contadorCarrito = document.querySelector('#contadorCarrito')
const precioTotal = document.querySelector('#precioTotal')

const btnVaciar = document.getElementById('vaciarCarrito')


const carrito = JSON.parse(localStorage.getItem('carrito')) || []

// generar el DOM de todos los productos
stockProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')

    div.innerHTML = `
                    <img src=${producto.img} alt="">
                    <h3>${producto.nombre}</h3>
                    <p>${producto.desc}</p>
                    <p>Talle: ${producto.talle}</p>
                    ${producto.freeshipping === true ? '<p><strong>Envío gratis</strong></p>' : ''}
                    <p class="precioProducto">Precio: $${producto.precio}</p>
                    <button onclick="agregarAlCarrito(${producto.id})" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
                `

    productosContainer.append(div)
})


// function agregarAlCarrito() {

// }

const agregarAlCarrito = (productId) => {
    // const item = stockProductos.find( (producto) => producto.id === productId)
    // const {id, nombre, precio} = item
    const itemInCart = carrito.find((producto) => producto.id === productId)

    if (itemInCart) {
        itemInCart.cantidad += 1
        showMensaje(itemInCart.nombre)
    } else {
        const {id, nombre, precio} = stockProductos.find( (producto) => producto.id === productId)
    
        const itemToCart = {
            id, 
            nombre, 
            precio, 
            cantidad: 1
        }
        carrito.push(itemToCart)
        showMensaje(nombre)
    }

    localStorage.setItem('carrito', JSON.stringify(carrito))

    console.log(carrito)
    renderCarrito()
    renderCantidad()
    renderTotal()
}

const removerDelCarrito = (id) => {
    const item = carrito.find((producto) => producto.id === id)

    item.cantidad -= 1
    // item.cantidad--

    if (item.cantidad === 0) {
        const indice = carrito.indexOf(item)
        carrito.splice(indice, 1)
    }

    Toastify({
        text: `Se eliminó 1 unidad de ${item.nombre}`,
        position: 'left',
        gravity: 'bottom',
        duration: 5000,
        style: {
            background: "linear-gradient(to right, #f17b5d, #f02f2f)",
          }
    }).showToast()

    localStorage.setItem('carrito', JSON.stringify(carrito))

    renderCarrito()
    renderCantidad()
    renderTotal()
}

const vaciarCarrito = () => {
    carrito.length = 0
    localStorage.setItem('carrito', JSON.stringify(carrito))

    renderCarrito()
    renderCantidad()
    renderTotal()
}


btnVaciar.addEventListener('click', () => {
    Swal.fire({
        title: 'Está seguro?',
        text: "Está a punto de vaciar el carrito",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, vaciar',
        cancelButtonText: 'No, cancelar'
      }).then( (result) => {
            if (result.isConfirmed) {
                vaciarCarrito()
                botonCerrar.click()
                Toastify({
                    text: 'Se vació el carrito',
                    position: 'left',
                    gravity: 'bottom',
                    duration: 5000,
                    style: {
                        background: "linear-gradient(to right, #f17b5d, #f02f2f)",
                      }
                }).showToast()
            }
      } )
})

const renderCarrito = () => {
    carritoContenedor.innerHTML = ''

    carrito.forEach((item) => {
        const div = document.createElement('div')
        div.classList.add('productoEnCarrito')

        div.innerHTML = `
                    <p>${item.nombre}</p>
                    <p>Cantidad: ${item.cantidad}</p>
                    <p>Precio unitario: $${item.precio}</p>
                    <button onclick="removerDelCarrito(${item.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
                    `
        
        carritoContenedor.append(div)
    })
}

const renderCantidad = () => {
    contadorCarrito.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
}

const renderTotal = () => {
    let total = 0
    carrito.forEach((producto) => {
        total += producto.precio * producto.cantidad
    })

    precioTotal.innerText = total
}

const showMensaje = (nombre) => {
    Toastify({
        text: `Se agregó 1 unidad de ${nombre} al carrito!`,
        duration: 3000,
        gravity: 'bottom',
        position: 'left',
        onClick: () => {
            botonAbrir.click()
        },
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          }
    }).showToast()
}

renderCarrito()
renderCantidad()
renderTotal()