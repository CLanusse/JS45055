
// ADD EVENT LISTENER



const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')

const saludar = () => {
    console.log("Buen día estrellitas!")
}
const saludar2 = () => {
    console.log("Hola mundo!")
}

const saludar3 = () => {
    alert("Buen dia estrellitas!")
}

// btn1.addEventListener('click', saludar )
// btn1.addEventListener('click', saludar2 )
// btn1.addEventListener('mouseover', saludar2)

btn1.addEventListener('click', (event) => {
    console.log(event)

    // saludar()
    // saludar2()
})


btn2.onclick = saludar2

btn2.onclick = () => {
    console.log("Click en botón 2")
}
btn2.onmouseover = () => {
    console.log("Hover en botón 2")
}





// MODAL EXAMPLE

const modalOpen = document.querySelector('#modal-open')
const modalClose = document.querySelector('#modal-cerrar')

const modalContainer = document.querySelector('#modal-container')
const modalTitulo = modalContainer.querySelector('h3')

modalOpen.addEventListener('click', () => {
    modalContainer.classList.add('modal-container-active')
    // modalContainer.classList.toggle('modal-container-active')
    // modalContainer.className = "modal-container modal-container-active"
})

modalClose.addEventListener('click', () => {
    modalContainer.classList.remove('modal-container-active')
    // modalContainer.classList.toggle('modal-container-active')
    // modalContainer.className = "modal-container"
})


const abrirModal = (mensaje) => {
    modalTitulo.innerText = mensaje
    modalContainer.classList.add('modal-container-active')
}

// DARK MODE

const btnDarkMode = document.querySelector('#dark-mode')

btnDarkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark')
    btnDarkMode.classList.toggle('btn-dark')
})


// EVENTOS DE FORMULARIO

const myForm = document.querySelector('#my-form')
const inputNombre = myForm.querySelector('input[type=text]')
const inputEmail = myForm.querySelector('input[type=email]')

// inputNombre.addEventListener('keydown', () => {
//     console.log("Teclazo")
// })

inputNombre.addEventListener('input', (event) => {
    // console.log(event)

    if (inputNombre.value.length < 5) {
        inputNombre.classList.add('border-red')
        inputNombre.classList.remove('border-success')
    } else {
        inputNombre.classList.add('border-success')
        inputNombre.classList.remove('border-red')
    }
})

const usuarios = []

myForm.addEventListener('submit', (event) => {
    event.preventDefault()

    if (inputNombre.value === '' || inputEmail.value === '') {
        return
    }

    const usuarioRepetido = usuarios.some((user) => user.email === inputEmail.value)

    if (usuarioRepetido) {
        // alert('Ese mail ya está registrado')
        abrirModal('Ese mail ya está registrado')
        return
    }

    const usuario = {
        nombre: inputNombre.value,
        email: inputEmail.value
    }

    usuarios.push(usuario)

    myForm.reset()

    console.log(usuarios)
})


// ============== form con lsita ===================


const formEstudiantes = document.querySelector('#desaprobados')
const inputEstudiantes = document.querySelector('#desaprobados input[type=text]')
const listadoEstudiantes = document.querySelector('#estudiantes')

formEstudiantes.addEventListener('submit', (event) => {
    event.preventDefault()

    const nombre = inputEstudiantes.value

    if (nombre === '') { return }

    const li = document.createElement('li')
    li.innerText = nombre

    listadoEstudiantes.append(li)
    abrirModal(`Se agregó ${nombre} a la lista`)

    formEstudiantes.reset()
})