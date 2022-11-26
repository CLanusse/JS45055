

const pokemonContainer = document.querySelector(`#pokemon-container`)
const btnPrev = document.querySelector(`#anterior`)
const btnNext = document.querySelector(`#siguiente`)
const form = document.querySelector(`#buscador`)
const input = document.querySelector(`#nombre`)
const pokeError = document.querySelector(`#pokemon-error`)

// const loading = () => {
//         pokemonContainer.innerHTML = `
//             <small>Cargando...</small>
//         `
// }

const setError = (bool) => {
    if (bool) {
        pokeError.style.display = 'block'
    } else {
        pokeError.style.display = 'none'
    }
}

let pokemonID = 1

const llamarPokemon = (query) => {
    // loading()
    setError(false)

    fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
        .then((resp) => resp.json() )
        .then((data) => {
            const {id, name, sprites: {front_default: img}} = data
            pokemonID = id

            pokemonContainer.innerHTML = `
                <img src=${img} />
                <h2>${name}</h2>
            `
        })
        .catch(() => {
            setError(true)
        })
}

llamarPokemon(pokemonID)

btnNext.addEventListener('click', () => {
    pokemonID++
    llamarPokemon(pokemonID)
})

btnPrev.addEventListener('click', () => {
    if (pokemonID === 1) return

    pokemonID--
    llamarPokemon(pokemonID)
})

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const value = input.value.trim()

    if (value === '') return

    llamarPokemon(value)
})
