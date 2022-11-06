/* Variables */

const addBtn = document.querySelector('#add-book')
const form = document.querySelector('.form-container')
const closeOverlay = document.querySelector('#close-overlay')
const submitBtn = document.querySelector('#submit-btn')




/* Form open/close */

addBtn.addEventListener('click', () => form.style.display = 'block')
closeOverlay.addEventListener('click', () => form.style.display = 'none')

/* Main */

let myLibrary = []


/* Getting form values */

const loginForm = document.querySelector("#book-form")
loginForm.addEventListener("submit", handleSubmit)

function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);   /* this form data thing is so nice */
    const newBook = Object.fromEntries(formData.entries())
    myLibrary.push(newBook)
    console.log(myLibrary)
    form.style.display = 'none'
}

