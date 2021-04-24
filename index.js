// javascript
const chbox = document.querySelectorAll('.options .container .checkbox')
chbox.forEach(function (el) {
    el.addEventListener('change', function () {
        if (el.checked === true) {
            el.parentElement.classList.add('selected')
        } else {
            el.parentElement.classList.remove('selected')
        }
    })
})