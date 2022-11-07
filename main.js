/* Variables */

const addBtn = document.querySelector('#add-book')
const form = document.querySelector('.form-container')
const closeOverlay = document.querySelector('#close-overlay')
const submitBtn = document.querySelector('#submit-btn')
const loginForm = document.querySelector("#book-form")
const main = document.querySelector('main')
const removeCardBtn = document.querySelector('.card-remove')
const preview = document.querySelector('.preview')

let myLibrary = []
let dataCounter = 0
let libCounter = 0

/* Form open/close */

addBtn.addEventListener('click', () => form.style.display = 'block')
closeOverlay.addEventListener('click', () => form.style.display = 'none')

/* Close preview */

removeCardBtn.addEventListener('click', () => preview.remove())


/* Getting form values */

loginForm.addEventListener("submit", handleSubmit)

function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);   /* this form data thing is so nice */
    const newBook = Object.fromEntries(formData.entries())
    myLibrary.push(newBook)
    console.log(myLibrary)
    form.style.display = 'none'
    makeCard()
    console.log('Lib counter on make: ' + libCounter)
    console.log('data counter on make: ' + dataCounter)
}

/* making cards */

function makeCard(){
    let newCard = document.createElement('div')
    newCard.setAttribute('class', 'book-card')
    newCard.setAttribute('data-position', `${dataCounter}` )
    
    let title = document.createElement('div')
    title.setAttribute('class', 'title')
    title.innerHTML = myLibrary[libCounter].title
    newCard.append(title)

    let author = document.createElement('div')
    author.setAttribute('class', 'author')
    author.innerHTML = myLibrary[libCounter].author
    newCard.append(author)
    
    let pages = document.createElement('div')
    pages.setAttribute('class', 'pages')
    pages.innerHTML = myLibrary[libCounter].pages
    newCard.append(pages)
    
    let btn = document.createElement('button')
    btn.innerHTML = '<span class="material-symbols-sharp">delete</span>'
    /* Adding removal functionality as the cards are made */
    btn.addEventListener('click', () =>{
        newCard.remove()
        let rmvValue = newCard.getAttribute('data-position')
        myLibrary.splice(rmvValue, 1)
        console.log(myLibrary)
        libCounter -= 1
        dataCounter -= 1
        console.log('Lib counter on rmv: ' + libCounter)
        console.log('data counter on rmv: ' + dataCounter)
    })
    newCard.append(btn)
    
    main.append(newCard)

    dataCounter += 1
    libCounter += 1
}
