const cardNumber = document.getElementById('card-number')
const num = document.getElementById('num-meg')
const form = document.querySelector('.info form')
const btn = document.getElementById('btn')

let string = ['A-Z,a-z']

form.addEventListener('submit', (e) => {
    e.preventDefault()
})


let card = cardNumber.value

btn.onclick = () => {
    if (cardNumber.value === '') {
        cardNumber.style.border = '1px solid red'
        num.textContent = 'incorrect input'
        num.style.color = 'red'
    } else if (cardNumber === string) {
        cardNumber.style.border = '1px solid red'
        num.textContent = 'input number only'
        num.style.color = 'red'
    } else {
        num.textContent = 'correct'
    }
    console.log('am active');
}