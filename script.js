
let myLibrary = [{title:'The Hobbit', author: 'J.R.R Tolken', pageCount: 263, readStatus: false },{title:'Airplane', author: 'A320', pageCount: 777, readStatus: false }];

// Book Object
function Book(title, author, pageCount, readStatus) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.readStatus = readStatus;
};

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
    let indexNum = target.dataset.indexNumber;
    /*if (indexNum === 0 || indexNum === 1) {
        console.log(indexNum);
        myLibrary.splice(indexNum, 1);
    } else {
        console.log(indexNum);
        indexNum -= 1;
        myLibrary.splice(indexNum, 1);
    }*/
    myLibrary.splice(indexNum, 1);
}

// Selects the libray container from the DOM
const libraryContainer = document.querySelector('#library-container');

// Creates book card to display book object
function createBookCard(book, cardIndex) {
    const bookContainer = document.createElement('div');
    const bookTitle = document.createElement('h2');
    const bookAuthor = document.createElement('p');
    const pageCount = document.createElement('p');
    const readStatus = document.createElement('p');
    const deleteBtn = document.createElement('button');

    deleteBtn.setAttribute('id', 'delete-btn');
    deleteBtn.setAttribute('class', 'delete');
    bookContainer.setAttribute('data-index-number', cardIndex);

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

// Displays books in the myLibrary array
function displayLibray() {
    let i = 0;
    for (let book of myLibrary) {
        createBookCard(book, i);
        i++;
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
        const newBook = new Book(bookTitle, bookAuthor, pageCount, readStatus);

        createBookCard(newBook, (myLibrary.length))

        addBookToLibrary(newBook, myLibrary);;

        clearForm();
    }
});

// Removes book card from the DOM
document.querySelector('#library-container').addEventListener('click', (e) => {
    deleteBook(e.target);

    removeBook(e.target.parentElement);
})

/*
    adding a prototype method on the book card to change the read status:

    extend the book constructor and add changeReadStatus prototype.

    const readStatus = (readStatus === true) ? false: true;


*/

Book.prototype.changeReadStatus = function() {
    readStatus = (this.readStatus === true) ? false : true;
}