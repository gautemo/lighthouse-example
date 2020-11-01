const button = document.querySelector('.counter button')
const countEl = document.querySelector('#count')
let count = 0
button.addEventListener('click', () => {
  count++
  countEl.innerHTML = count
})