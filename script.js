
let myLibrary = [{title:'The Hobbit', author: 'J.R.R Tolken', pageCount: 263, readStatus: false },{title:'Airplane', author: 'A320', pageCount: 777, readStatus: false }];

function Book(title, author, pageCount, readStatus) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.readStatus = readStatus;
};

function addBookToLibrary(book, array) {
    array.push(book);
};

// DOM
const libraryContainer = document.querySelector('#library-container');

// CREATES A BOOK CARD
function createBookCard(book) {
    const bookContainer = document.createElement('div');
    const bookTitle = document.createElement('h2');
    const bookAuthor = document.createElement('p');
    const pageCount = document.createElement('p');
    const readStatus = document.createElement('p');
    const deleteBtn = document.createElement('button');

    deleteBtn.setAttribute('id', 'delete-btn');

    bookTitle.innerHTML = book.title;
    bookAuthor.innerHTML = book.author;
    pageCount.innerHTML = book.pageCount;
    readStatus.innerHTML = book.readStatus;
    deleteBtn.innerHTML = "Delete";

    bookContainer.appendChild(bookTitle);
    bookContainer.appendChild(bookAuthor);
    bookContainer.appendChild(pageCount);
    bookContainer.appendChild(readStatus);
    bookContainer.appendChild(deleteBtn);
    libraryContainer.appendChild(bookContainer);
}

// DISPLAYS EACH BOOK IN THE LIBRARY
function displayLibray() {
    for (let book of myLibrary) {
        createBookCard(book);
    }
}

//Display objects in the myLibrary Array on load.
document.addEventListener('DOMContentLoaded', displayLibray());

function clearForm() {
    document.querySelector('#book-title').value = '';
    document.querySelector('#book-author').value = '';
    document.querySelector('#page-count').value = '';
}

// ADDS BOOK THROUGH THE FORM
const submitBookBtn = document.querySelector('#add-book-btn')

submitBookBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const bookTitle = document.querySelector('#book-title').value;
    const bookAuthor = document.querySelector('#book-author').value;
    const pageCount = document.querySelector('#page-count').value;
    const readStatus = document.querySelector('#read-status').value;

    // Validates form input. If empty input then display error.
    if (bookTitle === '' || bookAuthor === '' || pageCount === '') {
        window.alert('empty fields!')
    } else {
        const newBook = new Book(bookTitle, bookAuthor, pageCount, readStatus);

        addBookToLibrary(newBook, myLibrary);

        createBookCard(newBook);

        clearForm();
    }
});

/*

We have an array that stores book objects.
There is a function that pushes book objects into the array.

Run on load to display books already in the array. use local storage:
    function that loops through the array and displays array objects onto the html doc.
    create div element -> add array data to div -> append div to index.html

add a button that pull up a form.
    - Check for empty input fields
    - If empty show error under inut to fill out field
    - else create book object

adds book to the array ->
displays the newly added book through createBookCard()

delete button on book card:
create a function deleteBook
on click dispaly

*/

const deleteButtonNodes = document.querySelectorAll('#delete-btn');

for (let button of deleteButtonNodes) {
        button.addEventListener('click', (e) => {
            const test = e.target.parentNode;
            console.log(test.childNodes[0].innerHTML);
    })
}