

const btnDarkMode = document.querySelector('#dark-mode')

let darkMode = localStorage.getItem('darkMode')
// console.log(darkMode)

btnDarkMode.addEventListener('click', () => {
    if (darkMode) {
        document.body.classList.remove('dark')
        btnDarkMode.classList.add('btn-dark')
        darkMode = false
    } else {
        document.body.classList.add('dark')
        btnDarkMode.classList.remove('btn-dark')
        darkMode = true
    }

    localStorage.setItem('darkMode', darkMode)
})

if (darkMode === 'true') {
    document.body.classList.add('dark')
    btnDarkMode.classList.remove('btn-dark')
}

