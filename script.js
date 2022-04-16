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


// Book Container elements


function displayLibray() {
    for (let book in myLibrary) {
        const bookContainer = document.createElement('div');
        const bookTitle = document.createElement('h2');
        const bookAuthor = document.createElement('p');
        const pageCount = document.createElement('p');
        const readStatus = document.createElement('p');

        bookTitle.innerHTML = myLibrary[book].title;
        bookAuthor.innerHTML = myLibrary[book].author;
        pageCount.innerHTML = myLibrary[book].pageCount;
        readStatus.innerHTML = myLibrary[book].readStatus;

        bookContainer.appendChild(bookTitle);
        bookContainer.appendChild(bookAuthor);
        bookContainer.appendChild(pageCount);
        bookContainer.appendChild(readStatus);
        libraryContainer.appendChild(bookContainer);
    }
}
/*
We have an array that stores book objects.
There is a function that pushes book objects into the array.

function that loops through the array and displays array objects onto the html doc.
create div element -> add array data to div -> append div to index.html

*/


