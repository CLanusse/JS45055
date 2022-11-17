
const btn1 = document.querySelector(`#btn`)
const btn2 = document.querySelector(`#btn2`)

btn1.addEventListener('click', () => {

    Swal.fire({
        title: 'Está seguro?',
        text: 'Esta acción no es reversible',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, estoy seguro',
        cancelButtonText: 'No, cancelar'
    }).then((result) => {
        
        if (result.isConfirmed) {
            // eliminar el producto efectivamente
            Swal.fire({
                title: 'Eliminado correctamente',
                icon: 'success',
                confirmButtonText: '=)',
                timer: 1500
            })
        }
    })

    // Swal.fire({
    //     title: 'Hola Mundo!',
    //     text: 'Bienvenidos',
    //     icon: 'question',
    //     confirmButtonText: 'Genial',
    //     position: 'bottom-left',
    //     timer: 2000,
    //     showConfirmButton: false,
        // toast: true
    // })

})

btn2.addEventListener('click', () => {

    Toastify({
        text: 'Soy un toast',
        duration: 25000,
        position: 'left',
        gravity: 'bottom',
        backgroundColor: 'linear-gradient(to right, #00b09b, #96c92d)',
        offset: {
            x: '200px', // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: '200px' // vertical axis - can be a number or a string indicating unity. eg: '2em'
          },
        // destination: 'https://www.coderhouse.com',
        onClick: () => {
            Toastify({
                text: 'Clickeaste un Toast!',
                duration: 1500,
                position: 'right'
            }).showToast()
        }

    }).showToast()
})


// ============== LUXON =========================


const DateTime = luxon.DateTime
const Duration = luxon.Duration
const Interval = luxon.Interval

const dt = DateTime.local(2022, 12, 20, 15, 30)
const now = DateTime.now()

// console.log(now.toLocaleString(DateTime.TIME_24_SIMPLE))
// console.log(now.toLocaleString(DateTime.TIME_24_WITH_LONG_OFFSET))
// console.log(now.toLocaleString(DateTime.DATETIME_FULL))
// console.log(now.day)
// console.log(now.weekday)

const sum = now.plus({days: 40, hours: 60})
const minus = now.minus({days: 25, month: 1})

// console.log(sum.toLocaleString(DateTime.DATETIME_FULL))
// console.log(minus.toLocaleString(DateTime.DATETIME_FULL))

const dur = Duration.fromObject({days: 5, hours: 13, minutes: 30})

// console.log( dur.hours )
// console.log( dur.minutes )

// console.log( now.plus(dur).toLocaleString(DateTime.DATETIME_FULL) )
// console.log( now.minus(dur).toLocaleString(DateTime.DATETIME_FULL) )

const navidad = DateTime.local(2022, 12, 25)

// const cuantoFalta = navidad.diff(now, 'days')
// console.log( cuantoFalta.days )

const intervalo = Interval.fromDateTimes(now, navidad)

console.log( intervalo.length('months') )
console.log( intervalo.length('years') )
console.log( intervalo.length('days') )
