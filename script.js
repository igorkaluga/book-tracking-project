
let myLibrary = [{title:'The Hobbit', author: 'J.R.R Tolken', pageCount: 263, readStatus: false, bookID: 0},{title:'Airplane', author: 'A320', pageCount: 777, readStatus: false, bookID: 1}];

// working with the changeReadStatusPrototype and myLibrary array
let bookOne = new Book('Something Somehting', 'J.R.R Tolken', 263, 'False', 3);
myLibrary.push(bookOne);

// Book Object
function Book(title, author, pageCount, readStatus, bookID) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.readStatus = readStatus;
    this.bookID = bookID;
};

// adds prototype to change the readStatus of books
Book.prototype.changeReadStatus = function() {
    this.readStatus = this.readStatus === true ? false : true;
}

// Adds book obj to myLibray array
function addBookToLibrary(book, array) {
    array.push(book);
};

// Deletes book card element from the DOM
function deleteBook(target) {
    if (target.classList.contains('delete')) {
        target.parentElement.remove();
    }
}

// Removes book from the myLibrary array
function removeBook(target) {
    let indexNum = Number(target.dataset.bookNumber);
    // finds the book to remove from myLibrary
    let removeIndex = myLibrary.findIndex((book) => book.bookID === indexNum);
    myLibrary.splice(removeIndex, 1);
}

// Selects the libray container from the DOM
const libraryContainer = document.querySelector('#library-container');

// Creates book card to display book object
function createBookCard(book, cardNumber) {
    const bookContainer = document.createElement('div');
    const bookTitle = document.createElement('h2');
    const bookAuthor = document.createElement('p');
    const pageCount = document.createElement('p');
    const readStatus = document.createElement('p');
    const deleteBtn = document.createElement('button');
    const updateStatus = document.createElement('button');

    deleteBtn.setAttribute('id', 'delete-btn');
    deleteBtn.setAttribute('class', 'delete');
    updateStatus.setAttribute('class', 'update');
    bookContainer.setAttribute('data-book-number', cardNumber);

    bookTitle.innerHTML = book.title;
    bookAuthor.innerHTML = book.author;
    pageCount.innerHTML = book.pageCount;
    readStatus.innerHTML = book.readStatus;
    deleteBtn.innerHTML = "Delete";
    updateStatus.innerHTML = "Update Read Status";

    bookContainer.appendChild(bookTitle);
    bookContainer.appendChild(bookAuthor);
    bookContainer.appendChild(pageCount);
    bookContainer.appendChild(readStatus);
    bookContainer.appendChild(deleteBtn);
    bookContainer.appendChild(updateStatus);
    libraryContainer.appendChild(bookContainer);
}

let globalBookID = 0;

// Displays books in the myLibrary array
function displayLibray() {
    for (let book of myLibrary) {
        createBookCard(book, globalBookID);
        globalBookID++;
    }
}

//Display objects in the myLibrary Array on load.
document.addEventListener('DOMContentLoaded', displayLibray());

function clearForm() {
    document.querySelector('#book-title').value = '';
    document.querySelector('#book-author').value = '';
    document.querySelector('#page-count').value = '';
}

// Adds books through the form to the myLibrary array and the library container in the DOM
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
        const newBook = new Book(bookTitle, bookAuthor, pageCount, Boolean(readStatus), globalBookID);

        createBookCard(newBook, globalBookID);

        addBookToLibrary(newBook, myLibrary);;

        clearForm();

        globalBookID++;
    }
});

// Removes book card from the DOM
document.querySelector('#library-container').addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        deleteBook(e.target);
        removeBook(e.target.parentElement);
    } else if (e.target.classList.contains('update')) {
        updateStatus(e.target);
    }
})


// NEEDS TO FIX
function updateStatus(target) {
    let indexNum = target.parentElement.dataset.bookNumber;
    if (target.classList.contains('update')) {
        myLibrary[indexNum].changeReadStatus();
    }
}

/*
===============================================================
BUGS
Drop down value for read status is always true.

===============================================================
adding a prototype method on the book card to change the read status:

extend the book constructor and add changeReadStatus prototype.

const readStatus = (readStatus === true) ? false: true;

updateStatus(target) {
    find index
    myLibrary[index].changeReadStatus();
}
*/