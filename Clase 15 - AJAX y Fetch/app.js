
//     protocolo |     dominio  | endpoint | parametros 
// URL : https://www.coderhouse.com/alumnos/

// GET => search : q = 'string' | limit = number
// URL : https://www.coderhouse.com/search


// query params
// URL : https://www.coderhouse.com/search?q=javascript&limit=20


// URL Params
// GET =>  https://www.coderhouse.com/alumnos/{id}/{curso}
// URL : https://www.coderhouse.com/alumnos/133245/javascript




// const url = 'https://jsonplaceholder.typicode.com/posts'

const lista = document.querySelector(`#posts`)

let posts = []

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((resp) => resp.json())
//     .then((data) => {
//         // console.log(data)
//         posts = data

//         posts.forEach((post) => {
//             const li = document.createElement('li')
//             li.innerHTML = `
//                 <h3>${post.title}</h3>
//                 <p>${post.body}</p>
//                 <small>id: ${post.id}</small>
//                 <hr>
//             `
        
//             lista.append(li)
//         })
//     })

// async function pedirPost()
const pedirDatos = async () =>  {
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await resp.json()
    console.log(data)
    
    data.forEach((post) => {
        const li = document.createElement('li')
        li.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <small>id: ${post.id}</small>
            <hr>
        `
    
        lista.append(li)
    })
}

pedirDatos()


// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8'
//     },
//     body: JSON.stringify({
//         title: 'Un título',
//         body: 'Coderhouse blablabla',
//         userId: 13
//     })
// })
//     .then((resp) => resp.json())
//     .then((data) => console.log(data))

const pokeDOM = document.querySelector(`#pokemon`)


// fetch('./data.json')
//     .then((resp) => resp.json())
//     .then((data) => {
//         console.log(data)

//         data.forEach((producto) => {
//             const li = document.createElement('li')
//             li.innerHTML = `    
//                 <h4>${producto.nombre}</h4>
//                 <h4>${producto.precio}</h4>
//                 <hr>
//             `

//             lista.append(li)
//         })
//     })







// fetch('https://pokeapi.co/api/v2/pokemon/440')
//     .then((resp) => resp.json())
//     .then((data) => {
//         console.log(data)
//         const {name, sprites: {front_default, front_shiny}} = data

//         pokeDOM.innerHTML = `
//             <h2>${name}</h2>
//             <img src=${front_shiny || front_default} alt=""/>
//             <img src=${front_default} alt=""/>
//         `
//     })
//     .catch((error) => {
//         console.log(error)
//     })

