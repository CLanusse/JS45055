const lista = document.querySelector(`#lista`)
const form = document.querySelector(`#form`)
const input = document.querySelector(`#input-busqueda`)
const select = document.querySelector(`#type`)

const API_KEY = 'F8OpHcQX4zWWiea6boAd6QRvTtj1ZUc9'

// const buscarImgs = (query, limit, type) => {
//     lista.innerHTML = ''

//     fetch(`https://api.giphy.com/v1/${type}/search?api_key=${API_KEY}&q=${query}&limit=${limit}`)
//         .then((resp) => resp.json())
//         .then((data) => {
//             const { data: images } = data
//             console.log(images)

//             images.forEach((img) => {
//                 const src = img.images.downsized_medium.url

//                 const li = document.createElement('li')
//                 li.className = 'col-5 m-2'
//                 li.innerHTML = `<img src=${src} />`

//                 lista.append(li)
//             })
//         })
// }

const buscarImgsAsync = async (query, limit, type) => {
    lista.innerHTML = ''

    const resp = await fetch(`https://api.giphy.com/v1/${type}/search?api_key=${API_KEY}&q=${query}&limit=${limit}`)
    const data = await resp.json()

    console.log(data)
    const { data: images } = data

    images.forEach((img) => {
        const src = img.images.downsized_medium.url

        const li = document.createElement('li')
        li.className = 'col-5 m-2'
        li.innerHTML = `<img src=${src} />`

        lista.append(li)
    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const query = input.value.trim()
    const limit = document.querySelector('.radio-limit:checked').value
    const type = select.value

    buscarImgsAsync(query, limit, type)
})