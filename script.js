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
const libraryContainer = document.getElementById('library-container');

function createBookCard(book) {
    const bookContainer = document.createElement('div');
    const bookTitle = document.createElement('h2');
    const bookAuthor = document.createElement('p');
    const pageCount = document.createElement('p');
    const readStatus = document.createElement('p');

    bookTitle.innerHTML = book.title;
    bookAuthor.innerHTML = book.author;
    pageCount.innerHTML = book.pageCount;
    readStatus.innerHTML = book.readStatus;

    bookContainer.appendChild(bookTitle);
    bookContainer.appendChild(bookAuthor);
    bookContainer.appendChild(pageCount);
    bookContainer.appendChild(readStatus);
    libraryContainer.appendChild(bookContainer);
}

function displayLibray() {
    for (let book of myLibrary) {
        createBookCard(book);
    }
}
/*
We have an array that stores book objects.
There is a function that pushes book objects into the array.

Run on load to display books already in the array. use local storage:
    function that loops through the array and displays array objects onto the html doc.
    create div element -> add array data to div -> append div to index.html

add a button that pull up a form.
form creates book object.
adds book to the array ->
displays the newly added book through createBookCard()



*/


