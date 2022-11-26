const wrapper = document.querySelector(`#bubble-wrapper`)

const bubbleColors = [
    'rgb(243, 33, 33)',
    'rgb(243, 33, 208)',
    'rgb(166, 33, 243)',
    'rgb(37, 33, 243)',
    'rgb(33, 166, 243)',
    'rgb(33, 243, 233)',
    'rgb(33, 243, 114)',
    'rgb(180, 243, 33)',
    'rgb(243, 205, 33)',
    'rgb(243, 110, 33)'
]

let count = 0

const animateBubble = x => {
    const bubble = document.createElement('div')
    bubble.className = 'bubble'
    bubble.style.left = `${x}px`
    bubble.style.backgroundColor = bubbleColors[count % 10]
    bubble.addEventListener('animationend', () => bubble.remove())
    wrapper.append(bubble)
    count++
}

window.addEventListener('mousemove', e => animateBubble(e.clientX))
