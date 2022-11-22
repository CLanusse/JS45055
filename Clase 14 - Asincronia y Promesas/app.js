
// t1: 10s, t2: 5s

// modelo sincrónico
// t1 ---> t2 ---> R: 15s

// modelo asincrónico

// t1: -------------> 10s | R: 10s
// t2: ---> 5s            | R: 10s




// setTimeout


// setTimeout(() => {
//     console.log("Hola mundo")
// }, 4000)

// setTimeout(() => {
//     console.log("Buenos días estrellitas")
// }, 2000)

// setTimeout(() => {
//     console.log("Chau mundo")
// }, 500)



// console.log("Inicio de programa") // 1

// setTimeout(() => {
//     console.log("Mitad de programa 3") // 3 (2s)
// }, 0)
// setTimeout(() => {
//     console.log("Mitad de programa 2") // 3 (2s)
// }, 0)
// setTimeout(() => {
//     console.log("Mitad de programa 1") // 3 (2s)
// }, 0)


// console.log("Fin de programa") // 2

// const domCounter = document.querySelector(`#counter`)

// let counter = 10

// const timer = setInterval(() => {
//     if (counter === 0) {
//         domCounter.innerText = '💥'
//         domCounter.style.fontSize = '360px'
//         clearInterval(timer)
//         return
//     }

//     domCounter.innerText = counter + '💣'
//     counter--
// }, 500)



// PROMESAS

// const eventoFuturo = (bool) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (bool) {
//                 resolve('Promesa resuelta')
//             } else {
//                 reject('Promesa rechazada')
//             }
//         }, 2000)
//     })
// }

// // const result = eventoFuturo(false)
// // result.catch()
// // console.log(result)

// eventoFuturo(false)
//     .then( (resp) => {
//         console.log(resp)
//     })
//     .catch( (err) => {
//         console.log(err)
//     })



const productos = [
    {
        id: 1,
        name: 'Producto 1',
        price: 1000
    },
    {
        id: 2,
        name: 'Producto 2',
        price: 2000
    },
    {
        id: 3,
        name: 'Producto 3',
        price: 3000
    },
    {
        id: 4,
        name: 'Producto 4',
        price: 4000
    },
    {
        id: 5,
        name: 'Producto 5',
        price: 5000
    },
]

const btnBuscar = document.querySelector(`#buscar`)
const productosContainer = document.querySelector(`#productos`)
const loader = document.querySelector(`#loader`)

const simularPedirDatos = (id) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            const item = productos.find(el => el.id === id)

            if (item) {
                resolve(item)
            } else {
                reject('No se encontaron productos con ese ID')
            }
        }, 2000)
    } )
}



btnBuscar.addEventListener('click', () => {
    const id = Number(prompt('Ingrese id de producto'))

    loader.style.display = 'flex'
    productosContainer.innerHTML = ''

    simularPedirDatos(id)
        .then((resp) => {
            console.log(resp)
    
            const li = document.createElement('li')
            li.innerHTML = `
                <h4>${resp.name}</h4>
                <p>Precio: $${resp.price}</p>
            `
    
            productosContainer.append(li)
    
        })
        .catch((err) => {
            productosContainer.innerHTML = err
        })
        .finally(() => {
            loader.style.display = 'none'
        })
})


